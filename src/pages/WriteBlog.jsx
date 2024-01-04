import React, { useState, useRef, useEffect } from 'react'
import _avatar from '../assets/img/img_avatar.png'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaImage } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const WriteBlog = () => {
  const [editorValue, setEditorValue] = useState('');

  const editorModules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'link', 'blockquote', 'code'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '+1' }],
    ]
  }

  // console.log(editorValue)

  const clearFormRef = useRef(null);

  const handleClearForm = () => {
    // Access the form and reset its values
    if (clearFormRef.current) {
      clearFormRef.current.reset();
      setEditorValue('')
    }
  };


  const allTags = ['Adventure', 'Action', 'Travel', 'Landmark', 'Programming'];

  const [selectedTags, setSelectedTags] = useState([]);
  const maxTags = 2;

  // console.log(selectedTags)

  const handleSelectTag = (tag) => {
    if (selectedTags.length < maxTags && !selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    const updatedTags = selectedTags.filter((tag) => tag !== tagToRemove);
    setSelectedTags(updatedTags);
  };

  // console.log(selectedTags)

  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      // Get Quill's container element and set a minimum height
      const quillEditor = editorRef.current.getElementsByClassName('ql-editor')[0];
      if (quillEditor) {
        quillEditor.style.minHeight = '200px'; // Set a minimum height for the editor content
      }
    }

    if (editorRef.current) {
      const quillEditor = editorRef.current.getElementsByClassName('ql-editor')[0];
      const contentHeight = quillEditor.clientHeight;
      const maxHeight = 200;

      // Calculate the remaining space available for content before hitting max height
      const remainingSpace = maxHeight - contentHeight;

      // Adjust the padding bottom of the editor container to fill the remaining space
      editorRef.current.style.paddingBottom = `${remainingSpace}px`;
    }
  }, [setEditorValue]);


  return (
    <>
      <div className='p-8 pt-4 lg:p-52 lg:pt-4 md:p-20 md:pt-4'>
        <form action="" ref={clearFormRef}>
          <div className="space-y-12">
            <div className="">
              <div className='flex justify-between'>
                <Link to={'/'} className="leading-7 text-3xl text-gray-900 mt-1 logo">BlogHub</Link>
                <div className='flex justify-between gap-2'>
                  <button className='text-white bg-black p-3 pt-0.5 pb-0.5 lg:pl-3 lg:pt-0 lg:pb-0 rounded-sm form-text'>Post</button>
                  <Link to={'/profile'}><img className='rounded-full w-8' src={_avatar} alt="" srcSet="" /></Link>
                </div>
              </div>
            </div>
          </div>

          <div className='pt-10'>

            <div className="mb-6">
              <input type="text" id="title" className="text-gray-900 text-3xl form-heading rounded-lg outline-none block w-full" placeholder="Title..." required autoFocus />
            </div>

            <div className="mb-6">
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg ">
                  <FaImage />
                </span>
                <input type="text" id="image_link" className="rounded-none rounded-e-sm  text-gray-900  block flex-1 min-w-0 w-full text-base border-gray-300 form-text p-1.5 outline-none" placeholder="Your wallpaper link here..." />
              </div>
            </div>

            <div className='mb-6 form-text'>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg ">
                  <FaHashtag />
                </span>

                <input
                  type="text"
                  placeholder="Enter or select tags below (2)"
                  className="rounded-none rounded-e-sm  text-gray-900  block flex-1 min-w-0 w-full text-base border-gray-300 form-text p-1.5 outline-none"
                  disabled={selectedTags.length >= maxTags}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      const tag = event.target.value.trim();
                      if (tag && !selectedTags.includes(tag)) {
                        handleSelectTag(tag);
                        event.target.value = '';
                      }
                    }
                  }}
                />
              </div>
              <div className="mt-4 flex flex-wrap cursor-pointer">
                {allTags.map((tag, index) => (
                  <span
                    key={index}
                    className={`tag ${selectedTags.includes(tag)
                      ? 'bg-blue-900 text-white'
                      : 'bg-gray-300 text-gray-700'
                      } rounded-full px-3 py-1 mr-2 mb-2`}
                    disabled={
                      selectedTags.length >= maxTags && !selectedTags.includes(tag)
                    }
                    onClick={() => {
                      if (!selectedTags.includes(tag)) {
                        handleSelectTag(tag);
                      } else {
                        handleRemoveTag(tag);
                      }
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className='mt-2 cursor-pointer'>
                Selected Tags:
                {selectedTags.map((tag, index) => (
                  <span key={index} className="ml-2">
                    <span
                      className="selected-tag bg-green-800 text-white rounded px-2 py-1"
                      onClick={() => handleRemoveTag(tag)}
                    >
                      {tag} <span className="close-btn">x</span>
                    </span>
                  </span>
                ))}
              </div>

            </div>

            <div className="mb-6">
              <h2 className="block mb-2 text-base font-semibold form-text text-gray-900">Tell your story:</h2>
              <div className="editor-wrapper" style={{ minHeight: '100px' }}>
                <div className="editor-container" ref={editorRef} style={{ minHeight: '100px' }}>
                  <ReactQuill
                    theme="snow"
                    value={editorValue}
                    onChange={setEditorValue}
                    modules={editorModules}
                    className="form-text"
                  />
                </div>
              </div>
            </div>

            <div className='mb-6'>
              <div className=' border-b border-gray-300'></div>
            </div>
            <div className='mb-6'>
              <div className='form-text' dangerouslySetInnerHTML={{__html: editorValue}}/>
            </div>
            <div className='mb-6'>
              <div className=' border-b border-gray-300'></div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" className="rounded-md border-[2px] border-[#475569] px-3 py-2 text-sm bg-slate-600 font-semibold text-white" onClick={handleClearForm}>Clear</button>
              <Link to={'/'} className="text-sm font-semibold border-[2px] border-[#7f1d1d] px-3 py-2 rounded-md text-red-900">Cancel</Link>
            </div>

          </div>
        </form>
      </div>

    </>
  )
}
