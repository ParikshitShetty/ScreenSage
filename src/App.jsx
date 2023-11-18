import React, { useEffect } from 'react'
import { Routes,Route} from 'react-router-dom'

import NavBar from './components/NavBar'
import Loading from './utilities/Loading'
import NotFound from './utilities/NotFound'
//Routes
import Home from './routes/Home'
import Movies from './routes/Movies'
import Series from './routes/Series'
import Anime from './routes/Anime'
//Views
import Movie from './routes/views/Movie'
import Shows from './routes/views/Shows'


function App() {
  useEffect(()=>{
    document.title = 'ScreenSage'
  },[])
  return (
    <>
      <div className='dark:bg-slate-950 min-h-screen dark:text-white'>
        <NavBar/>
          <Routes>
            <Route path="*" element={<NotFound/>} loader={<Loading/>}/>
            <Route path="/" element={<Home/>} loader={<Loading/>}/>
            <Route path="/movies" element={<Movies/>} loader={<Loading/>}/>
            <Route path="/series" element={<Series/>} loader={<Loading/>}/>
            <Route path="/anime" element={<Anime/>} loader={<Loading/>}/>
            <Route path='/movie/:id' element={<Movie/>} loader={<Loading/>}/>
            <Route path='/series/:title' element={<Shows/>} loader={<Loading/>}/>
          </Routes>
      </div>
    </>
  )
}

export default App