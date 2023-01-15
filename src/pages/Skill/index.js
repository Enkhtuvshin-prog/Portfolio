import React, { Component } from "react";
import { Container } from "react-bootstrap";
// import {HiComputerDesktop} from "react-icons/hi"
import { RiComputerLine } from 'react-icons/ri';
import { Typewriter } from "react-simple-typewriter";
import styles from "./style.module.scss"

const data = [
  { icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png", title: "ReactJs" },
  { icon: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png", title: "ExpressJs" },
  { icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png", title: "NodeJS" },
  { icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png", title: "Redux" },
  { icon: "https://miro.medium.com/max/300/1*R4c8lHBHuH5qyqOtZb3h-w.png", title: "Firebase" },
  { icon: "https://www.computerhope.com/jargon/a/android.png", title: "Android" },
  { icon: "https://mui.com/static/logo.png", title: "MaterialUI" },
  {icon:"https://www.happylifecreators.com/wp/wp-content/uploads/2022/06/chakra-ui_title2-400x400.png", title:"ChakraUI"},
  {icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png", title:"TailwindCSS"},
  {icon:"https://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png", title:"Bootstrap"},
  {icon:"https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png", title:"Sass"},
  {icon:"https://icon-library.com/images/html5-icon/html5-icon-13.jpg", title:"HTML5"},
  {icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png", title:"CSS3"},
  {icon:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", title:"JavaScript"},
  {icon:"https://cdn-icons-png.flaticon.com/512/226/226777.png", title:"Java"},
  {icon:"https://logo-download.com/wp-content/data/images/png/Kotlin-logo.png", title:"Kotlin"},
  {icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ekXaWKwtpKfdGgrE3n1r6AcpXOB2vw_Em-sj34prDwVPQFrTjv10lXjpVdaMc7MZkQk&usqp=CAU", title:"PHP"},
  {icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png", title:"Python"},
  {icon:"https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png", title:"C++"},
  {icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUpKSDB8qTc0YA4lh11c7gTBctzInoV4HG9DwS5uQK6NyIpwZAQY5ublFd1r4_wzJUBQ&usqp=CAU", title:"MongoDB"},
  {icon:"https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png", title:"MySQL"},
  {icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png", title:"PostgreSQL"},
  {icon:"https://www.jdrf.org/wp-content/uploads/2020/12/AWS-logo-2.jpg", title:"AWS"},
  {icon:"https://seeklogo.com/images/H/heroku-logo-90FDE34A7D-seeklogo.com.png", title:"Heroku"},
  {icon:"https://www.indiemakers.tools/media/images/netlify.jpg", title:"Netlify"},
  {icon:"https://companieslogo.com/img/orig/DOCN-6eec72eb.png?t=1660638083", title:"DigitalOcean"},
  {icon:"https://w7.pngwing.com/pngs/1004/13/png-transparent-jquery-hd-logo.png", title:"JQuery"},
  {icon:"https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png", title:"Git VCS"},
  {icon:"https://toppng.com/uploads/preview/github-logo-transparent-11659780111lim6tyk2io.png", title:"GitHub"},
  {icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/2048px-WordPress_blue_logo.svg.png", title:"WordPress"},
]

export default class index extends Component {
  render() {
    return <div className={styles.Container} id="Skills">
      <div>
        <h1>
          <RiComputerLine /> {" "}
          Skills & {" "}
          <span style={{ color: "#F4D03F " }}>
            <Typewriter words={["Abilities"]} loop={false} />
          </span>
        </h1>
      </div>
      <Container>
        <div className="row">{
          data.map((x) => <div className={styles.Col}>
            <img  src={x.icon} style={{ width: "80px", height: "80px" }} />
            <h3>{x.title}</h3>
          </div>)
        }
        </div>
      </Container>
    </div>;
  }
}
