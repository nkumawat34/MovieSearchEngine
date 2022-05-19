import React, { useState } from 'react'
import { useLocation} from 'react-router-dom'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Category() {
    const passedData=useLocation();
    const [result,setResult]=useState([])
    const [loading,setLoading]=useState(true);
    //alert(passedData.state.data)
    useEffect(async ()=>{
        var category= await fetch("https://www.omdbapi.com/?apikey=da91029d&s="+passedData.state.data+"&page=12");
        var parsedData=await category.json();
        
        setResult(parsedData.Search);
        setLoading(false);
       },[passedData.state.data]);

  return (
    <div>
    <h1 className='text-center mt-4 fs-1' style={{fontFamily:"fantasy"}}>{passedData.state.data}</h1>  
    <div className='container mt-5 '>
        <div className="row">
      {
         loading==false? result.map((movie)=>{
           return (<div className="col-md-6 col-lg-4 col-xl-4 col-xl-4  mt-5"><div className="card" style={{width: "18em",height:"35rem"}}>
            <img src={movie.Poster} className="card-img-top" alt="..." style={{height:"20rem"}}/>
            <div className="card-body">
              <h5 className="card-title">{movie.Title}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/moviepage" state={{movie:movie}}className="btn btn-primary">Read More</Link>
            </div>
          </div></div>
          )}):<>Loading ....................</>
      }</div>
    </div>
    </div>
  )
}
