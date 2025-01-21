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
          <div className={element.style} id={element.id.toString()}>
      {
        element.childElement?.map((e,i)=>{
          return(
            <EditorRenderingHelper index={i} key={e.id.toString()} element={e}/>
        )})
      }
    </div>
    </SelectEditWrapper>
    )
    }else if(element.type === "input"){
      return(
        <SelectEditWrapper id={element.id} type={element.type} index={index}>
        <input className={element.style} id={element.id.toString()}/>
        </SelectEditWrapper>
        )
    }else if(element.type === "button"){
      return(
        <SelectEditWrapper id={element.id} type={element.type} index={index}>
        <button className={element.style} id={element.id.toString()}>{element.text}</button>
        </SelectEditWrapper>
)
    }else if (element.type === "label") {
      return(
        <SelectEditWrapper id={element.id} type={element.type} index={index}>
        <label className={element.style} id={element.id.toString()}>{element.text}</label>
        </SelectEditWrapper>
      )
    }else if (element.type === "typographyh1") {
      return(
        <SelectEditWrapper id={element.id} type={element.type} index={index}>
        <h1 className={`text-foreground font-extrabold text-2xl ${element.style}`} id={element.id.toString()}>{element.text}</h1>
        </SelectEditWrapper>
      )
    }else if (element.type === "div") {
      return(
      <SelectEditWrapper id={element.id} type={element.type} index={index}>
        <div className={element.style}>
          {
            element.childElement?.map((e,i)=>{
              return(<EditorRenderingHelper element={e} index={i} key={e.id.toString()} />)
            })
          }
        </div>
      </SelectEditWrapper>)
    }
    else{
      return(<div></div>)
    }
  }

export default EditorRenderingHelper