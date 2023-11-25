import React from 'react'
import  './Cover.css'
import coverImg from '../assets/img/cover.jpeg'
const Cover = () => {
  return (
    <div className='hidden lg:block md:block p-11 '>
        <div class="relative ">
            <img className='w-full h-[320px] sm:h-[200px]' src={coverImg} alt="Your Image" class="w-full h-auto" />
            <div class="absolute inset-0 flex items-center justify-center p-2 bg-black bg-opacity-50">
                <div className='text-center p-5'> 

                <h2 className='text-[white] text-lg'>Richird Norton photorealistic rendering as real photos</h2>
                <p className='text-[white] text-base'>Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cover