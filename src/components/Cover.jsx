import React from 'react'
import  './Cover.css'
import coverImg from '../assets/img/cover.jpeg'
const Cover = () => {
  return (
    <div className='p-9'>
        <div class="relative p-2">
            <img className='w-full h-[320px] sm:h-[200px]' src={coverImg} alt="Your Image" class="w-full h-auto" />
            <div class="absolute inset-0 flex items-center justify-center">
                <p class="text-white text-lg font-bold">Your Text Here</p>
            </div>
        </div>
    </div>
  )
}

export default Cover