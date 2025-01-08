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
        <Button variant={"link"} onClick={onClick} className={`h-6 hover:bg-foreground/10 dark:text-foreground w-6 py-1 px-3 ml-1 ${className}`} >{buttonText}</Button>
    </HoverCardTrigger>
    <HoverCardContent>
        {cardText}
    </HoverCardContent>
   </HoverCard>
  )
}

export default HoverButton