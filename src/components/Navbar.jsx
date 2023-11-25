import React from "react";
import './Navbar.css'
import { FaUserAlt } from "react-icons/fa";


function Navbar() {
  return (
    <>
      <header>
        <div className="logo mt-6">
          <p>BlogHub</p>
        </div>
        
        <FaUserAlt className="user-icon mt-6 text-[20px]"/>
      </header>
    </>
  )
}

export default Navbar;
