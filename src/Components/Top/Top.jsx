import React from 'react';
import "./top.scss"
import {Phone,Mail} from "@material-ui/icons"



const Top = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Max.
          </a>
          <div className="itemContainer">
            <Phone className="icon" />
            <span>516-323-9599</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="https://mail.google.com/mail/u/0/#inbox">
            <span>Maxsenat7432@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Top;