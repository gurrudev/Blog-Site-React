import React from "react";
import './Navbar.css'
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <header>
        <div className="logo mt-6">
          <p>BlogHub</p>
        </div>
        <Link to={'/login'}>
          <FaUserAlt className="user-icon mt-6 text-[20px]"/>
        </Link>
      </header>
    </>
  )
}

export default Navbar;
