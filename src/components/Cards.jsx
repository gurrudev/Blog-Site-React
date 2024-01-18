import React, { useEffect, useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import './Cards.css'
import HomeCardSekeleton from './Skeleton/HomeCardSekeleton'
import truncate from '../utils/Truncate'
import { CiImageOn } from "react-icons/ci";
import { Link } from 'react-router-dom'
import cardDate from '../utils/cardDate'
import strippedString from '../utils/strippedString'

function Cards({ cardsData, totalCards, cardAction }) {

    const [isLoading, setIsLoading] = useState(true)
    const { animate } = useAutoAnimate()

    const dataFn = () => {
        setIsLoading(false)
    }

    // console.log(cardsData)

    useEffect(() => {
        const timer = setTimeout(() => {
            dataFn()
        }, 2000)
        return () => clearTimeout(timer)
    }, [])


    // For card 
    return (
        <>
            <main ref={animate}>
                <div className='card-container p-8 sm:p-20 sm:pt-10'>
                    {isLoading ? (
                        Array(totalCards).fill(0).map((_, i) => (<HomeCardSekeleton key={i} />))
                    ) : (
                        cardsData?.filter((item, index) => index < totalCards)?.map((item, index) => (
                            <div className="card" key={index}>
                                    <div className="relative">
                                        <img src={item.image_url} className='w-full h-[210px]'  alt="" />
                                        <div className="absolute inset-0 flex justify-between p-4 text-white text-lg">
                                            <div className='flex gap-1.5 items-start'>
                                                <div className='flex gap-1.5 items-start'>
                                                    {item.blog_tags && item.blog_tags.map((tag, index) => (
                                                        <div key={index} className='bg-white bg-opacity-20 backdrop-blur-2xl rounded-sm p-1 shadow-lg'>
                                                            <p className='pl-2 pr-2 text-xs form-text'>{tag}</p>
                                                        </div>
                                                    ))}
                                                </div>

                                            </div>
                                            <div className='flex items-start'>
                                                <div className='bg-white bg-opacity-20 backdrop-blur-2xl rounded-full p-2 shadow-lg'>
                                                    <p className='text-base'><CiImageOn /></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className='uppercase'>{item.title}</h2>
                                    <div className="user-details text-slate-700">
                                        <p className='text-[15px]'> by {item.username}</p>
                                        <p className='text-[15px]'>{cardDate(item.createdAt)}</p>
                                    </div>
                                    <p className='des text-justify'>{truncate(strippedString(item.description))}</p>
                                    <Link to={`/post/${item._id}`}>View Post</Link> <span className='underline'></span>
                                    </div>
                        ))
                    )}
                </div>
            </main>
        </>
    );
}

export default Cards