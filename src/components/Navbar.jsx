import React from "react";
import './Navbar.css'
import { FaUserAlt } from "react-icons/fa";


function Navbar() {
  return (
    <>
      <header>
        <div className="logo">
          <p>lo</p>
        </div>
        <nav>
          <ul>
            <li><a href="">DESTINATION</a></li>
            <li><a href="">FOOD</a></li>
            <li><a href="">WELL BEING</a></li>
            <li><a href="">SPORTS</a></li>
            <li><a href="">FAMILY</a></li>
            <li><a href="">LIFESTYLE</a></li>
          </ul>
        </nav>
        <FaUserAlt className="user-icon"/>
      </header>
    </>
  )
}

export default Navbar;
