import React, { useEffect, useState } from 'react'
import Collection from './Collection'
import Search from './Search';
import { Link } from 'react-router-dom';

export default function Navbar() {

  
  const [search,setSearch]=useState("");
  
 
 
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Movie House</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item ms-3">
          <Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item ms-3">
        <div class="dropdown">
  <button class="btn  dropdown-toggle"  style={{color:"white"}}type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Categories
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link to="/category" state={{ data: "Bollywood" }}  class="dropdown-item" href="#">Bollywood</Link>
    <Link to="/category"  state={{ data: "Love" }} class="dropdown-item" href="#">Love</Link>
    <Link to="/category" state={{ data: "Action" }} class="dropdown-item" href="#">Action</Link>
    <Link  to="/category" state={{ data: "Thriller" }} class="dropdown-item" href="#">Thriller</Link>
  </div>
</div>
        </li>
       
      </ul>
      <form class="d-flex" style={{width:"30rem"}}>
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setSearch(e.target.value)}}/>
        <Link to="/search" state={{searchterm:search}} style={{textDecoration:"none",color:"white"}}>Search</Link>
      </form>
    </div>
  </div>
</nav>
<div className="container-fluid text-white" style={{backgroundImage:"url('pexels-photo-3131971.jpeg')",height:"40vh"}}>
    <div className="d-flex flex-column align-items-start pt-5">
        <h1>
Welcome to the Movie House</h1>
<h5 className='mt-3'>With Plex you can watch over 20,000 free movies and shows, plus Live TV on almost any device. What are you waiting for?</h5>

    </div>
</div>

    </div>

  )
}
