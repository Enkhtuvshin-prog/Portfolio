import React from "react";
import styles from "./style.module.css";
import { SocialIcon } from "react-social-icons";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarMenu = () => {
  return (
    <div className={styles.Container}>
      <Navbar bg="dark" variant="dark" className={styles.Navbar}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="./img/me.jpeg"
              width="50"
              height="50"
              className="d-inline-block align-top rounded-5"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#About">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#Skills">Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#Hero">Hero</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#Projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      {/* <header className="App-header">
        <motion.div
          initial={{ x: -1500 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
        >
          <SocialIcon url="" bgColor="orange" style={{ fontSize: 80 }} />
          <SocialIcon network="facebook" style={{ fontSize: 80 }} />
        </motion.div>

        <h1 style={{ color: "red" }}>
          <Typewriter words={["sain uu", "Pinecone"]} loop={false} />
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
};

export default NavbarMenu;
