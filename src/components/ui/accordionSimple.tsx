import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion'

function AccordionSimple({
    content,
    heading
}:{
    content:string|React.ReactElement,
    heading:string
}) {
  return (
        <Accordion className='ml-1' type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>{heading}</AccordionTrigger>
    <AccordionContent className='pl-1'>
      {content}
    </AccordionContent>
  </AccordionItem>
</Accordion>
  )
}

export default AccordionSimple