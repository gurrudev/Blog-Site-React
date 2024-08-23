/* eslint-disable react/prop-types */
import { useState } from 'react';
// import { useAutoAnimate } from '@formkit/auto-animate/react';
import './Cards.css';
import HomeCardSkeleton from './Skeleton/HomeCardSkeleton';
import truncate from '../utils/Truncate';
import cardDate from '../utils/cardDate';
import strippedString from '../utils/strippedString';
import { BsThreeDots } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { CiImageOn } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { deleteBlog } from '../redux/features/blogSlice';

function Cards({ cardsData, totalCards, isProfile, isLoading }) {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState({});

    const toggleMenu = (cardIndex) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [cardIndex]: !prevState[cardIndex],
        }));
    };

    const handleDeleteBlog = async (id) =>{
        if(window.confirm('Are you sure you want to delete this blog?')) 
        try {
            const response = await dispatch(deleteBlog(id))
            console.log(response)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <div className='animate-pluse' >
                <div className="card-container p-8 sm:p-20 sm:pt-10">
                    {isLoading ? (
                        Array(totalCards)
                            .fill(0)
                            .map((_, i) => <HomeCardSkeleton key={i} />)
                    ) : (
                        cardsData
                            ?.filter((_, index) => index < totalCards)
                            ?.map((item, index) => (
                                <div className="card" key={index}>
                                    <div className="relative">
                                        <img
                                            src={item.image_url}
                                            className="w-full h-[210px]"
                                            alt=""
                                        />
                                        <div className="absolute inset-0 flex justify-between p-4 text-white text-lg">
                                            <div className="flex gap-1.5 items-start">
                                                {item.blog_tags &&
                                                    item.blog_tags.map((tag, tagIndex) => (
                                                        <div
                                                            key={tagIndex}
                                                            className="bg-black bg-opacity-20 backdrop-blur-2xl rounded-sm p-1"
                                                        >
                                                            <p className="pl-2 pr-2 text-xs form-text drop-shadow-2xl text-white">
                                                                {tag}
                                                            </p>
                                                        </div>
                                                    ))}
                                            </div>
                                            <div className="flex items-start">
                                                <div className="bg-black bg-opacity-20 backdrop-blur-2xl rounded-full p-2 shadow-lg">
                                                    <p className="text-base">
                                                        <CiImageOn />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="uppercase">{item.title}</h2>
                                    <div className="user-details text-slate-700">
                                        <p className="text-[15px]"> by {item.username}</p>
                                        <p className="text-[15px]">
                                            {cardDate(item.createdAt)}
                                        </p>
                                    </div>
                                    <p className="des text-justify">
                                        {truncate(strippedString(item.description))}
                                    </p>
                                    <div className="flex justify-between">
                                        <div className="flex flex-col">
                                            <Link to={`/post/${item._id}`}>View Post</Link> <span className='underline'></span>
                                        </div>
                                        {isProfile === true && (
                                            <div className="relative inline-block text-left">
                                                <div>
                                                    <button
                                                        onClick={() => toggleMenu(index)}
                                                        className="flex items-center focus:outline-none"
                                                    >
                                                        <BsThreeDots className="text-2xl" />
                                                    </button>
                                                </div>
                                                {isOpen[index] && (
                                                    <div className="absolute z-10 right-0 bottom-4 mb-5 w-36 bg-white border border-gray-200 rounded-lg shadow-lg">
                                                        <div className="py-1 form-text ">
                                                            <span className="flex items-center cursor-pointer px-4 py-2 text-gray-800 hover:bg-gray-100">
                                                                <FaEdit className="text-xl mr-2" />
                                                                Edit
                                                            </span>
                                                            <span onClick={()=>handleDeleteBlog(item._id)}  className="flex items-center cursor-pointer px-4 py-2 text-gray-800 hover:bg-gray-100">
                                                                <MdDeleteForever className="text-xl mr-2" />
                                                                Delete
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                    )}
                </div>
            </div>
        </>
    );
}

export default Cards;
