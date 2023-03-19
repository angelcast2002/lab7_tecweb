import React from 'react';
import RecursoLogo from "../../../../../../../src/assets/ducklogo.svg";
import './Logo.css';

function Logo() {
  return (
    <div className="logo">
      <img src={RecursoLogo} alt="Logo de duckduckgo" className="main_logo" />
    </div>
  )
}

export { Logo }
