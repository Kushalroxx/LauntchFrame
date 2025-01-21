"use client"
import Editor from "@/components/editor/Index";

export default function Home() {  
  return (
    <div className="h-screen " onContextMenu={e=>e.preventDefault()}>
        <Editor/>
    </div>
  )}