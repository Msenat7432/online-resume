import React from 'react';
import logo from '../../images/Me_.png';
import down from '../../images/down.png';
import {init} from 'ityped'
import {useEffect ,useRef} from 'react'
import "./Intro.scss"


const Intro = () => {
  const textRef = useRef() 
  useEffect(() => {
     init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:30,
      strings: [" HTML", " CSS", " JavaScript", " Python", " React", " Express", " Node.Js", " MongoDB", " DJango"],
    });
  }, [])

    return (
        <div className="intro" id= "intro">
            <div className="left">
                <div className="imgContainer">
                    <img src = {logo} alt= "me"/>
                </div>
            </div>
            <div className="right">
            <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Max Senat</h1>
            <p> <b>I recently graduated from General Assembly’s Software Engineering Immersive. I am looking for an opportunity to develop my skills further and learn more as an upcoming software engineer.</b> </p>
            <h3>Software Engineer<span ref={textRef}> </span> </h3>

            </div>
            <a href ="#portfolio">
                <img src={down} alt="down"/>
            </a>
            </div>
        </div>
    );
};

export default Intro;