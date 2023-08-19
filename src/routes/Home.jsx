import React,{useState,useEffect, Suspense, useRef} from 'react'
import NavBar from '../components/NavBar';
import { useAtom } from 'jotai';
import { searchResults,randomResults } from '../jotai/Store';
import Carousel from '../components/Carousel';
import Loading from '../utilities/Loading';
import SeriesRenderer from '../components/SeriesRenderer';
import MovieRenderer from '../components/MovieRenderer';
import AnimeRenderer from '../components/AnimeRenderer';
import { randomShows } from '../jotai/List';
import useRandNumGenerator from '../hooks/useRandNumGenerator';

const Home = () => {
    const [apiResults, setApiResults] = useAtom(searchResults);

    const [data, setData] = useAtom(randomResults);
    const [movieList,setMovieList] = useAtom(randomShows);

    const request = useRef(true);

    const randomNumbers = useRandNumGenerator(movieList.length)

    useEffect(()=>{
        if(randomNumbers !== null && request.current){
          for (let i = 0; i < randomNumbers.length; i++) {
          fetch(`http://www.omdbapi.com/?t=${movieList[randomNumbers[i]]}&apikey=faa9a7ed`).
            then((res)=>res.json()).
            then((respJson)=> setData((prev)=>[
              ...prev,respJson
            ]))
          }
          request.current = false;
        }
      },[randomNumbers]) 

    // const url = `http://www.omdbapi.com/?i=tt3896198&apikey=faa9a7ed`;
    // const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=faa9a7ed`;
    // const url = `http://www.omdbapi.com/?t=star+wars&plot=full&apikey=faa9a7ed`;

  return (
    <>
        <div className='flex flex-col h-[200vh]'>
          <NavBar/>
          <Suspense fallback={<Loading/>}>
            <Carousel/>
            {/* <img src="src\assets\wallpaperflar.jpg" alt="" className='absolute mt-[5rem] h-[44.4rem] w-[100rem] opacity-60' /> */}
            <MovieRenderer/>
            <SeriesRenderer/>
            <AnimeRenderer/>
          </Suspense>
        </div>
    </>
  )
}
export default Home;