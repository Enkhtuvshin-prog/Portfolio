import React from "react";
import { Container } from "react-bootstrap";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";
import styles from "./style.module.scss";
const data = [
  { title: "ZTO team- Easy template", image: "./img/zto.png", link: "https://zto.vercel.app/home" },
  { title: "Profile page", image: "./img/profile.png", link: "https://portfolio-black-eight-86.vercel.app/" },
];

const Card = (props) => {
  return (
    <div className={styles.Col}>
      <img src={props.img} style={{ width: "100%", height: "300px" }} />
      <a href={props.link} target="_blank">{props.title}</a>
    </div>
  );
};

const index = () => {
  return (
    <div className={styles.Container} id="Projects">
      <div>
        <h1>
          <HiOutlineDesktopComputer /> Project{" "}
          <span style={{ color: "#D35400 " }}>
            <Typewriter words={["Made"]} />
          </span>
        </h1>
      </div>
      <Container>
        <div className="row">
          {data.map((x) => (
            <Card img={x.image} title={x.title} link={x.link} />
          ))}
        </div>
        
      </Container>
    </div>
  );
};

export default index;
