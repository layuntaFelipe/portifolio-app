import React from 'react';
import heroIMG from '../assets/felipeHeroPhoto.svg';
import { Link } from 'react-scroll';
import pdfCV from "../assets/pdf/Felipe's CV.pdf";

const Hero = () => {
  let title = "I'm Felipe, Junior Full Stack Developer";
  let paragraph = "A passionate Full Stack Developer with 2+ years of programming experience (Mobile Development + Web Development). As a Full Stack Web Developer, I bring to the table experience of building a real-world application using ReactJS, Javascript, NodeJS, Express, Firebase, MongoDB, and other cool and fun libraries that makes me ready to help in any way possible with the technologies I already know and with those that I don't know yet.";
  let mission = "To learn and work as much as I can to become an icon in software engineering.";


  return (
    <div className='heroContainer' id='hero'>
      <img src={heroIMG} className="heroImage" alt="" />
      <div className="heroInfo">
        <h1>{
            [...title].map((letter, index) => {
              return <span key={index} className='letters'>{letter}</span>
            })
          }</h1>
        <p>{
            [...paragraph].map((letter, index) => {
              return <span key={index} className='letters'>{letter}</span>
            })
          }</p>
        <h3 className='missionTitle'>Personal Mission Statement: </h3>
        <h3 className='mission'>{
          [...mission].map((letter, index) => {
            return <span key={index} className='letters'>{letter}</span>
          })
        }</h3>
        <Link to='contact' spy={true} smooth={true} offset={-700} duration={500}><span className='goToContact'>Lets Talk</span></Link>
        <a href={pdfCV} className='downloadCV' download="Felipe_Web_Dev_CV">Download CV</a>
      </div>
    </div>
  )
}

export default Hero