import { UUIDTypes } from 'uuid';
import { useAtom } from 'jotai';
import React, { useEffect } from 'react'
import { useDrop } from 'react-dnd'
import { canvasSizeState, editorState, zoomState } from '@/lib/atoms/Atoms';
import EditorRenderingHelper from './Editor-ui/EditorRenderingHelper';
import { dragAbleTypes, elements } from '../types/editorTypes';
import { addElement } from './lib/addElement';
import {motion} from "framer-motion"
import { Button, Card, CardHeader, CardTitle, ScrollArea } from '@/components/ui';
import { removeNode } from './lib/removeNode';

function Canvas() {
  const [elements, setElements] = useAtom(editorState)
  const [canvasSize, setCanvasSize] = useAtom(canvasSizeState)
  const [zoom, setZoom] = useAtom(zoomState)
  const [,drop] = useDrop(()=>({
    accept:Object.values(dragAbleTypes),
    drop:(item:{id:UUIDTypes,type:elements,index?:number}, monitor)=>{      
      if (monitor.didDrop()||!item) {
        return
      } 
      let inParent = false
      for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        if (element.id === item.id) {
          inParent = true
        }
      }
      if(!inParent && item.index !=undefined){
        setElements(prev=>{
          const oldElements = [...prev]
          const node = removeNode(oldElements,item.id)
          node && oldElements.push(node)
          return oldElements
        })
      }else{
        addElement(item, setElements)
      }}
    }))
    const handleScroll =(e:React.WheelEvent)=>{
      if(!e.ctrlKey)return
      if (e.deltaY < 0) {
        setZoom(prev=>{
          if (prev===2.0) {
            return prev
          }
          const newValue = prev+.1
          if (newValue>2) {
            return 2.0
          }
          return newValue
        })
      }else{
        setZoom(prev=>{
          if (prev ===.1) {
            return prev
          }
          const newValue = prev - .1
          if (newValue<.1) {
            return .1
          }
          return newValue
        })
      }
      
    }
    useEffect(()=>{
      window.addEventListener("wheel",e=>e.ctrlKey?e.preventDefault():"",{passive:false})
    },[])
  return (
    //  @ts-ignore
    <motion.div onWheel={handleScroll} initial={{width:"1024px"}} animate={{width: canvasSize.width}} transition={{ease:"backInOut",duration:0.6}} className=' w-full bg-background shadow-xl shadow-foreground/40' ref={drop}>
      <ScrollArea style={{transition:"all",transform:`scale(${zoom})`, transformOrigin:"top left", width: `${100 / zoom}%`, height: `${100 / zoom}%`,}} className='h-[95vh]'>
      {elements.map((e, index)=>{
        return(<EditorRenderingHelper index={index} key={e.id.toString()} element = {e}/>)
      })}
      </ScrollArea>
    </motion.div>

  )
}

export default Canvas