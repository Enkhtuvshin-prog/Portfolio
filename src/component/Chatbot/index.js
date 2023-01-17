import ReactDOM from "react-dom";
import React, { useState } from "react";
// import styles from "./style.module.scss"
// import Toggle from 'react-bootstrap-toggle';
import { FaHeadSideVirus, FaWindowClose } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./style.css";

const Chatbot = () => {
  const [isClicked, setClicked] = useState(false);
  const handleClick = (() => {
    console.log("daragdlaa", isClicked);
    setClicked(!isClicked);
  });
  return (
    <div className="Bg">
      <div className="chatbot">
        <button className="ChatBtn" onClick={handleClick}><FaHeadSideVirus  id="Comment"/> </button> 
      </div>
      {isClicked == true ? ( 
        <div className="Wrapper">
          <div className="Header">
            <h6>Let's Chat - Online</h6>
          </div>
          <div className="text-center p-2">
            <span>Please fill out the form to start chat!</span>
          </div>
          <div className="ChatForm">
            <input type="text" className="form-control" placeholder="Name" />
            <input type="text" className="form-control" placeholder="Email" />
            <textarea
              className="form-control"
              placeholder="Your Text Message"
            ></textarea>
            <button className="btn btn-success btn-block">Submit</button>
          </div>
        </div>
      )  : null
      }
    </div>
  );
};

export default Chatbot;
