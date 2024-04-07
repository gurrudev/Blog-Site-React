import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import profileCoverImage from '../../assets/img/profileCover.jpg'

const UserProfileSkeleton = () => {
    const navigate = useNavigate()

    return (
        <div role="status" className="bg-gray-100 abimate-pluse">
            <div className="relative">
                <img
                    src={profileCoverImage}
                    alt="Cover"
                    className="w-full h-40 md:h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute top-0  py-6 px-6">
                    <FaArrowLeft className='form-text text-2xl text-white cursor-pointer' onClick={() => navigate('/')} />
                </div>

                <div className="absolute bottom-0 left-20 lg:left-34 md:left-36 transform -translate-x-1/2 translate-y-1/3 bg-white p-1 rounded-full">
                    <div className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover bg-gray-200"/>
                </div>
            </div>


            <div  className="container mx-auto px-6 py-8 md:flex">

                {/* Left Section - User Details */}
                <div className="md:w-1/2">
                    <div className="flex items-center">

                        {/* User Info */}
                        <div className="ml-2 lg:ml-14 md:ml-8 mt-2 lg:mt-4 md:mt-4">
                            <div className='flex justify-between gap-5'>
                                <div className="h-8 w-[280px] mt-3 rounded-full bg-gray-200"></div>
                            </div>
                            <div className="h-6 mt-2 w-48 rounded-full bg-gray-200"></div>
                            {/* Additional user details */}

                        </div>
                    </div>
                    {/* User bio */}
                    <div className="mt-3  ml-2 md:ml-8 lg:ml-14 md:mr-2 max-w-md">
                        <div className="h-4 mt-2 w-56 rounded-full bg-gray-200" />
                    </div>
                    <div className="ml-2 lg:ml-14 md:ml-8 mt-2 lg:mt-4 md:mt-4">
                        <div className=" mt-4 flex gap-2">
                            
                            <div className='flex gap-1 h-4 mt-2 w-52 rounded-full bg-gray-200'>
                            </div>
                            
                        </div>
                    </div>
                </div>

                {/* Right Section - Skills */}
                <div>

                </div>
                {/* {(user.skills) ? ( */}
                <div className="md:w-1/2 mt-8 lg:mt-0 md:mt-8 md:mr-12 ml-2 lg:ml-0 ">
                    <div className="h-7 mt-2 w-48 rounded-full bg-gray-200 mb-4"></div>
                    <div className="flex flex-wrap text-md form-text gap-1">
                        <div className={`h-8 mt-2 w-40 bg-gray-200 rounded-sm`}></div>
                        <div className={`h-8 mt-2 w-28 bg-gray-200 rounded-sm`}></div>
                        <div className={`h-8 mt-2 w-20 bg-gray-200 rounded-sm`}></div>
                        <div className={`h-8 mt-2 w-36 bg-gray-200 rounded-sm`}></div>
                    </div>
                </div>
                {/* ) : ''} */}
            </div>

        </div>
    )
}

export default UserProfileSkeleton