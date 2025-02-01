import React, { useEffect, useState } from 'react'
import { elementType } from '../../types/editorTypes'
import { HexColorInput, HexColorPicker } from "react-colorful";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import ColorPicker from './ColorPicker';
import { Button } from '@/components/ui';

function ElementDisplay({currentRef,elements}:{currentRef:HTMLElement,elements:elementType}) {
  const [color, setColor] = useState("");
  useEffect(() => {
    const styles = currentRef.classList
    styles.forEach(e=>{
      if(e.trim().startsWith("bg-")){
        const color = e.split("-")[1]
        if (color.startsWith("[")) {
          color.replace("[","")
          color.replace("]","")
        }
        setColor(color)
      }
    })
  }, [currentRef])
  useEffect(() => {
    console.log(color);
    
  }, [color])
  const colorTypes:["hsl","rgb","hex"] =["hsl", "rgb", "hex"] 
  const [colorIndex,setColorIndex] = useState(2)
  const [activeState, setActiveState] = useState(colorTypes[colorIndex])
  useEffect(() => {
    setActiveState(colorTypes[colorIndex])
    
  }, [colorIndex])
  
  
  return (
    <div>
      <Popover >
        <span className='flex gap-2 items-center text-foreground'><label className='cursor-pointer' htmlFor="trigger">Background color</label> 
        <PopoverTrigger id='trigger' className='w-3 h-3 border-foreground border' style={{backgroundColor:color.startsWith("#")?`${color}`:`hsl(var(--${color}))`}}></PopoverTrigger>
        </span>
        <PopoverContent className='flex items-center ml-14 w-56 justify-center flex-col'>
          <ColorPicker color={color} setColor={setColor} activeState={activeState}/>
          <div className='absolute flex flex-col right-1 bottom-2'>
          <Button className='p-0 h-4 w-4' variant={"outline"} onClick={e=>{
            setColorIndex(prev=>{
              let i = prev
              i++
              if (i>2) {
                i = 0
              }
              return i
            })
          }
            }
          >+</Button>
          <Button className='p-0 h-4 w-4' variant={"outline"} onClick={e=>{
            setColorIndex(prev=>{
              let i = prev
              i--
              if (i<0) {
                i = 2
              }
              return i
            }) 
        }
          }>-</Button>
          </div>
        </PopoverContent>
      </Popover>

      
    </div>
  )
}

export default ElementDisplay