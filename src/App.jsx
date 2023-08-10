import React,{useState} from 'react'
import Home from './Routes/Home'
import { Routes,Route} from 'react-router-dom'


function App() {

  return (
    <>
      <div className='bg-slate-800 min-h-screen text-white flex justify-center place-items-center'>
          <Routes>
            <Route path='/' element={<Home></Home>}/>
          </Routes>
      </div>
    </>
  )
}

export default App




