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
                <h3>Write Your Thoaughts</h3>
                <Link to='/login'><button className='border-[2px] text-[white] p-[10px] hover:text-[black] hover:bg-[white] mt-5 rounded-sm'>GET STARTED</button></Link>
            </div>
            <div className="overlay"></div>
        </div>

    )
}

export default Banner