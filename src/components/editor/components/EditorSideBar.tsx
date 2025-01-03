import React from 'react'
import Pages from './Editor-ui/Pages'
import DragElements from './Editor-ui/dragElements'
import Elements from './Editor-ui/elements'

function EditorSideBar() {
  return (
    <div className='w-[20%] border-r border-r-foreground/30  h-full bg-background text-foreground'>
      <Pages className=' max-h-[60vh]'/>
            <Elements/>
      
    </div>
  )
}

export default EditorSideBar