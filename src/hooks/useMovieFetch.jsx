import { useAtom } from 'jotai';
import React,{useEffect,useRef,useState} from 'react'
import { movies } from '../jotai/List';


const useMovieFetch = (length) => {

    const [movieList] = useAtom(movies);

    const [movieResults, setMovieResults] = useState([]);

    const render = useRef(true);

    useEffect(() => {
        if (render.current) {
          render.current = false;
          for (let i = 0; i < length; i++) {
            fetch(`${import.meta.env.VITE_TITLE}${movieList[i]}&apikey=${import.meta.env.VITE_KEY}`).
              then((res)=>res.json()).
              then((respJson)=> setMovieResults((prev)=>[
                ...prev,respJson
            ])).catch((error) => {
              console.error('Error fetching data:', error);
            });
          }
        }
    }, [])

  return movieResults
}

export default useMovieFetch