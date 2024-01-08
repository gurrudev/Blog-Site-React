import React, { useState } from "react";
import './Navbar.css'
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import endpointForUser from "../utils/endpointForUser";

function Navbar() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [user, setUser] = useState({})
 

  const token = localStorage.getItem('token')

  const getUserData = async () => {
    try {
      const userData = await endpointForUser(token);
      setUser(userData)
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  useEffect(()=>{
    getUserData()
  },[])

  return (
    <>
      <header className="p-10 sm:p-20  sm:pt-10">
        <div className="logo mt-6 text-white">
          <h1 className="text-2xl sm:text-3xl">BlogHub</h1>
        </div>
        <Link to={
            (user.message === 'Invalid token' || user === null) ? '/login' : 
            '/profile'
          }
        >
          <FaUserAlt className="user-icon mt-6 text-1xl sm:text-2xl" />
        </Link>
      </header>
    </>
  )
}

export default Navbar;
