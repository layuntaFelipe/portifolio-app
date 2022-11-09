import React from 'react';
import heroIMG from '../assets/felipeHeroPhoto.svg';
import { Link } from 'react-scroll';
import pdfCV from '../assets/pdf/Resume-Felipe-Final (2).pdf';

const Hero = () => {
  return (
    <div className='heroContainer' id='hero'>
      <img src={heroIMG} className="heroImage" alt="" />
      <div className="heroInfo">
        <h1>Hi! I'm <span className='letters'>F</span><span className='letters'>e</span><span className='letters'>l</span><span className='letters'>i</span><span className='letters'>p</span><span className='letters'>e</span>, Junior Full Stack Developer</h1>
        <p>A passionate Full Stack Developer with 2+ years of programming experience (Mobile Development + Web Development). As a Full Stack Web Developer, I bring to the table experience of building a real-world application using ReactJS, Javascript, NodeJS, Express, Firebase, MongoDB, and other cool and fun libraries that makes me ready to help in any way possible with the technologies I already know and with those that I don't know yet.</p>
        <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}><span className='goToContact'>Lets Talk</span></Link>
        <a href={pdfCV} className='downloadCV' download="Felipe_Web_Dev_CV">Download CV</a>
      </div>
    </div>
  )
}

export default Hero