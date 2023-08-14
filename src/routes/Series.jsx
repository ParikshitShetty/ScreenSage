import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar';


const Series = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar></NavBar>
      <div onClick={()=>navigate('/')}>Series</div>
    </>
  )
}

export default Series