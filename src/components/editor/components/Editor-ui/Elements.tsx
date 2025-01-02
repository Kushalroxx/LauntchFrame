import { CardTypes } from '@/lib/assets/constants'
import React from 'react'
import { useDrag } from 'react-dnd'

function Elements() {
    const [{isdragging},drag] = useDrag(()=>({
        type:"card",
        item:{id:Date.now(),type:"card"},
        collect:(e)=>{
        return {isdragging:!!e.isDragging()}
        }
    }))
  return (
    <div ref={drag}>
        card
    </div>
  )
}

export default Elements