import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'

const EmailVerificationPage = () => {
const [code,setCode]=useState(['','','','','',''])
const inputRefs = useRef([]);
const navigate = useNavigate()
const isloading=false
const handleChange =(index,value)=>{
const newCode =[...code]
if(value.length > 1){
    const pastedCode = value.slice(0,6).split("")
    for(let i=0;i<6;i++){
        newCode[i]=pastedCode[i] || ""
    }
    setCode(newCode)
    const lastfilledIndex = newCode.findLaastIndex((digit)=>digit !=="")
    const foucsIndex =lastfilledIndex < 5 ? lastfilledIndex + 1 : 5
    inputRefs.current[foucsIndex].focus()
}
else{
    newCode[index]=value
    setCode(newCode)
    if(value  && index < 5 ){
        inputRefs.current[index+1].focus()
    }
}
}
const handleKeyDown =(index,e)=>{
    if(e.key ==='Bakspace' && !code[index] && index > 0){
        inputRefs.current[index-1].focus()
    }
}
const handleSubmit=(e)=>{
e.preventDefault()
const verficationCode = code.join("")
console.log(`verfication code Submited ${verficationCode}`)
}
useEffect(()=>{
if(code.every(digit => digit != '')){
    handleSubmit(new Event('submit'))
}
},[code])
  return (
    <div className='max-w-md w-full bg-gray-800 bg-opacity-50  backdrop-filter  backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'>
        <motion.div
         initial={{opacity:0,y:20}}
         animate={{opacity:1,y:0}}
         transition={{duration:0.5}}
         className='bg-gray-800 bg-opacity-50 backdrop:filter backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-ful max-w-md'
        >
            <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to bg-emerald-500 text-transparent bg-clip-text'>Verify your Email</h2>
            <p className='text-gray-400 text-center mb-6'>Enter The six digit code sent to your Email</p>
            <form className="space-y-1" onSubmit={handleSubmit}>
                <div className='flex  justify-between mb-3' >
                {code.map((digit,index)=>(
                    <input
                    key={index}
                    ref={(el)=>(inputRefs.current[index]=el)}
                    type='text'
                    maxLength='6'
                    value={digit}
                    onChange={(e)=>handleChange(index,e.target.value)}
                    onKeyDown={(e)=>handleKeyDown(index,e)}
                    className='w-12 h-12 text-center  text-2xl font-bold bg-gray-700  text-white border-2 border-gray-600 rounded-lg focus:border-green-500 focus:outline-none'
                    
                    />
                ))}

                </div>
                <motion.button className='my-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500  focus:ring-offset-2 focus:ring-offset-gray-900 transition dueation-200'
                type='submit'
                disabled={isloading}
                >

                   {isloading? <Loader className='size-6 animate-spin mx-auto'/> : "Verify Email"} 
                </motion.button>
            </form>

        </motion.div>

    </div>
  )
}

export default EmailVerificationPage