import React from "react";
import './header.css'
import showClass from './showClass.js'
import openBox from './openBox.js'
import Logo from '../img/logo.svg'
import arrowLow from '../img/icon-arrow-down.svg'
import todoList from '../img/icon-todo.svg'
import Calendar from '../img/icon-calendar.svg'
import alarm from '../img/icon-reminders.svg'
import planning from '../img/icon-planning.svg'
import menuImg from '../img/icon-menu.svg'
import { element } from "prop-types";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <div className="content">
        <nav className="menu">
          <ul>
            <li onClick={showClass}>Features <img src={arrowLow} alt="" />
            </li>
            <li onClick={openBox}>Company <img src={arrowLow} alt="" /></li>
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
        <div id="box-list">
          <ul>
            <li><img src={todoList} /> Todo list</li>
            <li><img src={Calendar} /> Calendar</li>
            <li><img src={alarm} /> Reminders</li>
            <li><img src={planning} /> Planning</li>
          </ul>
        </div>
        <div className="box-near">
          <ul>
            <li>History</li>
            <li>Our Time</li>
            <li>Blog</li>
          </ul>
        </div>


      </div>
      <div className="img-image">
        <img src={menuImg} />
      </div>
    </header >

  );
}