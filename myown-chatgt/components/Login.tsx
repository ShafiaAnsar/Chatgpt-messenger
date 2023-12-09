'use client'
import {signIn} from 'next-auth/react'
import Image from 'next/image'
const Login = () => {
  return (
    <div className='bg-[#11A37f] h-screen flex flex-col items-center justify-center '>
        <Image
        src="https://links.papareact.com/2i6"
        alt="Logo"
        height={300}
        width={300}
         />
         <button onClick={()=>signIn('google')} className='text-white font-bold text-3xl animate-pulse'>
            Sign in to use Chat Gpt
         </button>
    </div>
  )
}

export default Login