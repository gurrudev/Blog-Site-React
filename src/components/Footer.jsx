import React from 'react'
import './Footer.css'
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaStackOverflow } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()
  return (
    <>
      <footer className="relative bottom-0 bg-[black] sm:flex sm:items-center sm:justify-between p-7 sm:p-7 xl:p-20 xl:pt-8 xl:pb-8 lg:p-20 lg:pt-8 lg:pb-8 md:p-20 md:pt-8 md:pb-8 antialiased">
        <p className="mb-4 text-sm text-center text-gray-200 dark:text-gray-200 sm:mb-0">
          <span className=''>Designed & Developed by <a className="text-base hover:underline text-[white]" href='https://github.com/gurrudev'> Ashutosh </a>{/*<FaExternalLinkAlt/>*/} </span>
        </p>
        <div className="flex justify-center items-center space-x-1">
          <div className='footer-icon'>
            <a onClick={()=>navigate('/post/on')} className='cursor-pointer'><GrInstagram /></a>
            <a href="https://linkedin.com/in/gurrudev"><IoLogoLinkedin/></a>
            <a href="https://github/gurrudev"><FaGithub/></a>
            <a href="https://stackoverflow.com/users/20042850/ashutosh-pawar"><FaStackOverflow/></a>
            <a href="https://x.com/gurrudevs"><FaXTwitter/></a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer