import React, {useState} from 'react';
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const {name, email, message} = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <div id='contact'>
      <h1 className='projectHeaderText'>Contact Me</h1>
      <p className='projectHeaderInfo'>It would be an honor for me to answer your questions!</p>
      <hr className='divider' style={{width: '30%'}} />
      <form className='form-container'>
        <input type="text" name="name" id="name" placeholder='Name' className='form-group' value={name} onChange={onChange} />
        <input type="email" name="email" id="email" placeholder='Email' className='form-group' value={email} onChange={onChange} />
        <textarea name="message" id="message" placeholder='Your message' className='form-group form-group-textarea' value={message} onChange={onChange}></textarea>
      </form>
      <a href={`mailto:layuntaweb@gmail.com?Subject=${`message from: ${name}: ${email}`}&body=${message}`} style={{textDecoration: 'none'}}>
        <button className='btnPrimary form-btn'>send message</button>
      </a>
      <hr className='divider' />
      <h2 className='socialContactHeading'>I am social</h2>
      <div className="socialContactIcons">
        <a href="https://www.linkedin.com/in/felipe-la-yunta-1109221b5/" rel='noreferrer' target='_blank'><FaLinkedin className='socialContactIcon'/></a>
        <a href="https://www.instagram.com/felipelly/" rel='noreferrer' target='_blank'><FaInstagram className='socialContactIcon'/></a>
        <a href="https://github.com/layuntaFelipe" rel='noreferrer' target='_blank'><FaGithub className='socialContactIcon'/></a>
      </div>
    </div>
  )
}

export default Contact