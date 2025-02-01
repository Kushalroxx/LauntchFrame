import React from 'react'
import DragElements from './dragElements'
import { dragAbleTypes } from '../../types/editorTypes'

function Elements() {
  return (
    <div className='h-1/3 overflow-y-auto flex justify-center flex-wrap'>
      {Object.values(dragAbleTypes).map((e, i)=><DragElements key={i} type={e}/>)}
    </div>
  )
}

export default Elements