import React from 'react';
import logo from '../assets/logo.svg';
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt='logo' id='logo'></img>
      <div className="navbarItems">
        <ul className='navbarLinksPage'>
          <li className='navbarItemActive'>Home</li>
          <li>Skills</li>
          <li>Projects</li>
        </ul>
        <div className="socialsDiv">
          <ul className='navbarSocialLinks'>
            <li><FaLinkedin className='socialIcons'/></li>
            <li><FaGithub className='socialIcons'/></li>
            <li><FaInstagram className='socialIcons'/></li>
          </ul>
        </div>
        <button className='btnPrimary'>Contact Me!</button>
      </div>
    </div>
  )
}

export default Navbar