import React from 'react'
import { Container } from 'react-bootstrap';
import {MdSchool} from 'react-icons/md';
import { Typewriter } from 'react-simple-typewriter';
import styles from "./style.module.scss"
import { useCallback } from "react";
import { Particles } from "react-particles";
import { loadFull } from "tsparticles";
import { particlesData } from "../Hero/particlesData";

const Education = () => {
    const particlesInit = useCallback(async (engine) => {
        // console.log(engine);
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);
  return (
    <div className='my-5' id={styles.Education}>
         <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesData}
      />
        <div>
            <h1>
                <MdSchool/>{" "}
                My{" "}
                <span style={{color: "#660066 "}}>
                    <Typewriter words={["Education"]}/>
                </span>
            </h1>
        </div>
        <Container>
        <div className='row my-5 '>
            <div className='col-5'>
                <img src='./img/must.jpeg' style={{ width: "100%", height:"200px"}}/>
            </div>
            <div className='col-7 text-start fw-bold'>
                <h2>Bachelor of Business administration</h2>
                <p>Mongolioan science and technology university</p>
                <h3 style={{color: "#145A32 ", fontWeight:"600"}}>2013-2017 | Completed </h3>
            </div>
        </div>
        <div className='row my-5 '>
            <div className='col-5'>
                <img src='./img/pinecone.png' style={{ width: "100%", height:"200px"}}/>
            </div>
            <div className='col-7 text-start fw-bold'>
                <h2>Web Developer</h2>
                <p>Pinecone academy</p>
                <h3 style={{color: "#145A32 ", fontWeight:"600"}}>2022 -2023| Pursuing  </h3>
            </div>
        </div>
        </Container>
    </div>
  )
}

export default Education