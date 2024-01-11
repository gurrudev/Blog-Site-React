import React, { useState, useEffect } from 'react'
import pic from '../assets/img/banner.jpg'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router-dom';
import { MdDateRange } from "react-icons/md";
import Footer from '../components/Footer'
import getBlogById from '../utils/getBlogById';
import cardDate from '../utils/cardDate';

const BlogPost = () => {

    const navigate = useNavigate()
    const { id } = useParams();
    const [post, setPost] = useState({});
    
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await getBlogById(id);
                setPost(response.blog); 
            } catch (error) {
                console.error(error);
            }
        };

        if (id) {
            fetchBlog();
        }
    }, [id]);

    // console.log(post)

    return (
        <>
            <main className="pb-4">

                <div className="relative overflow-hidden">
                    <div className="w-full h-80">
                        <img className="w-full h-full object-cover" src={post.image_url} alt="" />
                        <div className="absolute inset-0 bg-black" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
                        <div className="absolute top-0 left-0 p-6 text-white text-2xl cursor-pointer" onClick={() => navigate('/')}>
                            <FaArrowLeft />
                        </div>
                        <div className='py-4  px-6  mx-auto w-full max-w-3xl md:pl-14 md:pr-14'>
                            <div className="max-w-3xl absolute bottom-1 text-white pb-6">
                                <div className='flex gap-2 pb-3 form-text text-sm'>
                                    {post.blog_tags && (
                                        <div className='flex gap-2 pb-3 form-text text-sm'>
                                            {post.blog_tags.map((tag, index) => (
                                                <span key={index} className='bg-white bg-opacity-20 backdrop-blur-2xl py-1 px-2 rounded-sm'>{tag}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <h1 className="text-[30px] leading-tight uppercase pb-2 form-heading">{post.title}</h1>
                                <div className='flex gap-2 text-sm'>
                                    <p>by {post.username} &nbsp; ── </p>
                                    <div className='flex gap-1'>
                                        <span className='pt-1'><MdDateRange /></span>
                                        <p>{cardDate(post.createdAt)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 px-6">
                    <article className="mx-auto w-full max-w-3xl md:pl-14 md:pr-14">
                        <div className='form-text'>
                            <div dangerouslySetInnerHTML={{ __html: post.description }} />
                        </div>
                    </article>
                </div>
            </main>
            
        </>
    )
}

export default BlogPost