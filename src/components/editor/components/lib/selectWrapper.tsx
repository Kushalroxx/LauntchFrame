"use client"
import { refState } from '@/lib/atoms/Atoms'
import { useAtom } from 'jotai'
import React, { cloneElement } from 'react'

function SelectWrapper({children}:{children:React.ReactElement<any>}) {
    const [currentRef, setCurrentRef] = useAtom(refState)
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (currentRef && currentRef != e.currentTarget) {
      currentRef.style.outline = ""
    }
    setCurrentRef(e.currentTarget)
  }
  return (cloneElement(children,{
      onClick: handleClick,
      onMouseEnter:(e:React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        e.currentTarget.style.zIndex = "10"
        e.currentTarget.style.outline = "2px solid #0d6efd";
      },
      onMouseLeave:(e:React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        if (currentRef != e.currentTarget) {
          e.currentTarget.style.outline = "0px solid transparent";
          e.currentTarget.style.zIndex = "0"
        }}
})
      
  )
}

export default SelectWrapper