import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <>
    <h1 
    onClick={()=>navigate(-1)}
    className=' font-bold text-4xl text-center'>Route Not Found</h1>
    </>
  )
}

export default NotFound