import React from 'react'
import StyleNavBar from './StyleNavBar'
import RenderActiveElement from './RenderActiveElement'

function EditorStyleBar() {
  
  return (
    <div className=' bg-background w-full h-[55%] border-l z-50 border-foreground/30 px-1'>
      <StyleNavBar/>
      <RenderActiveElement/>
    </div>
  )
}

export default EditorStyleBar