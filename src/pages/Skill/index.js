import React, { Component } from "react";
import { Container } from "react-bootstrap";
// import {HiComputerDesktop} from "react-icons/hi"
import { RiComputerLine } from "react-icons/ri";
import { Typewriter } from "react-simple-typewriter";
import styles from "./style.module.scss";

const data = [
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    title: "ReactJs",
  },
  {
    icon: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
    title: "ExpressJs",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
    title: "NodeJS",
  },
  { icon: "https://mui.com/static/logo.png", title: "MaterialUI" },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    title: "TailwindCSS",
  },
  {
    icon: "https://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png",
    title: "Bootstrap",
  },
  {
    icon: "https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png",
    title: "Sass",
  },
  {
    icon: "https://icon-library.com/images/html5-icon/html5-icon-13.jpg",
    title: "HTML5",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
    title: "CSS3",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    title: "JavaScript",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUpKSDB8qTc0YA4lh11c7gTBctzInoV4HG9DwS5uQK6NyIpwZAQY5ublFd1r4_wzJUBQ&usqp=CAU",
    title: "MongoDB",
  },
  {
    icon: "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png",
    title: "MySQL",
  },
  {
    icon: "https://gorzelinski.com/static/1db41e3ecd311724a15306b270d99dd9/6e87d/next-js-logo.png",
    title: "Next js",
  },
  {
    icon: "https://nestjs.com/img/nest-og.png",
    title: "Nest js",
  },
  {
    icon: "https://toppng.com/uploads/preview/github-logo-transparent-11659780111lim6tyk2io.png",
    title: "GitHub",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/2048px-WordPress_blue_logo.svg.png",
    title: "WordPress",
  },
];

export default class index extends Component {
  render() {
    return (
      <div className={styles.Container} id="Skills">
        <div>
          <h1>
            <RiComputerLine /> Skills &{" "}
            <span style={{ color: "#F4D03F " }}>
              <Typewriter words={["Abilities"]} loop={false} />
            </span>
          </h1>
        </div>
        <Container>
          <div className="row">
            {data.map((x) => (
              <div className={styles.Col}>
                <img src={x.icon} style={{ width: "80px", height: "80px" }} />
                <h3>{x.title}</h3>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}
