import React from 'react'
import { motion} from 'framer-motion'
export const FloatingShap = ({color,size,left,top,delay}) => {
  return (
    <motion.div className={`absolute rounded-full opacity-20 blur-xl ${color} ${size} `}
    style={{top,left}}
    animate={{
        y:["0%","100%","0%"],
        x:["0%","100%","0%"],
        rotate:[0,360]
    }}
    transition={{
        duration:20,
        ease:'linear',
        repeat:Infinity,
        delay
    }}
    aria-hidden='true'
    />

    
  )
}
