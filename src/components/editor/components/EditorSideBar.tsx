import React from 'react'
import Pages from './Editor-ui/Pages'
import Elements from './Editor-ui/Elements'

function EditorSideBar() {
  return (
    <div className='w-[20%] max-h-[60vh]'>
      
      <Pages/>
      <Elements/>
    </div>
  )
}

export default EditorSideBar