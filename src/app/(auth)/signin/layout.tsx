import { Metadata } from "next";
import React from 'react'

export const metadata:Metadata ={
    title:"Welcome Back",
    description: "Login to LauntchFrame the zero code website builder"
  } 
function layout({children}:{children:React.ReactElement}) {
    return (
      <>
        {children}
      </>
    )
  }
  
export default layout