import React from 'react'
import './Cover.css'
import coverImg from '../assets/img/cover.jpeg'
const Cover = () => {

    return (
        <div className='hidden lg:block md:block p-20 sm:pb-12 sm:pt-0'>
            
            <div className="relative ">
                <img className='w-full h-[320px]' src={coverImg} alt="Your Image"  />
                <div className="absolute inset-0 flex items-center justify-center p-2 bg-black bg-opacity-50">
                    <div className='text-center p-5'>

                        <h1 className='text-[white] cover-text-heading'>Richird Norton photorealistic rendering as real photos</h1>
                        <p className='text-[white] cover-text-para pt-2'>Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</p>
                        <div className='p-5'>

                            <button className='text-[black] pl-3 pr-3 pt-2 pb-2 rounded-sm bg-[white] hover:bg-slate-100 cover-text-para'>Start Planning Your Trip</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover