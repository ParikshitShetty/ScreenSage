import React,{useState,useEffect,useRef} from 'react'
import NavBar from '../components/NavBar'
import useAnimeFetch from '../hooks/useAnimeFetch'
import Pagination from '../components/Pagination'
import { useAtom } from 'jotai'
import { animeList } from '../jotai/List'


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
        <NavBar/>
        <main className='grid place-items-start grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4
       sm:my-8 sm:mx-8'>
        {results.map((elem,index)=>(
            <div className=' flex flex-col sm:flex-wrap justify-center text-center' key={index}>
              <div className='rounded-xl overflow-hidden '>
                <img src={elem.Poster} className='h-80 w-full object-cover transition ease-in-out hover:scale-105 duration-500' alt="" key={index}/>
              </div>
              <h3 className='flex-wrap mt-1 text-lg font-sans'>{elem.Title}</h3>
              <p className='font-mono opacity-60'>{elem.Released}</p>
            </div>
        ))}
      </main>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
    </>
  )
}

export default Anime