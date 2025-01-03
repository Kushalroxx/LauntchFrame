import React, { useEffect } from 'react'
import { elementType } from '../../types/edetorTypes'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription, Input, Button } from '@/components/ui';
import SelectWrapper from '../lib/selectWrapper';
import { useAtom } from 'jotai';
import { refState } from '@/lib/atoms/Atoms';
import { Label } from '@/components/ui/label';

function EditorRenderingHelper({ element }: {
  element: elementType[number]}) {
    const [currentRef, setCurrentRef] = useAtom(refState)
    useEffect(() => {
      if (currentRef) {
        currentRef.scrollIntoView({ behavior: "smooth", block: "center" })
        currentRef.style.outline = "2px solid #0d6efd";
      }
    }, [currentRef])
    if (element.type === "card"){
      return(<SelectWrapper><Card className="flex flex-col space-y-3 p-7" id={element.id.toString()}>
      
      {
        element.childElement?.map(e=>{
          return(
            <EditorRenderingHelper key={e.id.toString()} element={e}/>
        )})
      }
    </Card></SelectWrapper>)
    }else if(element.type === "input"){
      return(<SelectWrapper><Input id={element.id.toString()}/></SelectWrapper>)
    }else if(element.type === "button"){
      return(<SelectWrapper><Button className='' id={element.id.toString()}>{element.text}</Button></SelectWrapper>)
    }else if (element.type === "label") {
      return<SelectWrapper><Label id={element.id.toString()}>{element.text}</Label></SelectWrapper>
    }else if (element.type === "typographyh1") {
      return<SelectWrapper><h1 className='text-foreground font-extrabold text-2xl' id={element.id.toString()}>{element.text}</h1></SelectWrapper>
    }
    else{
      return(<div></div>)
    }
  }

export default EditorRenderingHelper