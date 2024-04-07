import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const BlogPostSkeleton = () => {
    const navigate = useNavigate()
    return (
        <main role="status" className="animate-pluse pb-4">

            <div className="relative overflow-hidden">
                <div className="w-full h-80">
                    <div className="w-full h-full object-cover" />
                    <div className="absolute inset-0 " style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
                    <div className="absolute top-0 left-0 p-6 text-white text-2xl cursor-pointer" onClick={() => navigate('/')}>
                        <FaArrowLeft />
                    </div>
                    <div className='py-4  px-6  mx-auto w-full max-w-3xl md:pl-14 md:pr-14'>
                        <div className="max-w-3xl absolute bottom-1 text-white pb-6">
                            <div className='flex gap-2 pb-2 form-text text-sm'>
                                <div className='flex gap-2 form-text text-sm'>
                                    <div className='bg-gray-200 h-8 w-20 rounded-md'></div>
                                    <div className='bg-gray-200 h-8 w-28 rounded-md'></div>
                                </div>
                            </div>

                            <div className="bg-gray-200 mt-3 h-8 w-[300px] md:w-[550px] lg:w-[550px] rounded-full"></div>
                            <div className='flex gap-2 mt-4 text-sm'>
                                <div className='bg-gray-200 h-4 w-28 rounded-full'></div>
                                <div className='bg-gray-200 h-4 w-28 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 px-6">
                <article className="mx-auto w-full max-w-3xl md:pl-14 md:pr-14">
                    {Array(2).fill(0).map((item, i) => (
                        <div className='flex mt-3 flex-col gap-3' key={i}>
                            <div className='bg-gray-200 h-4 w-[350px] md:w-[600px] lg:w-[600px] rounded-full' />
                            <div className='bg-gray-200 h-4 w-[350px] md:w-[600px] lg:w-[600px] rounded-full' />
                            <div className='bg-gray-200 h-4 w-[350px] md:w-[400px] lg:w-[400px] rounded-full' />
                            <div className='bg-gray-200 h-4 w-[350px] md:w-[600px] lg:w-[600px] rounded-full' />
                            <div className='bg-gray-200 h-4 w-[350px] md:w-[550px] lg:w-[550px] rounded-full' />
                            <div className='bg-gray-200 h-4 w-[350px] md:w-[600px] lg:w-[600px] rounded-full' />
                            <div className='bg-gray-200 h-4 w-[350px] md:w-[200px] lg:w-[200px] rounded-full' />
                            <div className='bg-gray-200 h-4 w-[350px] md:w-[600px] lg:w-[600px] rounded-full' />
                        </div>
                    ))}
                </article>
            </div>
        </main>
    )
}

export default BlogPostSkeleton