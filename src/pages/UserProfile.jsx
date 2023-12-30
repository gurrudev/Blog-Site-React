import React, { useState, useEffect } from 'react'
import _avatar from '../assets/img/img_avatar.png'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import Cards from '../components/Cards';
import { getBlogsData } from '../../api/apiCalls'
import profile_pic from '../assets/img/img_avatar.png'

const profileCover = 'https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80'

function UserProfile() {

  const navigate = useNavigate()
  const [cardData, setCardData] = useState(null)

  const BlogCardData = async () => {
    const data = await getBlogsData()
    setCardData(data.blogs_data)
  }

  useEffect(() => {
    BlogCardData()
  }, [])

  return (
    <>
      {/* <div className="bg-gray-100">
        
        <div className="relative">
          <img
            src={profileCover}
            alt="Cover"
            className="w-full h-40 md:h-64 object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div> 
          <div className="absolute top-0 left-0 py-6 px-6">
            <FaArrowLeft className='form-text text-2xl text-white' onClick={() => navigate('/')} />
          </div>
       
          <div className="mx-auto absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 bg-white p-1 rounded-full">
            <img
              src={profile_pic}
              alt="Profile"
              className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover"
            />
          </div>
        </div>
       
        <div className="text-center mt-8 lg:mt-12 md:mt-12">
          <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
          <p className="text-lg text-gray-600">Title / Position</p>
          
          <div className="text-sm text-gray-600 mt-4 pb-6 flex gap-2 justify-center items-center">
      <p>Joined January 2023</p>
      <p>Location: New York, USA</p>
    </div>
        </div>
      </div> */}

      <div className="bg-gray-100">
        <div className="relative">
          <img
            src={profileCover}
            alt="Cover"
            className="w-full h-40 md:h-64 object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute top-0 left-0 py-6 px-6">
            <FaArrowLeft className='form-text text-2xl text-white' onClick={() => navigate('/')} />
          </div>

          <div className="absolute bottom-0 left-20 lg:left-34 md:left-36 transform -translate-x-1/2 translate-y-1/3 bg-white p-1 rounded-full">
            <img
              src={profile_pic}
              alt="Profile"
              className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover"
            />
          </div>
        </div>

        <div className="container mx-auto px-6 py-8 md:flex">

          {/* Left Section - User Details */}
          <div className="md:w-1/2">
            <div className="flex items-center">

              {/* User Info */}
              <div className="ml-2 lg:ml-14 md:ml-8 mt-2 lg:mt-4 md:mt-4">
                <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
                <p className="text-lg text-gray-600">Title / Position</p>
                {/* Additional user details */}
                <div className="text-sm text-gray-600 mt-4 flex flex-col">
                  <p>Joined January 2023</p>
                  <p>Location: New York, USA</p>
                </div>
              </div>
            </div>
            {/* User bio */}
            <div className="mt-4 text-gray-700 ml-2 md:ml-8 lg:ml-14 md:mr-2 max-w-md">
              <p className="text-lg">
                An enthusiastic professional passionate about <span className="font-bold">technology</span> and <span className="font-bold">innovation</span>. Constantly exploring new horizons in the tech world.
              </p>
            </div>
          </div>
          {/* Right Section - Skills */}
          <div className="md:w-1/2 mt-8 lg:mt-0 md:mt-8 md:mr-12 ml-2 lg:ml-0 ">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap text-md form-text gap-1">
              <span className='bg-blue-900 text-white py-1 px-3 rounded-sm '>Adv</span>
              <span className='bg-red-900 text-white py-1 px-3 rounded-sm '>Adventu</span>
              <span className='bg-green-900 text-white py-1 px-3 rounded-sm '>Adventure</span>
              <span className='bg-yellow-900 text-white py-1 px-3 rounded-sm '>A</span>
              <span className='bg-orange-900 text-white py-1 px-3 rounded-sm '>Adven</span>
              <span className='bg-purple-900 text-white py-1 px-3 rounded-sm '>Adventure</span>
              <span className='bg-emerald-900 text-white py-1 px-3 rounded-sm '>Adventure</span>
              <span className='bg-sky-900 text-white py-1 px-3 rounded-sm '>Adventure</span>
              <span className='bg-fuchsia-900 text-white py-1 px-3 rounded-sm '>Adventure</span>
            </div>
          </div>
        </div>

      </div>

      <Cards cardsData={cardData} totalCards={8} cardAction={''} />

    </>
  )
}

export default UserProfile