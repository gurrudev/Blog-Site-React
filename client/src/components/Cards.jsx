import React, { useEffect, useState } from 'react'

import './Cards.css'
import { getBlogsData } from '../../api/apiCalls'

function Cards() {
    const [cardBlogsData, setCardData] = useState(null);
    const dataFn = async () => {
        const data = await getBlogsData()
        setCardData(data.blogs_data)
    }

    useEffect(() => {
        dataFn()
    }, [])
    

    return (
        <div className='card-container' >
            {
                cardBlogsData?.map((item) => (
                    <div className="card">
                        <img src={'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80} alt="" '} />
                        <h2>{item.title}</h2>
                        <div className="user-details">
                            <p className='user-name'> ~ Ashutosh Pawar</p>
                            <p className='date'>June 28, 2023</p>
                        </div>
                        <p className='des'>{item.description}</p>
                        <a href="">View Post</a> <span className='underline'></span>
                    </div>
                ))
            }
        </div>
    )
}

export default Cards