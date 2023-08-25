import { useAtom } from 'jotai'
import React, { useState,useEffect,useRef } from 'react'
import { AnimatePresence, delay, motion, } from 'framer-motion'
import Loading from '../utilities/Loading'
import useRandNumGenerator from '../hooks/useRandNumGenerator'
import { randomShows } from '../jotai/List'


const Carousel = () => {
    const [movieList] = useAtom(randomShows);

    const [data, setData] = useState([]);

    const request = useRef(true);

    const randomNumbers = useRandNumGenerator(movieList.length);

    useEffect(()=>{
      if(randomNumbers !== null && request.current){
        for (let i = 0; i < randomNumbers.length; i++) {
        fetch(`http://www.omdbapi.com/?t=${movieList[randomNumbers[i]]}&apikey=faa9a7ed`).
          then((res)=>res.json()).
          then((respJson)=> setData((prev)=>[
            ...prev,respJson
          ]))
        }
        request.current = false;
      }
    },[randomNumbers])

  return (
    <>;
     <div className='width-[50rem] h-[90vh] overflow-hidden scroll-smooth z-10'>{/*increase width to show content*/}
      {/* <AnimatePresence onExitComplete={true}>
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
                <motion.img src={elem.Poster} key={index} id='image' className='mr-5 mt-5 rounded-xl z-10'/>
            ))}
          </motion.div>
      </AnimatePresence> */}
      {data.length > 2 &&
      <div className='flex justify-evenly items-center '>
        <div className='flex flex-col justify-center items-start w-1/2 h-[100vh]'>
          <h1 className='font-bold text-6xl mb-32 -mt-2'>{data[1].Title}</h1>
          <p className='font-semibold mb-10'>{data[1].Plot}</p>
          <span className='flex w-1/2 justify-between'>
            <button className='bg-yellow-800 p-3 rounded-2xl inline-flex items-center hover:bg-transparent hover:outline outline-2'>Add to Favourite
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </button>

            <button className='p-3 rounded-2xl inline-flex items-center outline outline-2 dark:hover:bg-white dark:hover:text-black'>Movie Details
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </button>
          </span>
        </div>
        <div className=''>
          <img src={data[1].Poster} alt="" className='rounded-xl'/>
        </div>
      </div>
      }
      </div>
    </>
  )
}

export default Carousel