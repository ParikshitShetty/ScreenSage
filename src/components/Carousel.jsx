import { useAtom } from 'jotai'
import React, { } from 'react'
import { randomResults } from '../jotai/Store'
import { AnimatePresence, motion, } from 'framer-motion'

const Carousel = () => {
    const [data, setData] = useAtom(randomResults);

  return (
    <>
      <div className='width-[50rem] overflow-hidden relative scroll-smooth'>{/*increase width to show content*/}
      <AnimatePresence>
        <motion.div className='flex flex-row'
          initial={{x:'0%'}}
          animate={{x:'-50%'}}//increase this to show more image
          transition={{
            repeat : Infinity,
            duration : 6,
            ease : 'easeInOut',
            stiffness : 100,
            repeatType:'reverse',
            repeatDelay: 1
            }}>
            {data.map((elem,index)=>(
                <img src={elem.Poster} key={index} id='image'/>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}

export default Carousel