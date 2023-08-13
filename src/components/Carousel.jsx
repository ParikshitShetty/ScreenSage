import { useAtom } from 'jotai'
import React, { useState,useEffect } from 'react'
import { randomResults } from '../jotai/Store'
import { AnimatePresence, delay, motion, } from 'framer-motion'
import Loading from '../utilities/Loading'


const Carousel = () => {
    const [data, setData] = useAtom(randomResults);
    const [render,setRender] =  useState(false);

    useEffect(()=>{
      const timeout = setTimeout(() => {
        if (data.length > 0) {
          setRender(true)
        }
      }, 600);
      return () => clearTimeout(timeout)
    },[data])
    
  
    
    

  return (
    <>
     <div className='width-[50rem] overflow-hidden scroll-smooth'>{/*increase width to show content*/}
     {!render  ? 
              <div className='flex flex-col place-items-center justify-center h-[28.5rem]'>
                <Loading/>
              </div>  :
      <AnimatePresence onExitComplete={true}>
        <motion.div className='flex flex-row' 
          initial={{x : '0%'}}
          animate={{x:'-100%',}}//increase this to show more image
          transition={{
            repeat : Infinity,
            duration : 6,
            ease : 'easeInOut',
            repeatType:'reverse',
            repeatDelay: 1,
            delayChildren : 4,
            }}
            viewport={{once:true}}
            >
            {data.map((elem,index)=>(
                <motion.img src={elem.Poster} key={index} id='image' className=''/>
            ))}
          </motion.div>
        </AnimatePresence>
      }
      </div>
    </>
  )
}

export default Carousel