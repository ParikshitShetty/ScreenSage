import React from 'react'
import { motion } from 'framer-motion';

const Pagination = ({currentPage,setCurrentPage}) => {
  
    const increment = () =>{
      setCurrentPage((prev) => prev + 1);
    }

    const decrement = () =>{
      setCurrentPage((prev) => prev - 1);
    }
    
  return (
    <>
    <div className='flex justify-center items-center '>
      <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-8 h-8 rounded-full bg-blue-500 ${currentPage === 1 ? `pointer-events-none opacity-60` : `pointer-events-auto`}`}
      whileTap={{scale:0.9}}
      onClick={decrement} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </motion.svg>

      <p className='bg-lime-600 px-4 py-2 rounded-full mr-3 ml-3 cursor-pointer active:bg-amber-700'>{currentPage}</p>

      <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 rounded-full bg-blue-500 "
      whileTap={{scale:0.9}}
       onClick={increment}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </motion.svg>
    </div>
    </>
  )
}
export default Pagination