import React,{useState} from 'react'
import Home from './routes/Home'
import { Routes,Route} from 'react-router-dom'
import Movies from './routes/Movies'
import Series from './routes/Series'


function App() {

  return (
    <>
      <div className='bg-slate-800 min-h-screen text-white'>
          <Routes>
            <Route path='/' element={<Home></Home>}/>
            <Route path='/movies' element={<Movies></Movies>}/>
            <Route path='/series' element={<Series></Series>}/>
          </Routes>
      </div>
    </>
  )
}

export default App




