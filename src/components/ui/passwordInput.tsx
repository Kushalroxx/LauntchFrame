import React, { useState } from 'react'
import { Input } from './input'
import { Button } from './button'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function PasswordInput({
    className,
    value,
    onChange,
    placeholder,
}:{
    className?:string,
    value?:string,
    onChange?:React.ChangeEventHandler,
    placeholder?:string
}) {
    const [isPassword, setIsPassword] = useState<boolean>(true)
  return (
    <div className='relative flex'>
        <Input type={isPassword?"password":"text"} className={`${className} pr-8`} value={value} onChange={onChange} placeholder={placeholder} />
        <Button type='button' onClick={event=>setIsPassword(e=>!e)} className='absolute p-0 w-8 right-[2px]' variant={"ghost"}>{isPassword? <FaRegEyeSlash />:<FaRegEye />}</Button>
    </div>
  )
}

export default PasswordInput