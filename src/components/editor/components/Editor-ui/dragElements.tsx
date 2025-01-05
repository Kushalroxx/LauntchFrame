import React from 'react'
import { useDrag } from 'react-dnd'
import { v4 as uuid } from 'uuid'
import {dragAbleTypes} from "@/components/editor/types/editorTypes"

function DragElements({type}:{
  type:typeof dragAbleTypes[keyof typeof dragAbleTypes]}) {
    const [{isdragging},drag] = useDrag(()=>({
        type:type,
        item:()=>{return({id:uuid(),type:type})},
        collect:(e)=>{
        return {isdragging:e.isDragging()}
        }
    }))
  return (
    // @ts-ignore
    <div className={`text-foreground ${isdragging?"hover:text-foreground/65":""}`}  ref={drag}>
        {type}
    </div>
  )
}

export default DragElements