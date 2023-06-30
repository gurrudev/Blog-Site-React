import React, { useEffect, useState } from 'react'
import img1 from '../assets/img/img-1.jpg'
import './Cards.css'
import { getBlogsData } from '../../api/apiCalls'

function  Cards() {  
    const [cardData, setCardData] = useState(null);
    const dataFn = async()=>{
        const data = await getBlogsData()
        setCardData(data.blogs_data)
    }

    useEffect(()=>{
        dataFn()
    },[])
    // console.log(cardData);

    return (
        <div className='card-container' >
            {
                cardData?.map((item)=>(
                    <div className="card">
                <img src={'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80} alt="" '}/>
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
            


            {/* <div className="card">
                <img src={img1} alt="" />
                <h2>Aenean eleifend ante maecenas</h2>
                <div className="user-details">
                    <p className='user-name'>UserName</p>
                    <p className='date'>June 28, 2023</p>
                </div>
                <p className='des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sapiente adipisci ea ullam dolorem sit voluptatum quasi esse cum, hic id, corrupti fuga? Vel excepturi corrupti necessitatibus. Sint, fuga mollitia!</p>
                <a href="">View Post</a> <span className='underline'></span>
            </div>
            <div className="card">
                <img src={img1} alt="" />
                <h2>Integer Maecenas Eget Viverra</h2>
                <div className="user-details">
                    <p className='user-name'>UserName</p>
                    <p className='date'>June 28, 2023</p>
                </div>
                <p className='des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sapiente adipisci ea ullam dolorem sit voluptatum quasi esse cum, hic id, corrupti fuga? Vel excepturi corrupti necessitatibus. Sint, fuga mollitia!</p>
                <a href="">View Post</a> <span className='underline'></span>
            </div>
            <div className="card">
                <img src={img1} alt="" />
                <h2>Integer Maecenas Eget Viverra</h2>
                <div className="user-details">
                    <p className='user-name'>UserName</p>
                    <p className='date'>June 28, 2023</p>
                </div>
                <p className='des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sapiente adipisci ea ullam dolorem sit voluptatum quasi esse cum, hic id, corrupti fuga? Vel excepturi corrupti necessitatibus. Sint, fuga mollitia!</p>
                <a href="">View Post</a> <span className='underline'></span>
            </div>
            <div className="card">
                <img src={img1} alt="" />
                <h2>Integer Maecenas Eget Viverra</h2>
                <div className="user-details">
                    <p className='user-name'> ~ Ashutosh Pawar</p>
                    <p className='date'>June 28, 2023</p>
                </div>
                <p className='des'>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.</p>
                <a href="">View Post</a> <span className='underline'></span>
            </div>
            <div className="card">
                <img src={img1} alt="" />
                <h2>Aenean eleifend ante maecenas</h2>
                <div className="user-details">
                    <p className='user-name'>UserName</p>
                    <p className='date'>June 28, 2023</p>
                </div>
                <p className='des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sapiente adipisci ea ullam dolorem sit voluptatum quasi esse cum, hic id, corrupti fuga? Vel excepturi corrupti necessitatibus. Sint, fuga mollitia!</p>
                <a href="">View Post</a> <span className='underline'></span>
            </div>
            <div className="card">
                <img src={img1} alt="" />
                <h2>Integer Maecenas Eget Viverra</h2>
                <div className="user-details">
                    <p className='user-name'>UserName</p>
                    <p className='date'>June 28, 2023</p>
                </div>
                <p className='des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sapiente adipisci ea ullam dolorem sit voluptatum quasi esse cum, hic id, corrupti fuga? Vel excepturi corrupti necessitatibus. Sint, fuga mollitia!</p>
                <a href="">View Post</a> <span className='underline'></span>
            </div>
            <div className="card">
                <img src={img1} alt="" />
                <h2>Integer Maecenas Eget Viverra</h2>
                <div className="user-details">
                    <p className='user-name'>UserName</p>
                    <p className='date'>June 28, 2023</p>
                </div>
                <p className='des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sapiente adipisci ea ullam dolorem sit voluptatum quasi esse cum, hic id, corrupti fuga? Vel excepturi corrupti necessitatibus. Sint, fuga mollitia!</p>
                <a href="">View Post</a> <span className='underline'></span>
            </div> */}
        </div>
    )
}

export default Cards