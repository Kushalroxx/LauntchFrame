"use client"
import HoverButton from '@/components/ui/hoverButton'
import React from 'react'
import { useAtom } from 'jotai';
import { canvasSizeState, designState, previewState } from '@/lib/atoms/Atoms';
import { LuUndo2, LuRedo2 } from "react-icons/lu";
import { LuGrab } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { IoIosTabletLandscape } from "react-icons/io";
import { IoDesktopOutline } from "react-icons/io5";

function EditorTopBar() {
  const [preview, setPreview] = useAtom(previewState)
  const [design, setDesign] = useAtom(designState)
  const [canvasSize, setCanvasSize] = useAtom(canvasSizeState)

  return (
    <div className='flex w-full justify-between h-7 bg-background/95 text-foreground z-50 sticky top-0 bg-opacity-90 backdrop-blur supports-[backdrop-filter]:bg-background/65 border-b border-b-foreground/25 px-10 '>
      <div className='flex gap-1 justify-center items-center'>
      <h1>LOGO</h1>
      </div>
      <div className='flex gap-8 justify-center items-center'>
      <div className='flex gap-1 justify-center items-center'>
      <HoverButton cardText='Undo (Ctrl+z)' buttonText={<LuUndo2/>}/>
      <HoverButton cardText='Redo (Ctrl+y)' buttonText={<LuRedo2/>}/>
      </div>
      <div className='flex gap-1 justify-center items-center'>
      <HoverButton className={`${design?"bg-foreground/10":""}`} onClick={e=>setDesign(i=>!i)} cardText='Designer mode(Free Dragging)' buttonText={<LuGrab/>}/>
      <HoverButton cardText={preview?'Edit again':'Preview'} buttonText={preview?<FaRegEdit/>:<FaRegEye/>} onClick={()=>setPreview(e=>!e)} />
      <HoverButton cardText='Download Code' buttonText={<MdFileDownload/>} className=''/>
      </div>
      </div>
      <div className='flex gap-1 justify-center items-center'>
      <HoverButton onClick={e=>setCanvasSize({height:"932px",width:"320px"})} cardText='Mobile View' buttonText={<FaMobileAlt/>} className={`${canvasSize.width==="320px"?"bg-foreground/10":""}`}/>
      <HoverButton onClick={e=>setCanvasSize({height:"1180px",width:"568px"})} cardText={"Tablet View"} buttonText={<IoIosTabletLandscape />} className={`${canvasSize.width==="568px"?"bg-foreground/10":""}`}/>
      <HoverButton onClick={e=>setCanvasSize({height:"100%",width:"1024px"})} cardText='Desktop View' buttonText={<IoDesktopOutline />} className={`${canvasSize.width==="1024px"?"bg-foreground/10":""}`}/>
      </div>
    </div>
  )
}

export default EditorTopBar