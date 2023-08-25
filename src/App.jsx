import React,{useState} from 'react'
import Home from './routes/Home'
import { Routes,Route} from 'react-router-dom'
import Movies from './routes/Movies'
import Series from './routes/Series'
import Anime from './routes/Anime'


function App() {

  return (
    <>
      <div className='dark:bg-slate-950 min-h-screen dark:text-white'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/series' element={<Series/>}/>
            <Route path='/anime' element={<Anime/>}/>
            <Route path='/movies/:id' element={<Movies/>}/>
          </Routes>
      </div>
    </>
  )
}

export default App




