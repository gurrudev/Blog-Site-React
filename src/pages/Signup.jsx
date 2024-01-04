import React, { useEffect, useState } from 'react'
import bgImg from '../assets/img/cover.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/features/userSlice'
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {

    const navigate = useNavigate()

    const [users, setUsers] = useState({})
    const dispatch = useDispatch()

    const getUsersData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
        // console.log(users)
    }

    const handleSubmit = () => {
        if (users.password === users.confpassword) {
            console.log(users)
            dispatch(addUser(users))
            navigate('/login')
        } else {
            toast.error('Invalid Password, Try Again!')
        }
    }


    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <section className="bg-gray-50 relative overflow-hidden h-screen">
                {/* <!-- New div for the background image --> */}
                <div className="absolute inset-0 z-0">
                    <img src={bgImg} alt="Background" className="object-cover w-full h-[100vh] filter blur-sm" />
                    <div className="bg-black opacity-40 absolute inset-0"></div>
                </div>

                {/* <!-- Your existing content --> */}
                <div className="relative z-10 flex flex-col items-center justify-center px-6 py-8 mx-auto h-full lg:mt-0 md:mt-0 sm:mt-0">

                    <div className="w-full bg-white rounded-sm shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold form-heading leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Signup for new account
                            </h1>
                            <div className="space-y-4 md:space-y-6 form-text" >
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                                    <input type="name" name="name" id="name" onChange={getUsersData} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Jon Doe" required="" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
                                    <input type="email" name="email" id="email" onChange={getUsersData} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input type="password" name="password" id="password" onChange={getUsersData} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                                </div>
                                <div>
                                    <label htmlFor="confpassword" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm Password</label>
                                    <input type="password" name="confpassword" id="confpassword" onChange={getUsersData} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                                </div>

                                <button type="submit" onClick={handleSubmit} className="w-full text-white bg-[black] hover:bg-[#36363b] focus:outline-none  font-medium rounded-sm text-lg px-5 py-2.5 text-center ">Sign up</button>
                                <p className="text-sm font-light text-gray-500 ">
                                    Already have an account? <Link to={'/login'}><span className="font-medium text-primary-600 hover:underline ">Sign in</span></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup