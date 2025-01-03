import { UUIDTypes } from 'uuid';
import { useAtom } from 'jotai';
import React from 'react'
import { useDrop } from 'react-dnd'
import { editorState } from '@/lib/atoms/Atoms';
import EditorRenderingHelper from './Editor-ui/EditorRenderingHelper';
import { dragAbleTypes } from '../types/edetorTypes';
import { addElement } from './lib/addElement';

function Canvas() {
  const [elements, setElements] = useAtom(editorState)
  const [,drop] = useDrop(()=>({
    accept:Object.values(dragAbleTypes),
    drop:(item:{id:UUIDTypes,type:string}, monitor)=>{
      addElement(item, setElements)
    }
  }))
  return (
    // @ts-ignore
    <div className='h-full w-full flex flex-col items-center bg-background/25'ref={drop}>
      {elements.map(e=>{
        return(<EditorRenderingHelper key={e.id.toString()} element = {e}/>)
      })}
    </div>

  )
}

export default Canvas