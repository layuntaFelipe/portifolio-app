import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='projectHeaderText'>Contact Me</h1>
      <p className='projectHeaderInfo'>It would be a honor for me to answer your questions!</p>
      <hr />
      <form>
        <input type="text" name="name" id="name" placeholder='Name' />
        <input type="email" name="email" id="email" placeholder='Email' />
        <textarea name="message" id="message" placeholder='Your message'></textarea>
        <button type="submit">Send Message</button>
      </form>
      <hr />
      <h2>I am social</h2>
      
    </div>
  )
}

export default Contact