import React, { useState,useEffect,useRef } from 'react'
import NavBar from '../components/NavBar';
import { useAtom } from 'jotai';
import { movies } from '../jotai/List';
import Pagination from '../utilities/Pagination';
import useMovieFetch from '../hooks/useMovieFetch';

const Movies = () => {
  const apiResults = useMovieFetch(12);

  console.log(apiResults)
  
  return (
    <>
    <div className='flex flex-col'>
    <NavBar/>
      <main className='grid place-items-start grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4
       sm:my-8 sm:mx-8'>
        {apiResults.map((elem,index)=>(

            <div className=' flex flex-col sm:flex-wrap justify-center text-center' key={index}>
              <div className='rounded-xl overflow-hidden '>
                <img src={elem.Poster} className='h-80 w-full object-cover transition ease-in-out hover:scale-105 duration-500' alt="" key={index}/>
              </div>
              <h3 className='flex-wrap mt-1 text-lg font-sans'>{elem.Title}</h3>
              <p className='font-mono opacity-60'>{elem.Released}</p>
            </div>
        ))}
      </main>
      <Pagination/>
    </div>
    </>
  )
}

export default Movies