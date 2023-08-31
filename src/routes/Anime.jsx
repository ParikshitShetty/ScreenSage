import React,{useState,useEffect,useRef} from 'react'
import { useAtom } from 'jotai'
import { animeList } from '../jotai/List'
import useAnimeFetch from '../hooks/useAnimeFetch'
import Pagination from '../components/Pagination'
import RouteRenderer from '../components/renderer/RouteRenderer'
import Loading from '../utilities/Loading'


const Anime = () => {
  const [anime] = useAtom(animeList);

  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage,setPostsPerPage] = useState(12);

  const apiResults = useAnimeFetch(postsPerPage);

  const [results,setResults] = useState([]);
  const render = useRef(false);

  const getData = () =>{
    setResults([]);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;

    for (let i = firstPostIndex; i < lastPostIndex; i++) {
      fetch(`http://www.omdbapi.com/?t=${anime[i]}&apikey=faa9a7ed`).
        then((res)=>res.json()).
        then((respJson)=> setResults((prev)=>[
          ...prev,respJson
      ])).catch((error) => {
        console.error('Error fetching data:', error);
      });
    }
  }

  useEffect(()=>{
    if (currentPage === 2) {
      render.current = true;
    }
    if (render.current) {
      getData();
    }
  },[currentPage])
  
  useEffect(()=>{
    setResults(apiResults);
  },[apiResults])

  return (
    <>
      <div className='flex flex-col'>
        {results.length === 12 ? 
        <main className='grid place-items-start grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:my-8 sm:mx-8'>
          <RouteRenderer results={results}/>
        </main>
        : <Loading/> }
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
    </>
  )
}

export default Anime