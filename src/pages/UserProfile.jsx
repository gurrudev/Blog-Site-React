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
      <div className="bg-gray-100">
        {/* Cover Image with Overlay */}
        <div className="relative">
          <img
            src={profileCover}
            alt="Cover"
            className="w-full h-40 md:h-64 object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay */}
          <div className="absolute top-0 left-0 py-4 px-6">
            <FaArrowLeft className='form-text text-lg text-white'/>
          </div>
          {/* Profile Picture */}
          <div className="mx-auto absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 bg-white p-1 rounded-full">
            <img
              src={profile_pic}
              alt="Profile"
              className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="text-center mt-6">
          <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
          <p className="text-lg text-gray-600">Title / Position</p>
        </div>
      </div>


    </>
  )
}

export default UserProfile