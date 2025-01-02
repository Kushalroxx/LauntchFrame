"use client"
import Editor from "@/components/editor/Index";
import { sendMail } from "@/lib/sendMail";
import { DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend"

export default function Home() {  
  // await sendMail()
  return (
    <div className="">
       
        <Editor/>
    </div>
  )}