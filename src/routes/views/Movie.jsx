import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchById from '../../hooks/useFetchById';

const Movie = () => {
    const {id} = useParams();
    const result = useFetchById(id);
  return (
    <>
    {result !== null &&
    <img src={result.Poster} alt="" />
    }
    </>
  )
}

export default Movie