import React from 'react'
import _avatar from '../assets/img/img_avatar.png'
import Editor from '../components/Editor'

export const WriteBlog = () => {
  return (
    <>
      <div className='p-8 pt-4 lg:p-52 lg:pt-4 md:p-20 md:pt-4'>
        <form action="">
          <div className="space-y-12">
            <div className="">
              <div className='flex justify-between'>
                <h1 className="leading-7 text-3xl text-gray-900 mt-1 logo">BlogHub</h1>
                <div className='flex justify-between gap-2'>
                  <button className='text-white bg-black p-3 pt-0.5 pb-0.5 lg:pl-3 lg:pt-0 lg:pb-0 rounded-sm form-text'>Post</button>
                  <img className='rounded-full w-8' src={_avatar} alt="" srcSet="" />
                </div>
              </div>
            </div>
          </div>

          <div className='pt-10'>
            <div>
              <div className="mb-6">
                {/* <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label> */}
                <input type="text" id="title" className="text-gray-900 text-2xl form-heading rounded-lg outline-none block w-full" placeholder="Title" required />
              </div>
              <div className="mb-6">
                {/* <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label> */}
                <input type="text" id="image_link" className="text-gray-900 text-sm rounded-lg outline-none block w-full" placeholder="Your wallpaper link" required />
              </div>
              <div className="mb-6">
                {/* <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label> */}
                <Editor/>
              </div>
              
            </div>
          </div>
        </form>
      </div>

    </>
  )
}
