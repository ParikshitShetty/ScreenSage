import React from 'react'
import { useNavigate } from 'react-router-dom';
import useAnimeFetch from '../../hooks/useAnimeFetch';


const AnimeRenderer = ({open}) => {
    const animeResults = useAnimeFetch(6);
    
    const navigate = useNavigate();

  return (
    <>
    <div className='flex justify-between place-items-center h-12 mx-9'>
          <span className='text-base font-semibold '>Anime</span>
          <span className='flex justify-center rounded-2xl hover:text-lime-500 outline outline-2 outline-stone-100 hover:outline-lime-500 w-36 p-[0.20rem] cursor-pointer'
            onClick={()=>navigate('/anime')}>
            <p className=''>View More</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-[0.10rem]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
    </div>
        <div className='flex flex-row justify-evenly items-center h-[19rem]'>
        {animeResults.map((item,index)=>(
            <div className='rounded overflow-hidden' key={index} >
              <img src={item.Poster} onClick={()=>open(item)}
              alt="" className='h-72 w-48 transition ease-in-out hover:scale-110 active:scale-95 duration-500'/>
            </div>
        ))}
        </div>
    </>
  )
}
export default AnimeRenderer