import React from 'react'
import './Banner.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Banner() {

    return (

        <div className="banner">
            <Navbar />

            <div className="banner-text">
                <h1>Experience the beauty of diverse perspectives</h1>
                <h3>Write Your Thoaughts</h3>
                <Link to='/login'><button>GET STARTED</button></Link>
            </div>
            <div className="overlay"></div>
        </div>

    )
}

export default Banner