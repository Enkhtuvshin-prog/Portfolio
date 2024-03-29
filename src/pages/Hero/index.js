import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Typewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import styles from "./style.module.scss";
import { useCallback } from "react";
import { Particles } from "react-particles";
import { loadFull } from "tsparticles";
import { particlesData } from "./particlesData";

const socialMediaHandlesLinks = {
  gitHub: 'https://github.com/Enkhtuvshin-prog',
  instagram: 'https://www.instagram.com/im_phani_murari/?hl=en',
  linkedin: 'https://www.linkedin.com/in/phanimurari/',
  twitter: 'https://twitter.com/ImPhaniMurari'
};

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className={styles.Container} id="Hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesData}
      />

      <div className={styles.HeroItem}>
        <div className={styles.Col}>
          <h1>
            Hi <br /> I'm Enkhtuvshin_D
          </h1>
          <h1>
            I am the{" "}
            <span style={{ color: "#8E44AD" }}>
              <Typewriter
                words={["React Developer", "UI Designer", "Software Engineer"]}
                loop={false}
              />
            </span>
          </h1>
          <div className={styles.Icons}>                 
            <SocialIcon network="github" url="https://github.com/Enkhtuvshin-prog" />
           <SocialIcon network="instagram" />
          <SocialIcon network="youtube" /> 
           <SocialIcon network="facebook" url="https://www.facebook.com/dashnyam.enkhtuwshin/" />
          </div>
        </div>
        <div className={styles.Col}>
          <div className={styles.ImgContainer}>
            {/* <img  className={styles.Profile} src="./img/me.jpeg" alt="" /> */}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
