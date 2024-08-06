import { useAtom } from 'jotai'
import React, { useState,useEffect,useRef } from 'react'
import { AnimatePresence, delay, motion, } from 'framer-motion'
import Loading from '../utilities/Loading'
import useRandNumGenerator from '../hooks/useRandNumGenerator'
import { randomShows } from '../jotai/List'
import { useNavigate } from 'react-router-dom'


const Carousel = () => {
    const [movieList] = useAtom(randomShows);

    const [data, setData] = useState([]);

    const request = useRef(true);

    const randomNumbers = useRandNumGenerator(movieList.length);

    const navigate = useNavigate();

    useEffect(()=>{
      if(randomNumbers !== null && request.current){
        for (let i = 0; i < randomNumbers.length; i++) {
          fetch(`${import.meta.env.VITE_TITLE}${movieList[randomNumbers[i]]}&plot=full&apikey=${import.meta.env.VITE_KEY}`).
          then((res)=>res.json()).
          then((respJson)=> setData((prev)=>[
            ...prev,respJson
          ]))
        }
        request.current = false;
      }
    },[randomNumbers])
    if (data.length > 2) {
      // console.log(data[1].Poster)
    }

  return (
    <>
     {/* <div className='width-[50rem] h-[90vh] overflow-hidden scroll-smooth z-10'>increase width to show content */}
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
      {/* </div> */}
      
      {data.length > 2 &&
      <div className='flex flex-col-reverse md:flex-row justify-evenly items-center pt-2 backdrop-brightness-100'>
      {/* <div className='flex flex-col-reverse md:flex-row justify-evenly items-center pt-2 backdrop-brightness-100 bg-got'> */}
        <div className='flex flex-col justify-center items-center leading-6 md:items-start md:w-1/2 md:h-[100vh] mx-4 pb-7 md:pb-0'>
          <h1 className='font-bold md:text-6xl text-4xl md:mb-32 lg:-mt-2 text-center w-full'>{data[1].Title}</h1>
          <p className='font-semibold mb-10 line-clamp-6 md:line-clamp-none  text-justify leading-6'>{data[1].Plot}</p>
          <div className='flex items-center justify-center w-full'>
            <button className='bg-orange-600 p-3 rounded-2xl inline-flex justify-center items-center hover:bg-transparent hover:outline outline-2 sm:w-44 mr-2'>Add to Favourite
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mt-0.5 ml-1 fill-red-800" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </button>

            <button className='p-3 rounded-2xl inline-flex items-center justify-center outline outline-2 dark:hover:bg-white dark:hover:text-black sm:w-44' onClick={()=>navigate(`movie/${data[1].imdbID}`)}>Movie Details
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </button>
          </div>
        </div>
        <div className='z-50 shadow-inner opacity-90 md:w-1/2 flex justify-center items-center'>
          <img src={data[1].Poster} alt="" className='rounded-xl h-[25rem] w-72'/>
        </div>
      </div>
      }
    </>
  )
}

export default Carousel