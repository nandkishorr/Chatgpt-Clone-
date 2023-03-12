'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"

function Login() {
  return (
    <div className="bg-[#343541] h-screen flex flex-col items-center justify-center text-center">
     <Image className="invert"
     src="https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png"
     width={50}
     height={50}
     alt="Logo"/> 
     <button onClick={()=>signIn('google')} className="text-white font-medium text-2xl animate-pulse">Sign in to use Chatgpt</button>
 </div>
  )
}

export default Login
