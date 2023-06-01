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
          <img className={styles.Image} src="./img/tvshn.jpg" alt=""/>
        </div>
        <div className="col-md-5 col-sm-12 text-start  my-3">
          <h2>I'm Enkhtuvshin</h2>
          <h4>Full Stack Developer</h4>
          <p>Би Pinecone academy вэб хөгжүүлэгчээр сурч төгссөн. Суралцах хугацаандаа өөрийн Profile page React ашиглан хийсэн. Би өмнө нягтлан бодогчоор 2 жил ажилласан. Би  IT салбарт сонирхолтой, дуртай учраас программичлалын хэл сураад, программистаар ажиллахаар шийдсэн. Би төслийн ажил хийж байх хугацаандаа вэб хийхэд эхлээд дизайнаа зөв шинэлэг, оновчтой тодорхойлох хэрэгтэй. Мөн эхлээд судалгаа, шинжилгээ, дата сайн цуглуулаад PRD, ERD зөв оновчтой, сайн гаргах чухал гэдгийг  суралцаж мэдсэн.  </p>
          <div className={styles.BoxContent}>
            <div className={styles.box}>
              <p><span> Age: </span> 26</p>
              <p><span> Phone : </span> +976 86300551</p>
            </div>
            <div className={styles.box}>
              <p><span> Email : </span>enkhtuwshin.1201@gmail.com</p>
              <p><span> Place : </span> Сүхбаатар дүүрэг 11 хороо 7 хороолол 512-24</p>
            </div>
        </div>
          

          <Button>Resume <AiOutlineRight/> </Button>

        </div>

      </div>
    </div>
  );
};

export default About;
