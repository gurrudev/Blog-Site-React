import React from 'react'
import './Banner.css'
import Navbar from './Navbar'

function Banner() {

    return (

        <div className="banner">
            <Navbar />

            <div className="banner-text">
                <h1>Experience the beauty of diverse perspectives</h1>
                <h3>Write Your Thoaughts</h3>
                <button>Get Started</button>
            </div>
            <div className="overlay"></div>
        </div>

    )
}

export default Banner