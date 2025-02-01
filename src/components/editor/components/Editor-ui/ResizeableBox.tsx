import React, { useState, useRef, useEffect } from "react";

const ResizableBox = ({
  children,
  ref
}:{children:React.ReactElement,
    ref:React.RefObject<HTMLElement|undefined>
}) => {
    const [size, setSize] = useState<{height:undefined|number,width:undefined|number}>({height:undefined,width:undefined})
    useEffect(() => {
      if (ref.current) {
        setSize({height:ref.current.offsetHeight,
            width:ref.current.offsetWidth
        }); 
        // console.log(size);
        
      }
    }, [ref.current])
    
return(
    <>
    {children}
    </>
)
}
export default ResizableBox