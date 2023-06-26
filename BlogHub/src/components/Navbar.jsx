import React from "react";
import './Navbar.css'

function Navbar() {
  return (
    <header>
      <div className="logo">
        <p>lo</p>
      </div>
      <nav>
        <ul>
          <li><a href="">Destination</a></li>
          <li><a href="">Food</a></li>
          <li><a href="">Well Being</a></li>
          <li><a href="">Sports</a></li>
          <li><a href="">Family</a></li>
          <li><a href="">Lifestyle</a></li>
        </ul>
      </nav>
      <button><a href="">Get Started</a></button>
    </header>
  )
}

export default Navbar;
