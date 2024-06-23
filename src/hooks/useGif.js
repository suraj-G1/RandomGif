import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
const API_KEY = 'eqz4LAOXYiYYoy6i1CHXL0K35rUgvLcz';
//url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGif = (tag) => {

    const [gif,setGif] = useState("");
    const[loading,setLoading] = useState('false');
    
    async function fetchData(tag){
        setLoading(true);
        
        const {data} = await axios.get(tag?`${url}&tag=${tag}`:url);
        const imgSource = data.data.images.downsized_large.url;
        setGif(imgSource);
        setLoading(false);
    }
    useEffect(()=>{
        fetchData();
    },[])
    
    return {gif,loading,fetchData};
}

export default useGif;