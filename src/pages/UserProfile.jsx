import React from 'react'
import _avatar from '../assets/img/img_avatar.png'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

function UserProfile() {

  const navigate = useNavigate()

  return (
    <>

      <div class="p-7 sm:p-20  sm:pt-6">
        <div className="space-y-12 ">
          <div className="">
            <div className='flex justify-between'>
              <h1 className="leading-7 text-3xl text-gray-900 mt-1 logo">BlogHub</h1>
              <div className='flex justify-between gap-2'>
                {/* <button className='text-white text-sm bg-black p-3 pt-0.5 pb-0.5 lg:pl-3 lg:pt-0 lg:pb-0 rounded-sm form-text'>Post</button> */}
                <img className='rounded-full w-8' src={_avatar} alt="" srcSet="" />
              </div>
            </div>
          </div>
        </div>

        <div class="md:flex no-wrap md:-mx-2 mt-10">

          <div class="w-full md:w-3/12 md:mx-2">
            <div className='mb-10 text-2xl text-gray-900 cursor-pointer' onClick={()=>navigate('/')}><FaArrowLeft /></div>

            <div class="">
              <div class="">
                <img class="h-20 w-20 rounded-full "
                  src={_avatar}
                  alt="" />
              </div>
              <h1 class="text-gray-900 font-bold text-xl form-heading leading-8 my-1">Jane Doe</h1>
              <h3 class="text-gray-600 font-bold form-text leading-6">Owner at Her Company Inc.</h3>
              <p class="text-sm text-gray-500 form-text hover:text-gray-600 leading-6 ">Lorem ipsum dolor sit amet
                consectetur adipisicing e Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
              <div className='flex gap-2'>

              <div className='text-gray-600 text-sm form-text mt-1 flex gap-1'>
                <MdOutlineDateRange className='mt-1' />
                <p>Joined June 2012</p>
              </div>
              <div className='text-gray-600 text-sm form-text mt-1 flex gap-1'>
                <MdOutlineLocationOn className='mt-1' />
                <p>Mumbai</p>
              </div>
              </div>
            </div>

            <div class="my-4"></div>

            <div class="pt-3 pb">
              <div class="flex items-center mb-2 space-x-3 font-semibold text-gray-900 text-xl leading-8">
                <span>Skills</span>
              </div>
              <div class="flex gap-1.5 form-text flex-wrap text-sm">
                <span className=' py-0.5 px-3 bg-orange-900 text-white rounded-sm'>Programming</span>
                <span className=' py-0.5 px-3 bg-orange-900 text-white rounded-sm'>Writing</span>
                <span className=' py-0.5 px-3 bg-orange-900 text-white rounded-sm'>Python</span>
                <span className=' py-0.5 px-3 bg-orange-900 text-white rounded-sm'>Java</span>
                <span className=' py-0.5 px-3 bg-orange-900 text-white rounded-sm'>Web Development</span>
              </div>
            </div>
          </div>

          <div class="w-full  border">

            

          </div>
        </div>
      </div>

    </>
  )
}

export default UserProfile