import React from 'react'
import './Footer.css'
import InstagramIcon from '../assets/img/instagram-icon.png'
import GithubIcon from '../assets/img/github-icon.png'
import LinkedinIcon from '../assets/img/linkedin-icon.png'
import StackoverflowIcon from '../assets/img/stackoverflow-icon.png'


function Footer() {
  return (<>
    <div className='footer'>
      <div style={{ display: 'flex', gap: '8px' }}><span >Designed & Developed by</span> <a href='https://github.com/gurrudev'> ASHUTOSH</a></div>
      <div className='footer-icon'>
        <a href=""><img src={InstagramIcon} alt="" srcset="" /></a>
        <a href=""><img src={LinkedinIcon} alt="" srcset="" /></a>
        <a href=""><img src={GithubIcon} alt="" srcset="" /></a>
        <a href=""><img src={StackoverflowIcon} alt="" srcset="" /></a>
      </div>
    </div>
  </>)
}

export default Footer