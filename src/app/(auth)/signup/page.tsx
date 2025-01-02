import { Signup } from '@/components/auth/Signup'
import React from 'react'

function page() {
  return (
    <div className='bg-background min-h-dvh flex justify-center items-center '>
        <Signup className='shadow-md px-4 dark:border-secondary dark:shadow-secondary md:w-[410px]'/>
    </div>
  )
}

export default page