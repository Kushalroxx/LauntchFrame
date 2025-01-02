import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card'
import { Button } from './button'

function HoverButton({
    className,
    buttonText,
    cardText,
    onClick,
}:{
    className?:string,
    buttonText?:string|React.ReactElement,
    cardText?:string,
    onClick?:React.MouseEventHandler<HTMLButtonElement>,
    
}) {
  return (
   <HoverCard>
    <HoverCardTrigger >
        <Button onClick={onClick} className={`p-3 active:bg-secondary/50 hover:bg-secondary/20 ${className}`} >{buttonText}</Button>
    </HoverCardTrigger>
    <HoverCardContent>
        {cardText}
    </HoverCardContent>
   </HoverCard>
  )
}

export default HoverButton