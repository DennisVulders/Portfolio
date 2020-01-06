import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './adjust.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faArchive } from '@fortawesome/free-solid-svg-icons';

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

const kleurSchool = '#2196f3';
const kleurProjecten = '#e91e63';
const kleurWerk = '#9C27B0';

const info = [
    // template
    // {
    //     onderwerp: '',
    //     locatie: '',
    //     informatie: '',
    //     datum: '',
    //     categorie: 
    // },
    {
        onderwerp: 'Havo',
        locatie: 'Dr-Knippenbergcollege',
        informatie: 'Student',
        datum: '2011 - 2017',
        categorie: 'school',
        kleur: kleurSchool,
        iconn: faGraduationCap
    },
    {
        onderwerp: 'HBO ICT & Media design',
        locatie: 'Fontys hogescholen',
        informatie: 'Mijn opleiding',
        datum: 'Maand 2017 - Nu',
        categorie: 'school',
        kleur: kleurSchool,
        iconn: faGraduationCap
    },
    {
        onderwerp: 'Cardiff Certificaat',
        locatie: 'Cardiff/Fontys hogescholen',
        informatie: 'Uitwisselings programma naar Cardiff, Wales',
        datum: 'Maand 2017',
        categorie: 'school',
        kleur: kleurSchool,
        iconn: faGraduationCap
    },
    {
        onderwerp: 'Tim Koehoorn',
        locatie: 'Fontys hogescholen',
        informatie: 'Branding gemaakt voor Tim Koehoorn',
        datum: 'Maand 2018 - Maand 2018',
        categorie: 'projecten',
        kleur: kleurProjecten,
        iconn: faArchive
    },
    {
        onderwerp: 'Night of the Nerds',
        locatie: 'Fontys hogescholen',
        informatie: "Project voor het tentoonstellen van video's van Veejays.com en de animatie opleiding van het Sint Lucas Eindhoven op een interactieve manier",
        datum: 'Maand 2018 - Maand 2019',
        categorie: 'projecten',
        kleur: kleurProjecten,
        iconn: faArchive
    },
    {
        onderwerp: 'Picoo',
        locatie: 'Fontys hogescholen',
        informatie: 'Een uitgebreide brandguide maken voor het bedrijf Picoo',
        datum: 'Maand 2019 - Maand 2020',
        categorie: 'projecten',
        kleur: kleurProjecten,
        iconn: faArchive
    },
    {
        onderwerp: 'Stage',
        locatie: 'Stage bedrijf',
        informatie: 'Stage opdracht',
        datum: 'Maand 2020 - Maand 2020',
        categorie: 'werk',
        kleur: kleurWerk,
        iconn: faBriefcase
    }

];


// var subject = info.filter(function(selected) {
//     return selected.categorie;
        
// })


class VerticalProgBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFilter: "",
            filterdData: info
        }
    }

    change(category) {
        console.log(category)
        let filterdData = info.filter(function (selected) {
            return selected.categorie === category;
        });
        this.setState({
            state: {
                currentFilter: category,
                filterdData: filterdData
            }
        });

    }

    render() {

        // functies met buttons werken maar de map word niet ge-update
        console.log("test")
        return (
            // Hier gaat het mis
            <React.Fragment>
                <div className="filter-buttons-container" data-aos="zoom-in" id="tijdlijn">
                    <button className="filter-button" type='button' onClick={() => this.change('school')} >School</button> 
                    <button className="filter-button" type='button' onClick={() => this.change('projecten')} >Projecten</button>
                    <button className="filter-button" type='button' onClick={() => this.change('werk')} >Werk</button>
                    <button className="filter-button" type='button' onClick={() => this.change('')} >Alles</button>
                </div>

                <VerticalTimeline>

                    {this.state.filterdData.map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#FFD800', color: '#222222' }}
                            VerticalTimeline={{ color: '#222' }}
                            // contentArrowStyle={{ borderRight: '7px solid  #FFD800' }}
                            date={item.datum}
                            iconStyle={{ background: item.kleur, color: '#fff' }}
                            icon={<FontAwesomeIcon icon={item.iconn} />}
                        >

                            <h3 className="vertical-timeline-element-title">{item.onderwerp}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.locatie}</h4>
                            <p>{item.informatie}</p>

                        </VerticalTimelineElement>

                    ))}

                </VerticalTimeline>

            </React.Fragment>
            
        )
        }
      
    
}   
export default VerticalProgBar;