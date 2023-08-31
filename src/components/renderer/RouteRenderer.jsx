import React from 'react'

const RouteRenderer = ({results}) => {
  return (
    <>
        {results.map((elem,index)=>(
            <div className=' flex flex-col sm:flex-wrap justify-center text-center' key={index}>
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