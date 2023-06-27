import React from "react";
import './Navbar.css'

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
      <button>GET STARTED</button>
    </header>
    </>
  )
}

export default Navbar;
