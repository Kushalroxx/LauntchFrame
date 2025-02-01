import React from 'react'
import { useAtom } from 'jotai'
import { styleNavState } from '@/lib/atoms/Atoms'
import ElementStyles from './ElementStyles'

function RenderActiveElement() {
const [activeNav, setActiveNav] = useAtom(styleNavState)
  if (activeNav==="advanced") {
    return(<div>advanced</div>)
  }else if (activeNav ==="style") {
    return(<ElementStyles/>)
  }else{
    return(<div></div>)
  }
}

export default RenderActiveElement