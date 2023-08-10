import React,{useState,useEffect} from 'react'
import useFetchByTitle from '../hooks/useFetchByTitle';
import NavBar from '../components/NavBar';
import { useAtom } from 'jotai';
import { searchResults } from '../jotai/Store';
import RandomFetcher from '../utilities/RandomFetcher';


const Home = () => {
    const [apiData, setApiData] = useAtom(searchResults);
    const [searchTerm, setSearchTerm] = useState('');

    const getData = async(searchTerm) =>{
        try {
            // const url = `http://www.omdbapi.com/?i=tt3896198&apikey=faa9a7ed`;
            // const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=faa9a7ed`;
            // const url = `http://www.omdbapi.com/?t=star+wars&plot=full&apikey=faa9a7ed`;
             const url = `http://www.omdbapi.com/?t=${searchTerm}&apikey=faa9a7ed`;
             
            const response = await fetch(url);
            const responseJson = await response.json();
            console.log(responseJson.Search)
            if (responseJson) {
                setApiData(responseJson);
            }
        } catch (error) {
            console.log(error);
        }
    }



    // useEffect(()=>{
    //     getData(searchTerm)
    // },[searchTerm])

  return (
    <>
        <NavBar></NavBar>
        <RandomFetcher></RandomFetcher>
    </>
  )
}

export default Home