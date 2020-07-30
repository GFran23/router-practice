import React from 'react';
import "./About.css";
import Pic from '../../Assets/IMG_1965.JPG';
import AboutJumbotron from './AboutJumbotron';


function About(){
    return(
        <>
        <AboutJumbotron/>
        <img src={Pic} className="Geo-pic" alt="Geo" height='400px' />
        <p id="aboutMe">
          About Me!
        </p>
       
					{/* <a href="#aboutme"><span>About </span>me</a> */}
					
				
        </>
    )
}
export default About;