import React from "react";
import './header.css'
import showClass from './showClass.js'
import openBox from './openBox.js'
import openMenu from "./openMenu";
import Logo from '../img/logo.svg'
import arrowLow from '../img/icon-arrow-down.svg'
import todoList from '../img/icon-todo.svg'
import Calendar from '../img/icon-calendar.svg'
import alarm from '../img/icon-reminders.svg'
import planning from '../img/icon-planning.svg'
import menuImg from '../img/icon-menu.svg'

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <div className="content content-mobile">
        <nav className="menu">
          <ul>
            <li onClick={showClass}>Features <img src={arrowLow} alt="arrow" />
              <div id="box-list">
                <ul>
                  <li><img src={todoList} alt='Todo list' /> Todo list</li>
                  <li><img src={Calendar} alt='calendar' /> Calendar</li>
                  <li><img src={alarm} alt='alarm' /> Reminders</li>
                  <li><img src={planning} alt='planning' /> Planning</li>
                </ul>
              </div>
            </li>
            <li onClick={openBox}>Company <img src={arrowLow} alt="arrow" />
              <div id="box-near">
                <ul>
                  <li>History</li>
                  <li>Our Time</li>
                  <li>Blog</li>
                </ul>
              </div>
            </li>
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

      <div onClick={openMenu} className="img-image">
        <img src={menuImg} alt="menu hamburger" />
      </div>
    </header >

  );
}