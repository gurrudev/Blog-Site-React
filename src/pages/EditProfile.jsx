import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import endpointForUser from '../utils/endpointForUser'
import { FaUserCircle } from "react-icons/fa";
import { } from "react-icons/md";
import ReactQuill from 'react-quill';
import { useDispatch } from 'react-redux';
import { userUpdate } from '../redux/features/userSlice';
import { Toaster, toast } from 'react-hot-toast';

const EditProfile = () => {

    const [user, setUserData] = useState({})
    const [profileData, setProfileData] = useState({})
    const [editorValue, setEditorValue] = useState(null)
    const [skills, setSkills] = useState('')

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const token = localStorage.getItem('token')

    const editorModules = {
        toolbar: [
            ['bold', 'italic', 'link'],
        ]
    }

    // console.log(user)
    const getProfileData = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value })
    }

    const data = {
        name: profileData.name,
        user_title: profileData.user_title,
        profile_pic: profileData.profile_pic,
        skills: skills.trim().split(', '),
        location: profileData.location,
        bio: editorValue 
    }


    const updateUserData = async () => {
        try{
            const response = await dispatch(userUpdate({id: user._id, data: data}))

            console.log(response.meta.requestStatus)
            if(response.meta.requestStatus === 'fulfilled'){
                toast.success('Profile Updated Successfully')
                setTimeout(()=>{
                    navigate('/profile')
                }, 3000) 
            }else{
                toast.error('Somthing went wrong')
            }
        }catch(e){
            console.log(e)
        }
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

    const editorRef = useRef(null);

    useEffect(() => {
        if (editorRef.current) {
            // Get Quill's container element and set a minimum height
            const quillEditor = editorRef.current.getElementsByClassName('ql-editor')[0];
            if (quillEditor) {
                quillEditor.style.minHeight = '100px'; // Set a minimum height for the editor content
            }
        }

        if (editorRef.current) {
            const quillEditor = editorRef.current.getElementsByClassName('ql-editor')[0];
            const contentHeight = quillEditor.clientHeight;
            const maxHeight = 100;

            // Calculate the remaining space available for content before hitting max height
            const remainingSpace = maxHeight - contentHeight;

            // Adjust the padding bottom of the editor container to fill the remaining space
            editorRef.current.style.paddingBottom = `${remainingSpace}px`;
        }

    }, [setEditorValue]);

    return (
        <>
        <Toaster/>
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
                            <label htmlFor="skills" className='text-gray-800 form-text font-semibold'>Name</label>
                            <input type="text" id="name" name='name' onChange={getProfileData} className="text-gray-900 border border-gray-300 text-base form-text py-1.5 px-3 mt-1 rounded-sm  outline-none block w-full" placeholder="Jon Doe" required autoFocus />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="skills" className='text-gray-800 form-text font-semibold'>User Title</label>
                            <input type="text" id="user_title" name='user_title' onChange={getProfileData} className="text-gray-900 form-text border border-gray-300 text-base form-text py-1.5 px-3 mt-1 rounded-sm outline-none block w-full" placeholder="Writer" required />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="skills" className='text-gray-800 form-text font-semibold'>Profile pic URL</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 text-base mt-1 text-gray-600 bg-gray-100 border border-gray-300 rounded-s-sm ">
                                    <FaUserCircle />
                                </span>
                                <input type="text" id="profile_pic" name='profile_pic' onChange={getProfileData} className="rounded-none mt-1 rounded-e-sm border border-gray-300 text-gray-900  block flex-1 min-w-0 w-full text-base form-text py-1.5 px-3 outline-none" placeholder="Your profile pic link here..." required />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="skills" className='text-gray-800 form-text font-semibold'>Skills</label>
                            <input type="text" id="skills" name='skills' value={skills} onChange={(e) => setSkills(e.target.value)} className="text-gray-900 border border-gray-300 text-base form-text py-1.5 px-3 mt-1 rounded-sm outline-none block w-full" placeholder="Writing, Java," required />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="skills" className='text-gray-800 form-text font-semibold'>Location</label>
                            <input type="text" id="location" name='location' onChange={getProfileData} className="text-gray-900 form-text border border-gray-300 text-base form-text py-1.5 px-3 mt-1 rounded-sm outline-none block w-full" placeholder="Your Location" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="skills" className='text-gray-800 form-text font-semibold'>About</label>
                            <div className="editor-container mt-1" ref={editorRef}>
                                <ReactQuill
                                    theme="snow"
                                    value={editorValue}
                                    onChange={setEditorValue}
                                    modules={editorModules}
                                    className="form-text"
                                />
                            </div>
                        </div>
                        <div className='mb-6'>
                            <div className='border-b border-gray-300' />
                            <div className='form-text' dangerouslySetInnerHTML={{ __html: editorValue }} />
                            <div className='border-b border-gray-300' />
                        </div>

                        <div className="mb-6 flex items-center justify-end gap-2">
                            <button type='button' onClick={() => navigate('/profile')} className='form-text border-red-900 border-2 text-red-900 py-1 px-3 rounded-sm'>Cancle</button>
                            <button type="button" onClick={updateUserData} className="bg-gray-900 border-2 border-gray-900 text-white form-text py-1 px-3 rounded-sm">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile