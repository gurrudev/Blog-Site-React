import React from 'react'
import './Banner.css'
import Navbar from './Navbar'

function Banner() {

    return (
        <div className="banner">
            <Navbar />
            {/* <div className="banner-content"> */}
                <div className="banner-text">
                    <h1>Experience the beauty of diverse perspectives.</h1>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Banner