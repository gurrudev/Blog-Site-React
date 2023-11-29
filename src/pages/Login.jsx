import React from 'react'
import bgImg from '../assets/img/cover.jpeg'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate()
    return (
        <>

            <section class="bg-gray-50 relative overflow-hidden h-screen">
                {/* <!-- New div for the background image --> */}
                <div class="absolute inset-0 z-0">
                    <img src={bgImg} alt="Background" class="object-cover w-full h-[100vh] filter blur-sm" />
                    <div class="bg-black opacity-40 absolute inset-0"></div>
                </div>

                {/* <!-- Your existing content --> */}
                <div class="relative z-10 flex flex-col items-center justify-center px-6 py-8 mx-auto h-full lg:mt-0 md:mt-0 sm:mt-0">
                    
                    <div class="w-full bg-white rounded-sm shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight form-heading tracking-tight text-gray-900 md:text-2xl ">
                                Sign in to your account
                            </h1>
                            <form class="form-text space-y-4 md:space-y-6" action="#">
                                <div className=''>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                                </div>
                                <div className=''>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 " required="" />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class="text-gray-500 ">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" class="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a>
                                </div>
                                <button type="submit" class="w-full text-white bg-[black] hover:bg-[#36363b] focus:outline-none  font-medium rounded-sm text-lg px-5 py-2.5 text-center " onClick={()=>navigate('/')}>Sign in</button>
                                <p class="text-sm font-light text-gray-500 ">
                                    Don’t have an account yet? <Link to={'/signup'}> <span class="font-medium text-primary-600 hover:underline ">Sign up</span></Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login