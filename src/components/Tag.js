import React from 'react'
import { useState } from 'react';
import  axios  from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
    
    const[tag,setTag] = useState("car");
    
    function clickHandler(){
        fetchData();
    }

    function changeHandler(event){
        setTag(event.target.value);
    }
    const{gif,loading,fetchData} = useGif(tag);
  return (
    <div className='w-5/12 h-[300px]  bg-blue-400 mt-[20px] rounded-lg border
     border-black flex flex-col items-center p-2 gap-4'>
        <h1 className='text-2xl underline uppercase font-bold'>Random {tag} GIF</h1>
        {
            loading?<Spinner className='m-4 h-[200px]'/>:<img className='m-4 h-[200px]' src={gif}/>
        }
        <input className='w-9/12 text-lg py-2 rounded-lg mg-[3px] mt-2 text-center' onChange={changeHandler}/>
        <button onClick={clickHandler} className='w-9/12 bg-white text-black rounded-md py-1 font-bold text-xl'>Generate</button>
    </div>
  )
}

export default Tag