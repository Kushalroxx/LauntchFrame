import { Button } from '@/components/ui'
import React, { useState } from 'react'
import { IoColorFillOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { useAtom } from 'jotai';
import { styleNavState } from '@/lib/atoms/Atoms';


function StyleNavBar() {
  const [activeNav, setActiveNav] = useAtom(styleNavState)
  return (
    <ul id="styleNav" className=' flex justify-center gap-4 items-center'>
      <div className=' flex flex-col'>
           <li onClick={e=>setActiveNav("style")} id='style' className={`cursor-pointer transition-all duration-150 text-xs flex gap-[2px] justify-center items-center font-medium p-1`}> <IoColorFillOutline className={`text-base ${activeNav==="style"? "border-b text-blue-700":""}`}/>Style</li>
           <span className={`h-[2px] w-full ${activeNav==="style"?"bg-blue-700":""}`}></span>
           </div>
        <div className='flex flex-col'>
        <li onClick={e=>setActiveNav("advanced")} id='advanced' className={`cursor-pointer transition-all duration-150 text-xs flex gap-[2px] justify-center items-center font-medium p-1`}> <CiSettings className={`text-base ${activeNav==="advanced"? "border-b text-blue-700":""}`} />Advanced
        </li>
        <span className={`h-[2px] w-full ${activeNav==="advanced"?"bg-blue-700":""}`}></span>
        </div>
      </ul>
  )
}

export default StyleNavBar