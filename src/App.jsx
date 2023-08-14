import React,{useState} from 'react'
import Home from './routes/Home'
import { Routes,Route} from 'react-router-dom'
import Movies from './routes/Movies'
import Series from './routes/Series'
import Anime from './routes/Anime'


function App() {

  return (
    <>
      <div className='bg-slate-800 min-h-screen text-white'>
          <Routes>
            <Route path='/' element={<Home></Home>}/>
            <Route path='/movies' element={<Movies></Movies>}/>
            <Route path='/series' element={<Series></Series>}/>
            <Route path='/anime' element={<Anime></Anime>}/>
          </Routes>
      </div>
    </>
  )
}

export default App




