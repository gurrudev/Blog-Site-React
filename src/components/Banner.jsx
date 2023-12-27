import React from 'react'
import './Banner.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import banner_img from '../assets/img/banner.jpg'
function Banner() {

    return (

        <div className="banner">
            <Navbar />

            <div className="banner-text">
                <h1 className='text-center'>Experience the beauty of diverse perspectives</h1>
                <h3><Link to={'/write-blog'}>Write Your thoughts</Link></h3>
                <button className='banner-btn bg-white text-slate-800 rounded-sm pt-2 pb-2 pl-4 pr-4 hover:bg-slate-100 mt-5 text-sm'>Get Started</button>
            </div>
            <div className="overlay"></div>
            <div className="custom-clip-path">
                {/* Adjust the image URL accordingly */}
                <img src={banner_img} alt="" />
            </div>
        </div>

    )
}

export default Banner