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
                <Link to='/login'><button className='bg-[white] text-[black] p-[10px] hover:text-[white] hover:bg-[#000000] mt-3 rounded-sm'>GET STARTED</button></Link>
            </div>
            <div className="overlay"></div>
        </div>

    )
}

export default Banner