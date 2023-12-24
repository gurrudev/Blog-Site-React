import React from 'react'
import './Banner.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Banner() {

    return (

        <div className="banner">
            <Navbar />

            <div className="banner-text">
                <h1 className='text-center'>Experience the beauty of diverse perspectives</h1>
                <h3>Write Your thoughts</h3>
                <Link to='/login'><button className='banner-btn bg-white text-slate-800 rounded-sm pt-2 pb-2 pl-4 pr-4 hover:bg-slate-100 mt-5'>Get Started</button></Link>
            </div>
            <div className="overlay"></div>
        </div>

    )
}

export default Banner