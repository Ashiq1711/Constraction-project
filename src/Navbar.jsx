import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    
       <nav>
        <div className="container">
            <div className="nav_flex">
                <img src="public/logo.png" alt="" />
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Project</li>
                </ul>
            </div>
        </div>
       </nav>
   
  )
}

export default Navbar