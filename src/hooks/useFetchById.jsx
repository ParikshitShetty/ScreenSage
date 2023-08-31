import React,{useState,useEffect} from 'react'

const useFetchById = (id) => {
    const [data, setData] = useState(null);

    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?i=${id}&apikey=faa9a7ed`).
            then((res)=>res.json()).
            then((data) =>setData(data)).
            catch((err) => console.error(err));
    },[id])
    
  return data;
}

export default useFetchById