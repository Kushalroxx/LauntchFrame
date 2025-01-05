import React, { useEffect } from 'react'
import { elementType } from '../../types/editorTypes'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription, Input, Button } from '@/components/ui';
import SelectEditWrapper from '../lib/selectEditWrapper';
import { useAtom } from 'jotai';
import { refState } from '@/lib/atoms/Atoms';
import { Label } from '@/components/ui/label';

function EditorRenderingHelper({ element, index }: {
  element: elementType[number], index:number}) {
    const [currentRef, setCurrentRef] = useAtom(refState)
    useEffect(() => {
      if (currentRef) {
        currentRef.scrollIntoView({ behavior: "smooth", block: "center" })
        currentRef.style.outline = "2px solid #0d6efd";
      }
    }, [currentRef])
    if (element.type === "card"){
      return(
        <SelectEditWrapper id={element.id} type={element.type} index={index}>
          <Card className="flex flex-col space-y-3 p-7" id={element.id.toString()}>
      {
        element.childElement?.map((e,i)=>{
          return(
            <EditorRenderingHelper index={i} key={e.id.toString()} element={e}/>
        )})
      }
    </Card>
    </SelectEditWrapper>
    )
    }else if(element.type === "input"){
      return(
        <SelectEditWrapper id={element.id} type={element.type} index={index}>
        <Input id={element.id.toString()}/>
        </SelectEditWrapper>
        )
    }else if(element.type === "button"){
      return(
        <SelectEditWrapper id={element.id} type={element.type} index={index}>
        <Button className='' id={element.id.toString()}>{element.text}</Button>
        </SelectEditWrapper>
)
    }else if (element.type === "label") {
      return(
        <SelectEditWrapper id={element.id} type={element.type} index={index}>
        <Label id={element.id.toString()}>{element.text}</Label>
        </SelectEditWrapper>
      )
    }else if (element.type === "typographyh1") {
      return(
        <SelectEditWrapper id={element.id} type={element.type} index={index}>
        <h1 className='text-foreground font-extrabold text-2xl' id={element.id.toString()}>{element.text}</h1>
        </SelectEditWrapper>
      )
    }
    else{
      return(<div></div>)
    }
  }

export default EditorRenderingHelper