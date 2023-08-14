import React,{useState,useEffect, Suspense} from 'react'
import useFetchByTitle from '../hooks/useFetchByTitle';
import NavBar from '../components/NavBar';
import { useAtom } from 'jotai';
import { searchResults,randomResults } from '../jotai/Store';
import useRandNumGenerator from '../hooks/useRandNumGenerator';
import Carousel from '../components/Carousel';
import Loading from '../utilities/Loading';
import SeriesRenderer from '../components/SeriesRenderer';
import MovieRenderer from '../components/MovieRenderer';
import AnimeRenderer from '../components/AnimeRenderer';
import { randomShows } from '../jotai/List';



const Home = () => {
    const [apiResults, setApiResults] = useAtom(searchResults);
    const [data, setData] = useAtom(randomResults);
    const [movieList,setMovieList] = useAtom(randomShows);

    const randomNumbers = useRandNumGenerator(movieList.length)
    
    // const url = `http://www.omdbapi.com/?i=tt3896198&apikey=faa9a7ed`;
    // const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=faa9a7ed`;
    // const url = `http://www.omdbapi.com/?t=star+wars&plot=full&apikey=faa9a7ed`;
    
    useEffect(()=>{
      if(randomNumbers !== null){
        for (let i = 0; i < randomNumbers.length; i++) {
        fetch(`http://www.omdbapi.com/?t=${movieList[randomNumbers[i]]}&apikey=faa9a7ed`).
          then((res)=>res.json()).
          then((respJson)=> setData((prev)=>[
            ...prev,respJson
          ]))
        }
      }
    },[randomNumbers]) ///////FOR Carousel
    // console.log('shows',movieList)
    
  return (
    <>
        
        <div className='flex flex-col min-h-screen'>
          <NavBar></NavBar>
          <Suspense fallback={<Loading/>}>
            <Carousel></Carousel>
            
            <MovieRenderer></MovieRenderer>
            <SeriesRenderer></SeriesRenderer>
            <AnimeRenderer></AnimeRenderer>
          </Suspense>
          
        </div>
    </>
  )
}

export default Home;