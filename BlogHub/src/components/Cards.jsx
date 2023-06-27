import React from 'react'
import img1 from '../assets/img/img-1.jpg'
import './Cards.css'
function Cards() {
  return (
    <div className='card-container'>
        <div className="card">
            <img src={img1} alt="" />
            <h2>Title</h2>
            <p>UserName date</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sapiente adipisci ea ullam dolorem sit voluptatum quasi esse cum, hic id, corrupti fuga? Vel excepturi corrupti necessitatibus. Sint, fuga mollitia!</p>
        </div>
    </div>
  )
}

export default Cards