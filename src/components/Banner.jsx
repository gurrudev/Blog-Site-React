import React, { useState, useEffect } from 'react'
import './Banner.css'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import banner_img from '../assets/img/banner.jpg'
import endpointForUser from "../../utils/endpointForUser";
import buttonText from '@material-tailwind/react/theme/components/button/buttonText'

function Banner() {

    const navigate = useNavigate()

    const [user, setUser] = useState({})
    const [btnText, setButtonText] = useState('')

    const token = localStorage.getItem('token')

    const getUserData = async () => {
        try {
            const userData = await endpointForUser(token);
            setUser(userData)
        } catch (error) {
            // Handle errors
            console.error(error);
        }
    };

    // console.log(user)

    const handleClick = () => {
        if(user.message === 'Invalid token' || user === null){
            navigate('/login')
        }else{
            navigate('/write-blog')
        }
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <div className="banner">
            <Navbar />
            <div className="banner-text">
                <h1 className='text-center leading-10'>Experience the beauty of diverse perspectives</h1>
                <h3 className='text-white'>Write Your thoughts</h3>
                <button className='banner-btn bg-white text-slate-800 rounded-sm pt-2 pb-2 pl-4 pr-4 hover:bg-slate-100 mt-5 text-sm' onClick={handleClick}>{(user.message === 'Invalid token' || user === null) ? 'Get Started' : 'Write ✍️'}</button>
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