import React,{useState,useEffect} from 'react'

const useFetchById = (id) => {
    const [data, setData] = useState(null);

    useEffect(()=>{
      fetch(`${import.meta.env.VITE_ID}${id}&apikey=${import.meta.env.VITE_KEY}`).
            then((res)=>res.json()).
            then((data) =>setData(data)).
            catch((err) => console.error(err));
    },[id])
    
  return data;
}

export default useFetchById