import { motion } from 'framer-motion'
import React from 'react'


const Backdrop = ({ onClick, children}) => {
  return (
    <motion.div
    className='fixed top-0 left-0 h-full w-full z-10 bg-[#000000e1] flex justify-center items-center'
    onClick={onClick}
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        {children}
    </motion.div>
  )
}

export default Backdrop