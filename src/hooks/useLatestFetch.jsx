import { useAtom } from 'jotai';
import React,{useEffect,useRef,useState} from 'react'
import { latest } from '../jotai/List';


const useLatestFetch = (length) => {

    const [latestList] = useAtom(latest);

    const [latestResults, setLatestResults] = useState([]);

    const render = useRef(true);

    useEffect(() => {
        if (render.current) {
          render.current = false;
          for (let i = 0; i < length; i++) {
            fetch(`http://www.omdbapi.com/?t=${latestList[i]}&apikey=faa9a7ed`).
              then((res)=>res.json()).
              then((respJson)=> setLatestResults((prev)=>[
                ...prev,respJson
            ])).catch((error) => {
              console.error('Error fetching data:', error);
            });
          }
        }
    }, [])

  return latestResults
}

export default useLatestFetch