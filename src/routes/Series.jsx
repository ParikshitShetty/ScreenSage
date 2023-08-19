import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar';
import useSeriesFetch from '../hooks/useSeriesFetch';


const Series = () => {
  const results = useSeriesFetch(9)
  return (
    <>
      <div className='flex flex-col'>
        <NavBar/>
        <main className='grid place-items-start grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4
       sm:my-8 sm:mx-8'>
        {results.map((elem,index)=>(

            <div className=' flex flex-col sm:flex-wrap justify-center text-center' key={index}>
              <div className='rounded-xl overflow-hidden '>
                <img src={elem.Poster} className='h-80 w-full object-cover transition ease-in-out hover:scale-105 duration-500' alt="" key={index}/>
              </div>
              <h3 className='flex-wrap mt-1 text-lg font-sans'>{elem.Title}</h3>
              <p className='font-mono opacity-60'>{elem.Released}</p>
            </div>
        ))}
      </main>
      </div>
    </>
  )
}

export default Series 