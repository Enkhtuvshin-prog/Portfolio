import React from 'react';
import { Container } from 'react-bootstrap';
import {HiOutlineDesktopComputer } from 'react-icons/hi';
import { Typewriter } from 'react-simple-typewriter';
import styles from "./style.module.scss"
 const data =[
    { title:"React-Projects", image: "./img/reactprojects.png"},
    { title:"Resister-Color", image: "./img/resistercolor.PNG"},
    { title:"ResumeGen", image: "./img/resumegen.png"},
    { title:"Saas", image: "./img/saas.PNG"},
    { title:"Sppuprepandroid", image: "./img/sppuprepandroid.png"},
    { title:"Templeweb", image: "./img/templeweb.PNG"},
    {title:"Tsfbank", image: "./img/tsfbank.png"},
    {title:"Weatherly Android", image: "./img/weatherlyandroid.png"},
    {title:"Webchat", image: "./img/webchat.PNG"},
    {title:"Webuiclones", image: "./img/webuiclones.png"},
    {title:"Web view app", image: "./img/webviewapp.PNG"},
];

const Card=(props) =>{
    return (
        <div className={styles.Col}>
            <img src={props.img} style={{width:"100%", height:"300px"}} />
            <h2>{props.title}</h2>
        </div>
    )
}

const index = () => {
  return (
    <div className={styles.Container}>
        <div>
            <h1>
                <HiOutlineDesktopComputer/>{" "}
                Project {" "}
                <span style={{color: "#D35400 "}}>
                    <Typewriter words={["Made"]}/>
                </span>
            </h1>
        </div>
        <Container>
        <div className='row'>
         {
            data.map((x) => <Card img={x.image} title = {x.title}/>)
        }

        </div>
        </Container>
    </div>
  )
}

export default index