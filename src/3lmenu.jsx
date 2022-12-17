import React, { useState } from "react"
import "./3lmenu.css"
import Hamburger from 'hamburger-react'
import { Link } from "react-router-dom"

function Menu() {
const [navbarOpen, setNavbarOpen] = useState(false)
const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

return (
    <div className="navBar">

      <div className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>

      <Hamburger toggled={navbarOpen} toggle={setNavbarOpen} onClick={handleToggle}  color="rgb(0, 0, 0)" />

        
            <Link to="/"> Home </Link>
        
            <Link to="/about">EISJMUN'23</Link>
        
            <Link to="/team">Team</Link>
        
            <Link to="/committees">Committees</Link>
        
            <Link to="/contact">Contact Us</Link>
        
            <Link to="/register">Register</Link>
      </div>
      <Hamburger toggled={navbarOpen} toggle={setNavbarOpen} onClick={handleToggle}  color="rgb(0, 0, 0)" />

    </div>
    
  )
  

}

export default Menu;