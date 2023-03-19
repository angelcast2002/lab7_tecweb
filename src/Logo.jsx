import React from "react"
import RecursoLogo from "./assets/ducklogo.svg"
import "./Logo.css"

const Logo = () => (
  <div className='logo'>
    <img src={RecursoLogo} alt="Logo de duckduckgo" className='main_logo'/>
  </div>
)

export default Logo