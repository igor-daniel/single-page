import React from "react";
import './header.css'
import Logo from '../img/logo.svg'

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <div className="content">
        <nav className="menu">
          <ul>
            <li>Features</li>
            <li>Company</li>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </nav>
        <div className="login">
          <ul>
            <li>Login</li>
            <li id="border">Register</li>
          </ul>
        </div>
      </div>
    </header>

  );
}