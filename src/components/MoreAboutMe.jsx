import React from 'react';
import moreAboutMe1 from '../assets/moreAboutMe1.JPG';

const MoreAboutMe = () => {
  return (
    <div className='skillsContainer' style={{paddingBottom: '0'}}>
      <h1 className='projectHeaderText'>More About Me</h1>
      <p className='projectHeaderInfo' style={{paddingLeft: '2rem', paddingRight: '2rem'}}>Just in case you want to know a little more about me, other than only about programming and developer stuff, this is a glance at my life besides the programming life.</p>

      <div className="right-image-projects" style={{margin: '2rem 0 3rem 0'}}>
        <img className='projectImage' style={{width: '32rem', height: '23rem', objectFit: 'cover'}} src={moreAboutMe1} alt="" />
        <div className="projectSingleContainer">
          <div className="projectInfo" style={{paddingTop: '1.5rem', textAlign: 'left', paddingLeft: '0.5rem', paddingRight: '0.5rem'}}>
            <h4>A little more about me:</h4>
            <p>My name is Felipe, I'm originally from Goiania, Brazil, I'm 20 years old, and I currently reside in Lethbridge, Alberta, Canada. I'm studying Computer Information Technology at Lethbridge College, and I'm going to graduate in summer of 2023.</p>
            <p>Other than the love of programming, and the fact that I mainly only need a computer to work. I have two other loves in my life: Travelling, and Formula 1.</p>
            <p>Since I was a little boy I always loved those two other things, and I am grateful that the area where I work can allow me to work from anywhere, and Sundays are sacred to me because it's Formula 1 race-day ;)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreAboutMe