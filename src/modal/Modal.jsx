import React from 'react'
import Backdrop from './Backdrop'
import { motion } from 'framer-motion'
import ModalRenderer from './ModalRenderer'


const Modal = ({modalOpen, handleClose}) => {
    const dropIn = {
        hidden:{
            y:"-100vh",
            opacity:0, 
        },
        visible:{
            y:"0",
            opacity:1,
            transition:{
                duration:0.1,
                type:"spring",
                damping:25,
                stiffness:500,
            }
        },
        exit:{
            y:"100vh", 
            opacity:0, 
        },
    }

  return (
    <Backdrop onClick={handleClose}>
        <motion.div
            onClick={(e)=> e.stopPropagation()}
            className='w-[732px] h-[382px] bg-gradient-to-r from-orange-500 to-yellow-700 m-auto p-8 rounded-xl flex flex-col items-center justify-center overflow-hidden'
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"

            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.8}
            whileTap={{ cursor: "grabbing" }}
        >
            <ModalRenderer/>
        </motion.div>
    </Backdrop>
  )
}

export default Modal