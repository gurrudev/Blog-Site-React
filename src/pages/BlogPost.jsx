import React from 'react'
import pic from '../assets/img/banner.jpg'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'
const BlogPost = () => {


    const navigate = useNavigate();


    return (
        <>
            <main className="pb-4">
                
                <div className="relative overflow-hidden">
                    <div className="w-full h-80">
                        <img className="w-full h-full object-cover" src={pic} alt="Image" />
                        <div className="absolute inset-0 bg-black" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
                        <div className="absolute top-0 left-0 p-6 text-white text-[25px] cursor-pointer" onClick={() => navigate('/')}>
                            <FaArrowLeft />
                        </div>
                        <div className='py-4 px-6 lg:px-0 md:px-0 mx-auto w-full max-w-3xl '>
                            <div className="absolute bottom-1 text-white">
                                <div className=''>

                                <h1 className="text-[30px] leading-tight  uppercase pb-2">Best practices for successful prototypes for successful prototypes for successful prototypes </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4 px-6">
                    <article className="mx-auto w-full max-w-3xl ">
                        <p>
                            Lorem ipsum dolor sit, fuga sit aliquid nesciunt at a vel pariatur blanditiis dolor provident sapiente accusamus exercitationem eligendi iure reiciendis quasi similique nemo odit voluptate? Nihil enim fugit voluptate accusamus sint.
                        </p>
                    </article>
                </div>
            </main>


        </>
    )
}

export default BlogPost