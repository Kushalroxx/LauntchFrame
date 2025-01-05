"use client"
import { designState, editorState, refState } from '@/lib/atoms/Atoms'
import { useAtom } from 'jotai'
import React, { cloneElement, useEffect, useRef, useState } from 'react'
import { UUIDTypes } from 'uuid'
import { dragAbleTypes, elements } from '../../types/editorTypes'
import { useDrag, useDrop } from 'react-dnd'

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
        hover:(item:{index:number, type:string},monitor)=>{
            console.log("item:", item, "index:", index);
            
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
    }, [designer, drag, drop])

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget !== e.target) return;
    e.stopPropagation();
    if (currentRef && currentRef != e.currentTarget) {
      currentRef.style.outline = ""
    }
    setCurrentRef(e.currentTarget)
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
      // need to fix the focus not working on first doubleclick
      currentRef.focus()
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

  return (cloneElement(children, {
    onClick: handleClick,
    ref: (node:HTMLElement|undefined)=>{elementRef.current=node},
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onDoubleClick: handleDoubleClick,
    onBlur: handleBlur,
    contentEditable: contentEditable,
    suppressContentEditableWarning:true
  }))
}

export default SelectEditWrapper