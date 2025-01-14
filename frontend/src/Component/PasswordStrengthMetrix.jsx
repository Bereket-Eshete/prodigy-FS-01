
import React from 'react'
import { PasswordCriteria } from './PasswordCriteria';
 const PasswordStrengthMetrix = ({password}) => {
  const getStrength=(pass)=>{
    let strength=0;
    if(pass.length >= 6) strength++;
    if(pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++
    if(pass.match(/\d/)) strength++
    if(pass.match(/[^a-zA-Z\d]/)) strength++
    return strength
  }
  const strength= getStrength(password)
  const  getColor=(strength)=>{
    if(strength === 0) return "bg-red-500"
    if(strength === 1) return "bg-red-400"
    if(strength === 2) return "bg-yellow-500"
    if(strength === 0) return "bg-yellow-400"
    return "bg-green-500"
  }

  const  getStrengthText=(strength)=>{
    if(strength === 0) return "very week"
    if(strength === 1) return "week"
    if(strength === 2) return "Fair"
    if(strength === 0) return "Good"
    return "strong"
  }
  return(
    <div className='mt-2'>
      <div className='flex justify-between items-center mb-1'>
        <span className='text-xs text-gray-400'>
            Password strength
        </span>
        <span className='text-xs text-gray-400'>
            {getStrengthText(strength)}
        </span>
      </div>
      <div className='flex space-x-1'>
       {[...Array(4)].map((_,index)=>(
            <div key={index}
             className={`h-1 w-1/4 rounded-full transition-colors duration-300 
                ${index < strength? getColor(strength) : "bg-gray-600"}`}
            />   
            
       ))}
      </div>
      <PasswordCriteria password={password}/>
    </div>
  )
}

export default PasswordStrengthMetrix
