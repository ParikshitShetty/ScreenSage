import React,{useState,useEffect} from 'react'

const useRandNumGenerator = (maxLength) => {
    const [random,setRandom] = useState(null);

    const numOfRandomNumbers = 10;

     const generateRandomNumber =(length,count) =>{
      const randomNumbers = new Set();

      while (randomNumbers.size < count) {
        const randomNum = Math.floor(Math.random() * length);
        randomNumbers.add(randomNum);
      }
      // console.log(randomNumbers);
      return Array.from(randomNumbers);
    }

    useEffect(()=>{
        const randomNumbers = generateRandomNumber(maxLength,numOfRandomNumbers);
        setRandom(randomNumbers);
      },[maxLength]);
    
    // console.log(random);
    return random;
}

export default useRandNumGenerator