import { useAtom } from 'jotai';
import React,{useEffect,useRef,useState} from 'react'
import { movies } from '../jotai/List';


const useMovieFetch = (length) => {

    const [movieList,setMovieList] = useAtom(movies);

    const [movieResults, setMovieResults] = useState([]);

    const render = useRef(true);

    useEffect(() => {
        if (render.current) {
          render.current = false;
          for (let i = 0; i < length; i++) {
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

  return movieResults
}

export default useMovieFetch