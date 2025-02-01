import React from 'react'
import Pages from './Editor-ui/Pages'
import DragElements from './Editor-ui/dragElements'
import Elements from './Editor-ui/elements'
import EditorStyleBar from './Editor-ui/EditorStyleBar'

function EditorSideBar() {
  return (
    <div className='w-[19%] relative left-0 z-50 border-r border-r-foreground/30 h-full bg-background text-foreground'>
            <Elements/>
            <EditorStyleBar/>
      
    </div>
  )
}

export default EditorSideBar