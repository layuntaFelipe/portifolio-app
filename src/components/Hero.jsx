import React from 'react';
import heroIMG from '../assets/felipeHeroPhoto.svg';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='heroContainer' id='hero'>
      <img src={heroIMG} className="heroImage" alt="" />
      <div className="heroInfo">
        <h1>Hi! I'm <span className='letters'>F</span><span className='letters'>e</span><span className='letters'>l</span><span className='letters'>i</span><span className='letters'>p</span><span className='letters'>e</span>, Full Stack Developer</h1>
        <p>A passionate Full Stack Developer with more than 3 years of programming expirience(Mobile Development + Web Development). As a Full Stack Web Developer I bring to the table expirence of building real-world application using ReactJS, Javascript, NodeJS, Express, Firebase, MongoDB, and other cool and fun libraries that makes our lives better and easier. </p>
        <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}><span className='goToContact'>Lets Talk</span></Link>
      </div>
    </div>
  )
}

export default Hero