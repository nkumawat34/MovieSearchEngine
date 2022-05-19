import React from 'react'
import { Link } from 'react-router-dom'
export default function Card(props) {
  
  return (
    <div>
      <div class="card border m-5" style={{width: "20rem",height:"30rem"}}>
  <img src={props.Poster} class="card-img-top" alt="..." style={{height:"20rem"}}/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/moviepage" state={{movie:props}}className="btn btn-primary">Read More</Link>
  </div>
</div>
    </div>
  )
}
