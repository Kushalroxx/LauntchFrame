import { CardTypes as componentTypes } from '@/lib/assets/constants'
import React from 'react'
import { useDrop } from 'react-dnd'
import { object } from 'zod';

function Canvas() {
  const [,drop] = useDrop(()=>({
    accept:Object.values(componentTypes),
    drop:(item, monitor)=>{
      console.log(item);
      
    }
  }))
  return (
    <div className='h-screen relative border w-full bg-slate-200'ref={drop}></div>
  )
}

export default Canvas