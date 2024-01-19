import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import endpointForUser from '../utils/endpointForUser'
import { FaUserCircle } from "react-icons/fa";
import { } from "react-icons/md";

const EditProfile = () => {

    const [user, setUserData] = useState({})
    const [profileData, setProfileData] = useState({})

    const token = localStorage.getItem('token')

    //   console.log(user)

    const getProfileData = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value })
    }

    const getUserData = async () => {
        try {
            const userData = await endpointForUser(token);
            setUserData(userData.user)
        } catch (error) {
            // Handle errors
            console.error(error);
        }
    };
    useEffect(() => {
        getUserData()
    }, []);
    
    return (
        <>
            <div className='p-8 pt-4 lg:p-52 lg:pt-4 md:p-20 md:pt-4'>
                <div>
                    <div className="space-y-12">
                        <div className="">
                            <div className='flex justify-between'>
                                <Link to={'/'} className="leading-7 text-3xl text-gray-900 mt-1 logo">BlogHub</Link>
                                <div className='flex justify-between gap-2'>
                                    {/* <button type='submit' onClick={'handleBlogSubmit'} className='text-white bg-black p-3 pt-0.5 pb-0.5 lg:pl-3 lg:pt-0 lg:pb-0 rounded-sm form-text'>Post</button> */}
                                    <Link to={'/profile'}><img className='rounded-full w-8' src={user.profile_pic} alt="" srcSet="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pt-10'>

                        <div className="mb-6">
                            <input type="text" id="name" name='name' className="text-gray-900 text-3xl form-heading rounded-lg outline-none block w-full" placeholder="Name ..." required autoFocus />
                        </div>

                        <div className="mb-6">
                            <input type="text" id="user_title" name='user_title' className="text-gray-900 text-xl form-heading rounded-lg outline-none block w-full" placeholder="Title ...  eg. Web Developer" required autoFocus />
                        </div>

                        <div className="mb-6">
                            <div className="flex">
                                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg ">
                                    <FaUserCircle/>
                                </span>
                                <input type="text" id="profile_pic" name='profile_pic' onChange={getProfileData} className="rounded-none rounded-e-sm  text-gray-900  block flex-1 min-w-0 w-full text-base border-gray-300 form-text p-1.5 outline-none" placeholder="Your profile pic link here..." required />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile