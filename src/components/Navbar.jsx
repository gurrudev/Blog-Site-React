import React from "react";
import './Navbar.css'
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <header className="p-10 sm:p-20  sm:pt-10">
        <div className="logo mt-6 text-white">
          <h1 className="text-2xl sm:text-3xl">BlogHub</h1>
        </div>
        <Link to={'/login'}>
          <FaUserAlt className="user-icon mt-6 text-1xl sm:text-2xl"/>
        </Link>
      </header>
    </>
  )
}

export default Navbar;
