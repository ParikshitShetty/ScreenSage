import { useAtom } from 'jotai'
import React, {useState,useEffect,useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { movies } from '../jotai/List';


const MovieRenderer = () => {
  const [movieList,setMovieList] = useAtom(movies);
    
  const [movieResults, setMovieResults] = useState([]);
  const render = useRef(true);

  const navigate = useNavigate();

  useEffect(() => {
      if (render.current) {
        render.current = false;
        for (let i = 0; i < 9; i++) {
          fetch(`http://www.omdbapi.com/?t=${movieList[i]}&apikey=faa9a7ed`).
            then((res)=>res.json()).
            then((respJson)=> setMovieResults((prev)=>[
              ...prev,respJson
          ])).catch((error) => {
            console.error('Error fetching data:', error);
          });
        }
      }
  }, [])
    
    // console.log(movieResults)
    
  return (
    <>
    <div className='flex justify-between place-items-center h-12 ml-5 mr-5 '>
      <span className='text-base font-semibold '>Movies</span>
        <span className='flex justify-center rounded-2xl outline outline-2 outline-stone-100 w-36 p-[0.20rem] cursor-pointer'
          onClick={()=>navigate('/movies')}>
            <p className=''>View More</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-[0.10rem]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
      </span>
    </div>
    <div className='flex flex-row'>
      {movieResults.map((movie,index)=>(
        <img src={movie.Poster} alt="" key={index} className='h-52 w-[9.55rem] rounded ml-4 mt-2'/>
      ))}
    </div>
    </>
    
  )
}

export default MovieRenderer