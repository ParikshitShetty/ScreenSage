import React, { useEffect } from 'react'

const RandomFetcher = () => {
    const movieList = [
      "Harry Potter",
      "Star Wars",
      "The Lord of the Rings",
      "Marvel Cinematic Universe",
      "Fast & Furious",
      "James Bond",
      "Jurassic Park",
      "Mission: Impossible",
      "Pirates of the Caribbean",
      "Transformers",
      "X-Men",
      "The Hunger Games",
      "The Chronicles of Narnia",
      "Toy Story",
      "The Matrix",
      "Die Hard",
      "Mad Max",
      "Rocky",
      "The Terminator",
      "The Godfather",
      "Iron Man",
      "Terminator",
      "Hulk",
      "Star Trek",
      "John Wick",
      "Avengers",
      "Fast and Furious",
      "X-Men",
      "Indiana Jones",
      "Back to the Future",
      "Ghostbusters",
      "Planet of the Apes",
      "Alien",
      "Predator",
      "Mission: Impossible",
      "The Bourne",
      "Spider-Man",
      "Men in Black",
      "Jurassic Park",
      "Mission: Impossible"
    ];

    const getRandomNumber =() =>{
      // Math.random
    }
    useEffect(()=>{
      console.log(Math.floor(Math.random() * 100));
    },[])
  return (
    <div>RandomFetcher</div>
  )
}

export default RandomFetcher

//it should have a array of movie titles harcoded and randomly it should fetch those results
//  and it should to show the results