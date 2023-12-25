import React, { useEffect, useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import './Cards.css'
import HomeCardSekeleton from './Skeleton/HomeCardSekeleton'
import truncate from '../../utils/Truncate'
import { CiImageOn } from "react-icons/ci";

function Cards({ cardsData, totalCards, cardAction }) {

    const [isLoading, setIsLoading] = useState(true)
    const { animate } = useAutoAnimate()

    const dataFn = () => {
        setIsLoading(false)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            dataFn()
        }, 2000)
        return () => clearTimeout(timer)
    }, [])


    // For card 
    return (
        <>
            <main ref={animate} >
                <div className='card-container'>
                    {
                        isLoading ? Array(totalCards).fill(0).map((d, i) => (<HomeCardSekeleton key={i} />)) :
                            cardsData?.filter((item, index) => index < totalCards)?.map((item, index) => (
                                <div className="card " key={index}>
                                    <div className="relative">
                                        <img src={"https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80"} alt="Your Image" />
                                        <div className="absolute inset-0 flex justify-between p-4 text-white text-lg">
                                            <div className='flex gap-1.5 items-start'>
                                                <div className='bg-white bg-opacity-20 backdrop-blur-2xl rounded-sm p-1'>
                                                    <p className='pl-2 pr-2 text-base form-text'>Travel</p>
                                                </div>
                                                <div className='bg-white bg-opacity-20 backdrop-blur-2xl rounded-sm p-1'>
                                                    <p className='pl-2 pr-2 text-base form-text'>Adventure</p>
                                                </div>
                                            </div>
                                            <div className='flex items-start'>
                                                <div className='bg-white bg-opacity-20 backdrop-blur-2xl rounded-full p-2'>
                                                    <p className='text-base'><CiImageOn /></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className='uppercase'>{item.title}</h2>
                                    <div className="user-details">
                                        <p className='date text-[15px]'> ~ Ashutosh Pawar</p>
                                        <p className='date text-[15px]'>June 28, 2023</p>
                                    </div>
                                    <p className='des text-justify'>{truncate(item.description)}</p>
                                    <a href="">View Post</a> <span className='underline'></span>
                                </div>
                            ))
                    }
                </div>
            </main>
        </>
    )
}

export default Cards