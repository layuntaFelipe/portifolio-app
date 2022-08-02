import React from 'react';
import heroIMG from '../assets/felipeHeroPhoto.svg';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='heroContainer' id='hero'>
      <img src={heroIMG} className="heroImage" alt="" />
      <div className="heroInfo">
        <h6>Welcome to my Portifolio</h6>
        <h1>Hi! I'm <span className='letters'>F</span><span className='letters'>e</span><span className='letters'>l</span><span className='letters'>i</span><span className='letters'>p</span><span className='letters'>e</span>, Full Stack Developer</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas autem saepe ad asperiores, voluptatem nemo? Amet quis odit dolores quisquam veritatis aspernatur! Necessitatibus voluptatibus error dolorum qui obcaecati sequi sed.</p>
        <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}><span className='goToContact'>Lets Talk</span></Link>
      </div>
    </div>
  )
}

export default Hero