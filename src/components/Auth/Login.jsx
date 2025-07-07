import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("email is", email)
        console.log("password is", password)

        setEmail('')
        setPassword('')
    }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            action="" className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                
                required type="email" className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400' placeholder='Enter your Email' />
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                
                required type="password" className='mt-3 border-2 border-emerald-600 rounded-full py-3 px-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400' placeholder='Enter Password' />
                <button className='mt-5 outline-none bg-emerald-600 rounded-full py-3 px-5 text-xl text-white placeholder:text-white'>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login