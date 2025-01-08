import { UUIDTypes } from 'uuid';
import { useAtom } from 'jotai';
import React, { useEffect } from 'react'
import { useDrop } from 'react-dnd'
import { canvasSizeState, editorState } from '@/lib/atoms/Atoms';
import EditorRenderingHelper from './Editor-ui/EditorRenderingHelper';
import { dragAbleTypes, elements } from '../types/editorTypes';
import { addElement } from './lib/addElement';
import {motion} from "framer-motion"
import { Button, Card, CardHeader, CardTitle, ScrollArea } from '@/components/ui';

function Canvas() {
  const [elements, setElements] = useAtom(editorState)
  const [canvasSize, setCanvasSize] = useAtom(canvasSizeState)
  // useEffect(()=>{
  //   console.log(elements);
    
  // },[elements])
  const [,drop] = useDrop(()=>({
    accept:Object.values(dragAbleTypes),
    drop:(item:{id:UUIDTypes,type:elements,index?:number}, monitor)=>{ 
      if(item.index != undefined && item.index >= 0){
        setElements(prev=>{
          const oldElements = [...prev]
          if(item.index!=undefined){
            // const movedElement = oldElements.splice(item.index, 1)
            // oldElements.push(movedElement[0])
          }
          return oldElements
        })
    }else{
      addElement(item, setElements)
    }}
  }))
  return (
    //  @ts-ignore
    <motion.div initial={{width:1024}} animate={{width: canvasSize.width}} transition={{ease:"backInOut",duration:0.6}} className=' w-full bg-background shadow-xl shadow-foreground/40' ref={drop}>
      <ScrollArea className='h-[95vh]'>
      {elements.map((e, index)=>{
        return(<EditorRenderingHelper index={index} key={e.id.toString()} element = {e}/>)
      })}
      </ScrollArea>
    </motion.div>

  )
}

export default Canvas