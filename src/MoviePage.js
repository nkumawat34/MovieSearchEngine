import React from 'react'
import { useLocation } from 'react-router-dom'

export default function MoviePage() {
    const location=useLocation();
    
  return (
    <div className='container-fluid text-black ' style={{height:"100vh"}}>
      <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="col-md-4 mt-4"><img src={location.state.movie.Poster} style={{height:"50vh",width:"50vw"} }></img></div>
          <div className="col-md-8 mt-4 ps-4" ><h1 style={{fontFamily:"fantasy"}}>{location.state.movie.Title}</h1><h4 style={{fontFamily:"monospace"}}>Year-{location.state.movie.Year}</h4>
          <h4 style={{fontFamily:"cursive",color:"Background"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatibus numquam dolor similique veniam, dolore facilis aut neque, natus autem accusantium est. Inventore itaque debitis dolores provident quaerat, animi quasi?</h4>
          </div>
      </div>
    </div>
  )
}
