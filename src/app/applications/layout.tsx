import Link from 'next/link';
import React from 'react'

export default function layout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className='container mx-auto flex space-x-6 pt-5'>

      <div className='flex flex-col w-[25%] space-y-3'>
        <Link href="/applications/web" className='bg-amber-500 h-[50%]'>Web</Link>
        <Link href="/applications/mobile" className='bg-blue-500 h-[50%]'>Mobile</Link>

      </div>
     <div className='w-[75%] bg-purple-500 h-screen'>
     {children}
     </div>
        
    </div>
  )
}
