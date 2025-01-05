import React from 'react'
import DragElements from './dragElements'
import { dragAbleTypes } from '../../types/editorTypes'

function Elements() {
  return (
    <div className='overflow-y-auto'>
      {Object.values(dragAbleTypes).map((e, i)=><DragElements key={i} type={e}/>)}
    </div>
  )
}

export default Elements