import React, { useState,useEffect,useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar';
import { useAtom } from 'jotai';
import { movies } from '../jotai/List';


const Movies = () => {
  const [movie,setMovie] = useAtom(movies);

  const [apiResults,setApiResults] = useState([]);
  const render = useRef(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (render.current) {
      render.current = false;
      for (let i = 0; i< 18; i++) {
        fetch(`http://www.omdbapi.com/?t=${movie[i]}&apikey=faa9a7ed`).
        then((resp)=>resp.json()).
        then((respJson)=>setApiResults(
          (prev)=>[...prev,respJson]))
      }   
    }
  }, [])
  
  return (
    <>
    <NavBar></NavBar>
    <div className='flex mt-4 ml-1 mr-1'>
    <div className='grid grid-cols-9 gap-4' >
      {apiResults.map((elem,index)=>(
          <img src={elem.Poster} className='rounded-lg h-52 w-[9.55rem]'
           alt="" key={index}/>
        
      ))}
      </div>
    </div>
      
    </>
  )
}

export default Movies