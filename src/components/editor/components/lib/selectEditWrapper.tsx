"use client"
import { designState, editorState, refState } from '@/lib/atoms/Atoms'
import { useAtom } from 'jotai'
import React, { cloneElement, createElement, useEffect, useRef, useState } from 'react'
import { UUIDTypes } from 'uuid'
import { dragAbleTypes, elements, elementType } from '../../types/editorTypes'
import { useDrag, useDrop } from 'react-dnd'
import { removeNode} from './removeNode'
import { deepCopy } from './deepcopy'
import { insertNode } from './insartNode'
import { findIndex } from './findIndex'
import {Rnd} from "react-rnd"
import ResizableBox from '../Editor-ui/ResizeableBox'

function SelectEditWrapper({ children, id, type, index }: { children: React.ReactElement<any> ,
  id:UUIDTypes,
  type:elements,
  index:number
}) {
  const [currentRef, setCurrentRef] = useAtom(refState)
  const [contentEditable, setContentEditable] = useState<boolean>(false)
  const [elements, setElements] = useAtom(editorState)
  const [designer, setDesigner] = useAtom(designState)
    const elementRef = useRef<HTMLElement|undefined>(undefined)
    const [{isDragging},drag] = useDrag(()=>({
        type:type,
        item: {index:index, id:id, type:type},
        collect:(monitor)=>({
            isDragging:monitor.isDragging()
        })
    }))
    const [, drop] = useDrop(()=>({
        accept:Object.values(dragAbleTypes),
        drop:(item:{index:number, id:UUIDTypes, type:string},monitor)=>{     
          if (monitor.didDrop()||!item||item.id===id) {
            return
          }
          setElements(prev=>{ 
            const oldElements = deepCopy(prev);
            const targetIndex = findIndex(id,oldElements)
              if(targetIndex!=undefined){
                const draggedNode = removeNode(oldElements, item.id);
            if (draggedNode) {
                insertNode(oldElements, id, draggedNode, targetIndex);
              }
            }
            return oldElements

          })
        }
    }))
    useEffect(() => {
        if (designer && elementRef.current) {
            
            drag(elementRef.current)
            drop(elementRef.current)
        }else{
          drag(null)
          drop(null)
        }
    }, [elements,designer, drag, drop])
    useEffect(() => {
      currentRef?.focus()
      // console.log(currentRef);
      
    }, [currentRef])
    

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (e.currentTarget !== e.target) return;
    if (currentRef && currentRef != e.currentTarget) {
      currentRef.style.outline = ""
    }
    setCurrentRef(e.currentTarget )
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget !== e.target) return;
    e.stopPropagation();
    e.currentTarget.style.zIndex = "10"
    e.currentTarget.style.outline = "2px solid #0d6efd";
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget !== e.target) return;
    e.stopPropagation();
    if (currentRef != e.currentTarget) {
      e.currentTarget.style.outline = "0px solid transparent";
      e.currentTarget.style.zIndex = "0"
    }
  }

  const handleDoubleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget !== e.target) return;
    e.stopPropagation();
    if(currentRef === e.currentTarget){
      setContentEditable(true)
    }

  }

  const handleBlur = (e: React.MouseEvent<HTMLElement>) => {
    setElements(prev=>{
      const allElements = [...prev]
      const editedElements = allElements.map(item=>{
        if(item.id.toString() === e.currentTarget.id){
          item.text = e.currentTarget.innerText
          return item
        }else{
          const childItems = item.childElement && item.childElement.map(child=>{
            if (child.id.toString() === e.currentTarget.id){
               child.text = e.currentTarget.innerText
               return child
            }
            return child
          })
           item.childElement = childItems
           return item
        }
      })
      return editedElements
    })
    setContentEditable(false)
  }

  return (<ResizableBox ref ={elementRef}>{cloneElement(children, {
    onClick: handleClick,
    ref: (node:HTMLElement|undefined)=>{elementRef.current=node},
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onDoubleClick: handleDoubleClick,
    onBlur: handleBlur,
    contentEditable: contentEditable,
    suppressContentEditableWarning:true
  })}</ResizableBox>)
}

export default SelectEditWrapper