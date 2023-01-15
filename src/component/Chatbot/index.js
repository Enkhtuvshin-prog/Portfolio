import ReactDOM from 'react-dom';
import React, { useState } from 'react';
// import styles from "./style.module.scss"
// import Toggle from 'react-bootstrap-toggle';
import { FaHeadSideVirus, FaWindowClose } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "./style.css"

const Chatbot = () => {

  return (
    <>
      <Container>
        {/* <div className="Chat" > */}
          {/* <Button className={styles.Idea}> */}
          <input type ="checkbox" id="Check"/>
           <label className="ChatBtn" for="check">
              <FaHeadSideVirus className="Icon"  id="Comment" /><FaWindowClose className="Icon" id="Close"/>
           </label>
          {/* </Button> */}
        {/* </div> */}
        <div className="Wrapper">
          <div className="Header">
            <h6>Let's Chat - Online</h6>
          </div>
          <div className="text-center p-2">
            <span>Please fill out the form to start chat!</span>
          </div>
          <div className="ChatForm" >
            <input type="text" className="form-control" placeholder="Name" />
            <input type="text" className="form-control" placeholder="Email" />
            <textarea className="form-control" placeholder="Your Text Message"></textarea>
            <button className="btn btn-success btn-block">Submit</button>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Chatbot;