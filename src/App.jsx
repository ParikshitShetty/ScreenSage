import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './routes/Home'
import Movies from './routes/Movies'
import Series from './routes/Series'
import Anime from './routes/Anime'
import Loading from './utilities/Loading'
import Movie from './routes/views/Movie'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <div className='dark:bg-slate-950 min-h-screen dark:text-white'>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>} loader={<Loading/>}/>
            <Route path="/movies" element={<Movies/>} loader={<Loading/>}/>
            <Route path="/series" element={<Series/>} loader={<Loading/>}/>
            <Route path="/anime" element={<Anime/>} loader={<Loading/>}/>
            <Route path='/movie/:id' element={<Movie/>} loader={<Loading/>}/>
          </Routes>
      </div>
    </>
  )
}

export default App