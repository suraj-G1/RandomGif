import React from 'react'
import { useState } from 'react';
import  axios  from 'axios';
import { useEffect } from 'react';

const Random = () => {
    const [gif,setGif] = useState("");
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    
    async function fetchData(){
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const output = await axios.get(url);
        console.log(output);
    }
    useEffect(()=>{
        fetchData();
    },[])
    function clickHandler(){

    }
  return (
    <div className='w-1/2 h-[400px] bg-green-400 mt-[40px] rounded-lg border border-black flex flex-col items-center p-2'>
        <h1 className='text-2xl underline uppercase font-bold'>A Random GIF</h1>
        <img src={gif}/>
        <button onClick={clickHandler} className='w-9/12 bg-white text-black rounded-md py-1 font-bold text-xl'>Generate</button>
    </div>
  )
}

export default Random