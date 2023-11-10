import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const RouteRenderer = ({results}) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const viewDetails = (title) =>{
    if (location.pathname === '/series'){
      navigate(`${location.pathname}/${title}`)
    }
  }
  return (
    <>
        {results.map((elem,index)=>(
            <div key={index}
            onClick={()=>viewDetails(elem.Title)}
            className='flex flex-col sm:flex-wrap justify-center text-center'>
                <div className='rounded-xl overflow-hidden '>
                    <img src={elem.Poster} className='h-80 w-full object-cover transition ease-in-out hover:scale-105 duration-500' alt="" key={index}/>
                </div>
                <h3 className='flex-wrap mt-1 text-lg font-sans'>{elem.Title}</h3>
                <p className='font-mono opacity-60'>{elem.Released}</p>
            </div>
        ))}
    </>
  )
}

export default RouteRenderer