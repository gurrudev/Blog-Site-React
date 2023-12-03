import React, { useEffect, useState } from 'react'
import './Cards.css'
import truncate from '../../utils/Truncate'

function Cards({ imgUrl, title, description, clickAction }) {

    // For card 
    return (
        <>
            <div className='card-container'>

                <div className="card ">
                    <img src={imgUrl} alt="" />
                    <h2 className='uppercase'>{title}</h2>
                    <div className="user-details">
                        <p className='date text-[15px]'> ~ Ashutosh Pawar</p>
                        <p className='date text-[15px]'>June 28, 2023</p>
                    </div>
                    <p className='des text-justify'>{truncate(description)}</p>
                    <a href="">View Post</a> <span className='underline'></span>
                </div>

            </div>
        </>
    )
}

export default Cards