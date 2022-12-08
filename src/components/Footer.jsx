import React from 'react';
import {Link} from 'react-scroll';
import felipeName from '../assets/felipeName.svg';

const Footer = () => {
  return (
    <div style={{backgroundColor: '#222', paddingInline: '0.7rem', paddingBottom: '7rem', marginTop: '6rem'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
        <img src={felipeName} alt="" style={{width: '6rem'}} />
        <span style={{color: 'aliceblue', fontSize: '1rem'}}>&copy; FelipeLaYuntaDev. All rights reserved.</span>
        <div className='footerLinks-full' style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <Link className='footerLinks' to='hero' spy={true} smooth={true} offset={-100} duration={500}>
            Home
          </Link>
          <Link className='footerLinks' to='skills' spy={true} smooth={true} offset={400} duration={500}>
            Skills
          </Link>
          <Link className='footerLinks' to='projects' spy={true} smooth={true} offset={250} duration={500}>
            Projects
          </Link>
        </div>
      </div>
      <div className='footerLinks-mobile' style={{display: 'flex', alignItems: 'center'}}>
        <Link className='footerLinks' to='hero' spy={true} smooth={true} offset={-100} duration={500}>
          Home
        </Link>
        <Link className='footerLinks' to='skills' spy={true} smooth={true} offset={600} duration={500}>
          Skills
        </Link>
        <Link className='footerLinks' to='projects' spy={true} smooth={true} offset={450} duration={500}>
          Projects
        </Link>
      </div>
    </div>
  )
}

export default Footer