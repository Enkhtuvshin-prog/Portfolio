import React from 'react';
import { Container } from 'react-bootstrap';
import styles from "./style.module.scss";
import { AiFillRightCircle } from 'react-icons/ai';
import { AiTwotonePhone, AiFillMail } from 'react-icons/ai';
import { GrMapLocation } from 'react-icons/gr';
import { SocialIcon } from "react-social-icons";


const data = [
    { title: "Home", link: "#Hero" },
    { title: "About", link: "#About" },
    { title: "Skills", link: "#Skills" },
    { title: "Projects", link: "#Projects" },
    { title: "Education", link: "#Education" },
    { title: "Contact", link: "#Contact" },
];

const index = () => {
    return (
        <div className={styles.Container}>
            <Container>
                <div className='row' >
                    <div className='col-md-4 col-sm-12'>
                        <h2>Enkhtuvshin's Portfolio</h2>
                        <p>Thank you for visiting my personal portfolio website. Connect with me over socials.
                            <br />Keep Rising 🚀. Connect with me over live chat!</p>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                        <h2>Quick Links</h2>
                        <ul>
                            {
                                data.map((x) => <li className={styles.List} ><a href={x.link} className={styles.Link} ><AiFillRightCircle /> {x.title}</a></li>)
                            }
                        </ul>

                    </div>
                    <div className='col-md-4 col-sm-12'>
                        <h2>Contact info</h2>
                        <p><AiTwotonePhone /> +91 704-302-4736</p>
                        <p><AiFillMail /> tuvshin.1222@gmail.com </p>
                        <p><GrMapLocation /> Ulaanbaatar, Mongolia </p>
                        <div className={styles.Icons}>
                            <SocialIcon network="linkedin" className='bg-white m-2'/>
                            <SocialIcon network="github"  className='bg-white m-2'/>
                            <SocialIcon network="instagram" className='bg-white m-2'/>
                            <SocialIcon network="twitter"className='bg-white m-2' />
                            <SocialIcon network="telegram" className='bg-white m-2'/>
                        </div>
                    </div>
                </div>
                <hr/>
                <h5 className='text-center'>Designed With  By D_inkhtuvshin</h5>

            </Container>

        </div>
    )
}

export default index