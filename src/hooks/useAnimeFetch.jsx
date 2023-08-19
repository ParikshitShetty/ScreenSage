import { useAtom } from 'jotai';
import React,{useState,useEffect,useRef} from 'react'
import { animeList } from '../jotai/List';

const useAnimeFetch = () => {
    const [anime,setAnime] = useAtom(animeList);

    const [animeResults,setAnimeResults] = useState([]);
    const render = useRef(true);

    useEffect(() => {
        if(render.current){//useffect mounts and dismounts twice because of Strictmode so we need a condition
          render.current = false;
          for (let i = 0; i < 9; i++) {
            fetch(`http://www.omdbapi.com/?t=${anime[i]}&apikey=faa9a7ed`).
              then((res)=>res.json()).
              then((respJson)=> setAnimeResults((prev)=>[
                ...prev,respJson
            ])).catch((error) => {
              console.error('Error fetching data:', error);
            });
          }
        }
      },[])
  return animeResults;
}

export default useAnimeFetch