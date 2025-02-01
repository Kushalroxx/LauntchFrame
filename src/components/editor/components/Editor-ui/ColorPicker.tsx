import { Input } from '@/components/ui'
import React from 'react'
import { HexColorInput, HexColorPicker, HslColorPicker, RgbColorPicker } from 'react-colorful'

export default function ColorPicker({color,setColor,activeState}:{color:string,setColor:any,activeState:"hsl"|"rgb"|"hex"}) {
  if (activeState === "hex") {
    return (
        <div className='flex flex-col w-full items-center'>
            <HexColorPicker color={color} onChange={setColor} />
                      <Input className='mt-2'/>
                      hex
        </div>
      )
  }else if (activeState === "hsl") {
    return(
    <div className='flex flex-col w-full items-center'>
        <HslColorPicker/>
        <Input className='mt-2'/>
    hsl
    </div>)
  }else if(activeState === "rgb"){
    return(
    <div className='flex flex-col w-full items-center'>
      <RgbColorPicker/>
     <Input className='mt-2'/>
    rgb
    </div>)
  }
}
