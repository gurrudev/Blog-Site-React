import React from 'react'
import './Footer.css'
import InstagramIcon from '../assets/img/instagram-icon.png'
import GithubIcon from '../assets/img/github-icon.png'
import LinkedinIcon from '../assets/img/linkedin-icon.png'
import StackoverflowIcon from '../assets/img/stackoverflow-icon.png'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()
  return (
    <>
      <footer className="relative bottom-0 bg-[black] sm:flex sm:items-center sm:justify-between p-7 sm:p-7 xl:p-8  antialiased">
        <p className="mb-4 text-sm text-center text-gray-200 dark:text-gray-200 sm:mb-0">
          <span >Designed & Developed by</span> <a className="text-base hover:underline text-[white] text-" href='https://github.com/gurrudev'> ASHUTOSH</a>
        </p>
        <div className="flex justify-center items-center space-x-1">
          <div className='footer-icon'>
            <a onClick={()=>navigate('/post/on')} className='cursor-pointer'><img src={InstagramIcon} alt="" srcSet="" /></a>
            <a href="javascript: void(0)"><img src={LinkedinIcon} alt="" srcSet="" /></a>
            <a href="javascript: void(0)"><img src={GithubIcon} alt="" srcSet="" /></a>
            <a href="javascript: void(0)"><img src={StackoverflowIcon} alt="" srcSet="" /></a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer