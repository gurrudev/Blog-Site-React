import React, { useEffect, useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import './Cards.css'
import { getBlogsData } from '../../api/apiCalls'
import HomeSekeleton from './Skeleton/HomeSekeleton'
import truncate from '../../utils/Truncate'
import Cover from './Cover'
function Cards() {
    const [cardBlogsData, setCardData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const { animate } = useAutoAnimate()
    const dataFn = async () => {
        const data = await getBlogsData()
        setCardData(data.blogs_data)
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
        
            <div className='card-container' >
                {
                    isLoading ? Array(8).fill(0).map((d,i) => (<HomeSekeleton key={i}/>)):
                    cardBlogsData?.filter((item, index) => index < 8)?.map((item) => (
                        <div className="card ">
                            <img src={'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80'} alt="" />
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

        <Cover/>

        </>
    )
}

export default Cards