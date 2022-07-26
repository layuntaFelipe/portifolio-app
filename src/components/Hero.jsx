import React from 'react';
import heroIMG from '../assets/felipeHeroPhoto.svg';
import heroName from '../assets/felipeName.svg';
import {FaArrowRight} from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='heroContainer'>
      <img src={heroIMG} className="heroImage" alt="" />
      <div className="heroInfo">
        <h6>Welcome to my Portifolio</h6>
        <h1>Hi! I'm Felipe, Full Stack Developer</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas autem saepe ad asperiores, voluptatem nemo? Amet quis odit dolores quisquam veritatis aspernatur! Necessitatibus voluptatibus error dolorum qui obcaecati sequi sed.</p>
        <a href="/">Let's Talk</a>
      </div>
    </div>
  )
}

export default Hero