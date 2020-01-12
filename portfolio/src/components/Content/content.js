import React from 'react';
import '../About/About.css';
import AOS from "aos";
import "aos/dist/aos.css";

//images
import Dennis from "../images/dennis.png";
import Logo from "../images/logo.png"

AOS.init();

const divcontent = [
    {
        titel: 'titel 1',
        inhoud: 'body 1 fejknfsdjnkdsfjnksdjnksfdjknsdf kjdgbisfgbwkfbgsdjj',
        afbeelding: Dennis
    },
    {
        titel: 'titel 2',
        inhoud: 'body 2 fejknfsdjnkdsfjnksdjnksfdjknsdf kjdgbisfgbwkfbgsdjj',
        afbeelding: Logo
    }
]

const Content = () => (
    <React.Fragment>
        {divcontent.map((e, index) =>
            <section key={index} data-aos="zoom-in" className="about-wrapper" id="content" >
                <img className="about-foto" src={e.afbeelding}  alt="logo" />
                <h1 className="about-header">{e.titel}</h1>
                <div className="about-tekst">
                    <p>{e.inhoud}</p>
                </div>
            </section>
        )}
    </React.Fragment>

);

export default Content;