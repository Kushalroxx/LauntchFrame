import React from 'react'
import { useDrag } from 'react-dnd'
import { v4 as uuid } from 'uuid'
import {dragAbleTypes} from "@/components/editor/types/editorTypes"
import { items } from '../lib/assets'

function DragElements({type}:{
  type:typeof dragAbleTypes[keyof typeof dragAbleTypes]}) {
    const [{isdragging},drag] = useDrag(()=>({
        type:type,
        item:()=>{return({id:uuid(),type:type})},
        collect:(e)=>{
        return {isdragging:e.isDragging()}
        }
    }))
    const currentItem = items[type]
  return (
    // @ts-ignore
    <div className={`flex flex-col py-3 justify-center items-center w-[90px] text-foreground rounded border hover:border-blue-500 hover:bg-blue-500/5 ${isdragging?"hover:text-foreground/65":""} mb-2`}  ref={drag}>
        {currentItem?.icon}
        <div className='text-[11px] font-medium'>{currentItem?.label}</div>
    </div>
  )
}

export default DragElements