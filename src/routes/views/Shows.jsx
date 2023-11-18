import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// http://www.omdbapi.com/?t=Game of Thrones&apikey=faa9a7ed
export default function Shows() {
  const {title} = useParams();

  const [apiResult,setApiResult] = useState({}) 

  const [season,setSeason] = useState(1);
  const [episode,setEpisode] = useState(1);

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_TITLE}${title}&Season=${season}&episode=${episode}&apikey=${import.meta.env.VITE_KEY}`).
    then(res => res.json()).
    then(res => setApiResult(res))
  },[season,episode])
  
  return (
    <>
        <img
        className='' 
        src={apiResult.Poster} alt=""/>
    </>
  )
}