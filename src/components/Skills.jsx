import React from 'react';
import {FaCss3Alt, FaHtml5, FaReact, FaSwift, FaGit, FaGithub, FaNodeJs, FaAssistiveListeningSystems} from 'react-icons/fa';
import {SiJavascript, SiExpress, SiFirebase, SiMongodb, SiMysql, SiMinds} from 'react-icons/si';
import {RiTeamFill} from 'react-icons/ri';
import {GiWalkieTalkie} from 'react-icons/gi'
import {GoTools} from 'react-icons/go';

const Skills = () => {
  return (
    <div className='skillsContainer' id='skills'>
      <h1>Technical Skills</h1>
      <p className='projectHeaderInfo'>Along the 3 years of programming I can say that I have the following technical skills of understanding the these frameworks and programming languages.</p>
      <div className="flex-container">
        <div className="skillsIconContainer">
          <FaCss3Alt className='icons-skills' color='#379AD6' />
          <h5>CSS</h5>
        </div>
        <div className="skillsIconContainer">
          <FaHtml5 className='icons-skills' color='#E44D26' />
          <h5>HTML</h5>
        </div><div className="skillsIconContainer">
          <SiJavascript className='icons-skills' color='#F7E017' />
          <h5>Javascript</h5>
        </div><div className="skillsIconContainer">
          <FaSwift className='icons-skills' color='#F05237' />
          <h5>Swift</h5>
        </div><div className="skillsIconContainer">
          <FaReact className='icons-skills' color='#60DBFB' />
          <h5>ReactJS</h5>
        </div><div className="skillsIconContainer">
          <FaNodeJs className='icons-skills' color='#90C53F' />
          <h5>NodeJS</h5>
        </div><div className="skillsIconContainer">
          <SiExpress className='icons-skills' color='#009F38' />
          <h5>ExpressJS</h5>
        </div><div className="skillsIconContainer">
          <SiFirebase className='icons-skills' color='#FFCB2D' />
          <h5>Firebase</h5>
        </div><div className="skillsIconContainer">
          <SiMongodb className='icons-skills' color='#51AB4C' />
          <h5>MongoDB</h5>
        </div>
        <div className="skillsIconContainer">
          <SiMysql className='icons-skills' color='#026190' />
          <h5>MySQL</h5>
        </div>
        <div className="skillsIconContainer">
          <FaGit className='icons-skills' color='#F05133' />
          <h5>GIT</h5>
        </div>
        <div className="skillsIconContainer">
          <FaGithub className='icons-skills' color='#ffffff' />
          <h5>GitHub</h5>
        </div>
      </div>
      <hr />
      <h1>Soft Skills</h1>
      <p className='projectHeaderInfo'>Also in these 3 years of programming I have aquired the following soft skills by working alongside other programmers.</p>
      <div className="flex-container">
        <div className="skillsIconContainer" style={{width: '7rem'}}>
          <GoTools className='icons-skills' color='#0f0' />
          <h5>Problem Solving</h5>
        </div>
        <div className="skillsIconContainer" style={{width: '7rem'}}>
          <RiTeamFill className='icons-skills' color='#0f0' />
          <h5>Teamwork</h5>
        </div>
        <div className="skillsIconContainer" style={{width: '7rem'}}>
          <SiMinds className='icons-skills' color='#0f0' />
          <h5>Growth Mindset</h5>
        </div>
        <div className="skillsIconContainer" style={{width: '7rem'}}>
          <FaAssistiveListeningSystems className='icons-skills' color='#0f0' />
          <h5>Active Listening</h5>
        </div>
        <div className="skillsIconContainer" style={{width: '8rem'}}>
          <GiWalkieTalkie className='icons-skills' color='#0f0' />
          <h5>Communication Skills</h5>
        </div>
      </div>
    </div>
  )
}

export default Skills