import { useAtom } from 'jotai'
import React,{useState,useEffect,useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { series } from '../jotai/List';
import useSeriesFetch from '../hooks/useSeriesFetch';


const SeriesRenderer = () => {
    const [tvShows,setTvShows] = useAtom(series);

    const seriesResults = useSeriesFetch(9);

    const navigate = useNavigate();
      
  return (
    <>
        <div className='flex justify-between place-items-center h-12 ml-5 mr-5 '>
          <span className='text-base font-semibold '>TV Shows</span>
          <span className='flex justify-center rounded-2xl hover:text-lime-500 outline outline-2 outline-stone-100 hover:outline-lime-500 w-36 p-[0.20rem] cursor-pointer'
          onClick={()=>navigate('/series')}>
            <p className=''>View More</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-[0.10rem]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
        </div>
        <div className='flex flex-row'>
        {seriesResults.map((item,index)=>(
            <div className='overflow-hidden ml-4 mt-1 rounded-xl' key={index}>
              <img src={item.Poster} alt="" className='h-52 w-[9.55rem] transition ease-in-out hover:scale-105 duration-500'/>
             </div> 
        ))}
        </div>
        
    </>
  )
}

export default SeriesRenderer