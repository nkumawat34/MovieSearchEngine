import React from 'react'
import Collection from '..//Collection/Collection';
import { useState,useEffect } from 'react';

export default function Home() {
    const [action,setBolly]=useState([]);
  const [Love,setLove]=useState([]);
  const [Black,setBlack]=useState([]);

    useEffect(async ()=>{
        var action= await fetch("https://www.omdbapi.com/?apikey=da91029d&s=action&page=12");
        var parsedData=await action.json();
        var love=await fetch("https://www.omdbapi.com/?apikey=da91029d&s=love&page=12");
        var black=await fetch("https://www.omdbapi.com/?apikey=da91029d&s=black&page=12")
        var parsedData2=await black.json();
        var parsedData1=await love.json();
        setLove(parsedData1.Search);
        setBolly(parsedData.Search);
        setBlack(parsedData2.Search);
       },[]);

  return (
    <div>
      { <Collection action={action} love={Love} black={Black}/>
}
    </div>
  )
}
