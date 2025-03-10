import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {User,Mail,Lock} from 'lucide-react'
import Input from '../Component/Input'
import {useState} from 'react'
import PasswordStrengthMetrix from '../Component/PasswordStrengthMetrix'
export const Signup = () => {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    
    const handleChange =(e)=>{
     e.preventDefault()
    }
  return (
    <motion.div 
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5}}
    className='max-w-md w-full bg-gray-800 bg-opacity-50  backdrop:-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'>
        <div className='p-8'>
            <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to bg-emerald-500 text-transparent bg-clip-text'> Create Account</h2>
            <form onSubmit={handleChange}>
                <Input
                icon={User}
                type='text'
                placeholder='Full Name'
                value={name}
                onChange={(e)=>{setName(e.target.value)}}/>
                 <Input
                icon={Mail}
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}/>
                <Input
                icon={Lock}
                type='password'
                placeholder='password'
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}/>
                <PasswordStrengthMetrix password={password}/>
                <motion.button className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500  focus:ring-offset-2 focus:ring-offset-gray-900 transition dueation-200'
                type='submit'>
                    Signup
                </motion.button>
            </form>
        </div>
        <div className='px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center'>
            <p className='text-sm text-gray-400'>
                already have an account? {" "}
            <Link 
            to={"/login"}
            className='text-green-400 hover:underline'>LOGIN</Link>
            </p>
        </div>

    </motion.div>
  )
}

