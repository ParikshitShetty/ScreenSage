import { useAtom } from 'jotai'
import React,{useEffect, useState} from 'react'
import {searchResults} from '../jotai/Store'

const Search = () => {
    const [apiResults,setApiResults] = useAtom(searchResults);

    const [term,setTerm] = useState('');
    const [load,setLoad] = useState(true);

    const handleSearch = (event) =>{
        setTerm(event.target.value)
    }

    const getData = async() =>{
        if (term.length > 0) {
            setLoad(true);
            try {
                const url = `http://www.omdbapi.com/?s=${term}&apikey=faa9a7ed`; 
                const response = await fetch(url);
                const responseJson = await response.json();
                console.log(responseJson.Search)
                if (responseJson.Search) {
                    setApiResults(responseJson.Search);
                }
            } catch (error) {
                console.log(error);
            } 
        }
    }

    useEffect(()=>{
        setLoad(false);
    },[apiResults])

    console.log('search results',apiResults);
  return (
    <>
        <span className='inline-flex'>
            <input type="text" className='p-2.5 rounded-l-lg z-30 dark:bg-gray-600 '
            placeholder='Search Movies....'
            value={term} 
            onChange={handleSearch}/>

            <button type="submit" className=" h-full px-2.5 py-[0.85rem] text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700" onClick={getData} disabled={load}>
            {load ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                    :
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            }
            </button>
        </span>
    </>
  )
}

export default Search