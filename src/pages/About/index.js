import React from "react";
import { FaUser } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import styles from "./style.module.scss";
import {AiOutlineRight} from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import { useCallback } from "react";
import { Particles } from "react-particles";
import { loadFull } from "tsparticles";
import {particlesData} from "../Hero/particlesData"
const About = () => {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div id="About" className={styles.Container}>
      {/* <div id="tsparticles"></div> */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesData}
      />
      <h1>
        {" "}
        <FaUser />{" "}
        About{" "}
        <span style={{ color: "#8E44AD" }}>
          <Typewriter words={["Me"]} loop={false} />
        </span>
      </h1>
      <div className="row  p-5">
        <div className="col-md-5 col-sm-12  rounded mx-auto d-block">
          <img className={styles.Image} src="./img/my.jpeg" alt=""/>
        </div>
        <div className="col-md-5 col-sm-12 text-start  my-3">
          <h2>I'm Enkhtuvshin</h2>
          <h4>Full Stack Developer</h4>
          <p>I am a Full-Stack developer based in Pune, India. I am an Information Technology undergraduate from SPPU. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.</p>
          <div className={styles.BoxContent}>
            <div className={styles.box}>
              <p><span> Age: </span> 19</p>
              <p><span> Phone : </span> +91 704-302-4736</p>
            </div>
            <div className={styles.box}>
              <p><span> Email : </span> jigarsable21@gmail.com</p>
              <p><span> Place : </span> Pune, India - 412206</p>
            </div>
        </div>
          

          <Button>Resume <AiOutlineRight/> </Button>

        </div>

      </div>
    </div>
  );
};

export default About;
