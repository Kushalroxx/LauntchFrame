import React from 'react'
import DragElements from './dragElements'
import { dragAbleTypes } from '../../types/edetorTypes'

function Elements() {
  return (
    <div>
      {Object.values(dragAbleTypes).map((e, i)=><DragElements key={i} type={e}/>)}
    </div>
  )
}

export default Elements