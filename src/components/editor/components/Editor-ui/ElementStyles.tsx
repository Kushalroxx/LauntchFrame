import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import ElementDisplay from './ElementDisplay'
import ElementTypography from './ElementTypography'
import ElementSize from './ElementSize'
import ElementMargin from './ElementMargin'
import ElementPadding from './ElementPadding'
import ElementBorder from './ElementBorder'
import ElementBorderRadius from './ElementBorderRadius'
import ElementBackgroundImage from './ElementBackgroundImage'
import ElementAnimation from './ElementAnimation'
import { editorState, refState } from '@/lib/atoms/Atoms'
import { useAtom } from 'jotai'

function ElementStyles() {
    const [elements, setElements] = useAtom(editorState)
  const [currentRef, setCurrentRef] = useAtom(refState)
  if (currentRef) {
    
      return (
          <>
    <Accordion defaultValue={["Display", "Typography", "Size", "Margin"]} className='h-full overflow-y-auto' type='multiple'>
        <AccordionItem value='Display'>
            <AccordionTrigger >Display</AccordionTrigger>
            <AccordionContent>
                <ElementDisplay currentRef={currentRef} elements={elements}/>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value='Typography'>
            <AccordionTrigger>Typography</AccordionTrigger>
            <AccordionContent>
                <ElementTypography/>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value='Size'>
            <AccordionTrigger>Size</AccordionTrigger>
            <AccordionContent>
                <ElementSize/>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value='Margin'>
            <AccordionTrigger>Margin</AccordionTrigger>
            <AccordionContent>
                <ElementMargin/>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value='Padding'>
            <AccordionTrigger>Padding</AccordionTrigger>
            <AccordionContent>
                <ElementPadding/>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value='Border'>
            <AccordionTrigger>Border</AccordionTrigger>
            <AccordionContent>
                <ElementBorder/>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value='BorderRadius'>
            <AccordionTrigger>Border radius</AccordionTrigger>
            <AccordionContent>
                <ElementBorderRadius/>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value='BackgroundImage'>
            <AccordionTrigger>Background image</AccordionTrigger>
            <AccordionContent>
                <ElementBackgroundImage/>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value='Animation'>
            <AccordionTrigger>Animation</AccordionTrigger>
            <AccordionContent>
                <ElementAnimation/>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
    </>
  )
}else{
    return(<>
    <div className='text-foreground/50 text-center text-xs'>Please select an element</div>
    </>)
}
}

export default ElementStyles