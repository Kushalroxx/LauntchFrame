import React from 'react'
import { useDrag } from 'react-dnd'
import { v4 as uuid } from 'uuid'
import {dragAbleTypes} from "@/components/editor/types/edetorTypes"

function DragElements({type}:{
  type:typeof dragAbleTypes[keyof typeof dragAbleTypes]}) {
    const [{isdragging},drag] = useDrag(()=>({
        type:type,
        item:()=>{return({id:uuid(),type:type})},
        collect:(e)=>{
        return {isdragging:!!e.isDragging()}
        }
    }))
  return (
    // @ts-ignore
    <div ref={drag}>
        {type}
    </div>
  )
}

export default DragElements