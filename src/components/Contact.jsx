import React from 'react';
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <h1 className='projectHeaderText'>Contact Me</h1>
      <p className='projectHeaderInfo'>It would be a honor for me to answer your questions!</p>
      <hr className='divider' style={{width: '30%'}} />
      <form className='form-container'>
        <input type="text" name="name" id="name" placeholder='Name' className='form-group' />
        <input type="email" name="email" id="email" placeholder='Email' className='form-group' />
        <textarea name="message" id="message" placeholder='Your message' className='form-group form-group-textarea'></textarea>
        <button type="submit" className='form-btn'>Send Message</button>
      </form>
      <hr className='divider' />
      <h2 className='socialContactHeading'>I am social</h2>
      <div className="socialContactIcons">
        <FaLinkedin className='socialContactIcon' />
        <FaInstagram className='socialContactIcon' />
        <FaGithub className='socialContactIcon' />
      </div>
    </div>
  )
}

export default Contact