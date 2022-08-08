import React, {useState} from 'react';
import logo from '../assets/logo.svg';
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';
import {HiMenuAlt3} from 'react-icons/hi';
import {MdClose} from 'react-icons/md';
import {Link} from 'react-scroll';

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const openMenu = () => {
    setMobileNav((mobileNav => !mobileNav))
  }

  return (
    <>
      <div className="navbarHead">
        <div className='navbar'>
          <Link to='hero' spy={true} smooth={true} offset={-100} duration={500} style={{marginTop: '0.5rem'}}><img src={logo} alt='logo' id='logo'></img></Link>
          <div className="closeButton">
            {
              mobileNav ? (<MdClose onClick={openMenu} className='hamburger' />) : (<HiMenuAlt3 onClick={openMenu} className='hamburger' />)
            }
          </div>
          <div className="navbarItems">
            <ul className='navbarLinksPage'>
              <Link to='hero' spy={true} smooth={true} offset={-100} duration={500}><li>Home</li></Link>
              <Link to='skills' spy={true} smooth={true} offset={-40} duration={500}><li>Skills</li></Link>
              <Link to='projects' spy={true} smooth={true} offset={-30} duration={500}><li>Projects</li></Link>
            </ul>
            <div className="socialsDiv">
              <ul className='navbarSocialLinks'>
                <li><a href="https://www.linkedin.com/in/felipe-la-yunta-1109221b5/" rel='noreferrer' target='_blank' style={{color: 'rgba(255, 255, 255, 0.545)'}}><FaLinkedin className='socialIcons'/></a></li>
                <li><a href="https://github.com/layuntaFelipe" rel='noreferrer' target='_blank' style={{color: 'rgba(255, 255, 255, 0.545)'}}><FaGithub className='socialIcons'/></a></li>
                <li><a href="https://www.instagram.com/felipelly/" rel='noreferrer' target='_blank' style={{color: 'rgba(255, 255, 255, 0.545)'}}><FaInstagram className='socialIcons'/></a></li>
              </ul>
            </div>
            <Link id='contactNavBtn' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='btnPrimary'>Contact Me</button></Link>
          </div>
        </div>
      </div>

      <div className="navbar-mobile" style={{display: mobileNav ? '' : 'none'}}>
        <ul className='mobile-linkPage'>
          <Link to='hero' spy={true} smooth={true} offset={-100} duration={500}><li>Home</li></Link>
          <Link to='skills' spy={true} smooth={true} offset={-40} duration={500}><li>Skills</li></Link>
          <Link to='projects' spy={true} smooth={true} offset={-30} duration={500}><li>Projects</li></Link>
        </ul>
        <ul className='navbarSocialLinks mobileSocials'>
          <li><a href="https://www.linkedin.com/in/felipe-la-yunta-1109221b5/" rel='noreferrer' target='_blank' style={{color: 'rgba(255, 255, 255, 0.545)'}}><FaLinkedin className='socialIcons'/></a></li>
          <li><a href="https://github.com/layuntaFelipe" rel='noreferrer' target='_blank' style={{color: 'rgba(255, 255, 255, 0.545)'}}><FaGithub className='socialIcons'/></a></li>
          <li><a href="https://www.instagram.com/felipelly/" rel='noreferrer' target='_blank' style={{color: 'rgba(255, 255, 255, 0.545)'}}><FaInstagram className='socialIcons'/></a></li>
        </ul>
        <Link id='contactNavBtn' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='btnPrimary'>Contact Me</button></Link>
      </div>
    </>
  )
}

export default Navbar