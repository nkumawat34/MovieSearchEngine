import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Topcollection(props) {

    const [movies,setMovies]=useState([]);
    const [loading,setLoading]=useState(true);
    const location=useLocation();

    useEffect( async ()=>{

      
        let data=await fetch("https://www.omdbapi.com/?apikey=da91029d&s="+location.state.searchterm+"&page=1")
        let parsedData= await data.json();

        if(parsedData.Response=="True")
        setMovies(parsedData.Search);
        else
        setMovies([])
        console.log(movies.length);
        setLoading(false);
          
    },[location.state.searchterm])  

  return (
    <div className='container mt-5 '>
        <div className="row">
      {
         loading==false? movies.map((movie)=>{
           return (<div className="col-md-6 col-lg-4 col-xl-4 col-xl-4  mt-5"><div class="card" style={{width: "18em",height:"35rem"}}>
            <img src={movie.Poster} class="card-img-top" alt="..." style={{height:"20rem"}}/>
            <div class="card-body">
              <h5 class="card-title">{movie.Title}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/moviepage" state={{movie:movie}} class="btn btn-primary">Read More</Link>
            </div>
          </div></div>
          )}):<>Loading ....................</>
      }</div>
    </div>
  )
}
