import React,{useState} from 'react'
import _avatar from '../assets/img/img_avatar.png'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const WriteBlog = () => {
  const [editorValue, setEditorValue] = useState('');

  const editorModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'link', 'blockquote', 'code'],
      [{ list: 'ordered' }, { list: 'bullet' }, {indent : '+1'}],
    ]
  }

  // console.log(editorValue)
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
                {/* <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label> */}
                <input type="text" id="image_link" className="text-gray-900 text-base rounded-lg outline-none block w-full rq-form-element" placeholder="Your wallpaper link" required autoFocus/>
              </div>
              <div className="mb-6">
                {/* <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label> */}
                <input type="text" id="title" className="text-gray-900 text-3xl form-heading rounded-lg outline-none block w-full" placeholder="Title" required />
              </div>
              <div className="mb-6">
                <h2 className="block mb-2 text-base font-semibold form-text text-gray-900">Tell your story...</h2>
                <ReactQuill 
                  theme="snow" 
                  value={editorValue} 
                  onChange={setEditorValue} 
                  className='form-text'
                  modules={editorModules}  
                />
              </div>
              
            </div>
          </div>
        </form>
      </div>

    </>
  )
}
