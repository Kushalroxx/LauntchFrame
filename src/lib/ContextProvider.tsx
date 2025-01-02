import NextTopLoader from 'nextjs-toploader'
import React from 'react'

function ContextProvider({children}:{children:React.ReactNode}) {
  return (
    
    <div>
        <NextTopLoader showSpinner={false}/>
        {children}
    </div>
  )
}

export default ContextProvider