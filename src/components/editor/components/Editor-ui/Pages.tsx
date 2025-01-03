"use client"
import { ScrollArea } from '@/components/ui'
import React from 'react'
import AccordionSimple from '@/components/ui/accordionSimple'

function Pages({className}:{className?:string}) {
  return (
    <div className={className}>
        <ScrollArea>
      <AccordionSimple content={<AccordionSimple heading='NavBar' content={"arr"}/>} heading='home'/>
        </ScrollArea>
    </div>
  )
}

export default Pages