import React from 'react'
import { useState } from 'react';
import  axios  from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {
    //const [gif,setGif] = useState("");
    //const[loading,setLoading] = useState('false');
    //const API_KEY = 'eqz4LAOXYiYYoy6i1CHXL0K35rUgvLcz';
    
    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url);
    //     const imgSource = data.data.images.downsized_large.url;
    //     setGif(imgSource);
    //     setLoading(false);
    // }
    // useEffect(()=>{
    //     fetchData();
    // },[])
    const{gif,loading,fetchData} = useGif();

    function clickHandler(){
        fetchData();
    }
  return (
    <div className='w-5/12 h-[300px]  bg-green-400 mt-[40px] rounded-lg border
     border-black flex flex-col items-center p-2'>
        <h1 className='text-2xl underline uppercase font-bold'>A Random GIF</h1>
        {
            loading?<Spinner className=' h-[180px]'/>:<img className=' h-[180px]' src={gif}/>
        }
        <button onClick={clickHandler} className='w-9/12 bg-white text-black rounded-md py-1 font-bold text-xl'>Generate</button>
    </div>
  )
}

export default Random