import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './Navbar.module.css'
export default function Navbar() {
  return <>
  


<nav className={style.navbar + " navbar navbar-expand-lg navbar-dark py-3"}>
  <div className="container-fluid d-flex justify-content-between align-items-center">
    
   
    <NavLink className="navbar-brand text-white fw-bold fs-4 ms-5" to="/">
      fathy Abdalhamed
    </NavLink>

    {/* Navigation Links */}
    <div className="d-flex gap-4">
      <NavLink className="nav-link text-white fw-bold" to="/about">
        ABOUT
      </NavLink>
      <NavLink className="nav-link text-white fw-bold" to="/portfolo">
        PORTFOLIO
      </NavLink>
      <NavLink className="nav-link text-white fw-bold" to="/contact">
        CONTACT
      </NavLink>
    </div>
    
  </div>
</nav>



  
  
  
  </>
}
