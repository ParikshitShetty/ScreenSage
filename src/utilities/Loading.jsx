import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const Loading = () => {
  const ContainerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.2
      }
    },
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const DotVariants = {
    initial: {
      y: "0%"
    },
    animate: {
      y: "100%"
    }
  };
  
  const DotTransition = {
    duration: 0.5,
    repeat: Infinity,
    ease: "easeInOut",
    yoyo: Infinity,
    repeatType:'reverse',
  };

  return (
    <>
    <div className='flex justify-center items-center h-[90vh] w-full pt-20'>
      <motion.div className='w-40 h-20 flex justify-around' 
        variants={ContainerVariants}
        initial="initial"
        animate="animate" 
      >

        <motion.span className='block w-8 h-8 bg-black dark:bg-white rounded-[50%]'
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span className='block w-8 h-8 bg-black dark:bg-white rounded-[50%]'
          variants={DotVariants} 
          transition={DotTransition}
        />
        <motion.span className='block w-8 h-8 bg-black dark:bg-white rounded-[50%]'
          variants={DotVariants}
          transition={DotTransition}
        />
      </motion.div>
    </div>
    </>
  )
}

export default Loading