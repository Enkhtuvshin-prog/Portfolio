import React from 'react'
// import { Container } from 'react-bootstrap'
import styles from "./style.module.scss";
import { MdHeadsetMic } from 'react-icons/md';
import { Typewriter } from 'react-simple-typewriter';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaUser } from 'react-icons/fa';
import { HiOutlineMail, HiPhone } from 'react-icons/hi';
import { AiFillMessage } from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import { FaPaperPlane } from 'react-icons/fa';

const index = () => {
    return (
        <div className={styles.Container} >
            <h2>
                <MdHeadsetMic /> {" "}
                Get In {" "}
                <span style={{ color: "#660066" }}>
                    <Typewriter words={["Touch"]} />
                </span>
            </h2>
            <div className={styles.Contact}>
                <img className={styles.Image} src='./img/contact1.png' />
                <div className={styles.Info}>
                    <InputGroup className="m-3 py-2">
                        <InputGroup.Text id="basic-addon1" className='bg-transparent'>< FaUser/></InputGroup.Text>
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="m-3 py-2 ">
                        <InputGroup.Text  className='bg-transparent'>< HiOutlineMail/></InputGroup.Text>
                        <Form.Control
                            placeholder="Email"
                            aria-label="Email"
                        />
                    </InputGroup>
                    <InputGroup className="m-3 py-2">
                        <InputGroup.Text  className='bg-transparent'>< HiPhone/></InputGroup.Text>
                        <Form.Control
                            placeholder="Phone"
                            aria-label="Phone"
                        />
                    </InputGroup>
                    <InputGroup className="m-3">
                        <InputGroup.Text id="basic-addon1" className='bg-transparent'>< AiFillMessage/></InputGroup.Text>
                        <Form.Control
                            placeholder="Message"
                            aria-label="message"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <div className="">   
                         <Button>Submit <FaPaperPlane className='mx-2' /> </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index