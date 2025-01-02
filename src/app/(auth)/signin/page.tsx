import { Signin } from '@/components/auth/SignIn'
import React from 'react'
import Logo from "@/lib/assets/Logo"

function page() {

  return (
    <div className='min-h-dvh bg-background flex justify-center items-center'>
      <Signin className="dark:border-secondary dark:shadow-secondary shadow-md md:w-[410px]"/>
    </div>
  )
}

export default page