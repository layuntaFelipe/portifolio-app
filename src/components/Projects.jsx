import React from 'react';
import chefsWebImage from '../assets/chefsEyeWebImage.png';
import cryptoWeb from '../assets/cryptoWeb.png';
import houseMarketWeb from '../assets/houseMarketWeb.png';
import appleSupportDesk from '../assets/appleSupportDesk.png';
import chefsEyeSoftware from '../assets/chefsEyeSoftware.png';
import {FaGithub, FaLink, FaCss3Alt, FaHtml5, FaGit, FaReact, FaNodeJs} from 'react-icons/fa';
import {SiJavascript, SiFirebase, SiExpress, SiMongodb, SiRedux} from 'react-icons/si'

const Projects = () => {
  return (
    <div className='heroContainer' id='projects'>
      <h1 className='projectHeaderText'>Projects</h1>
      <p className='projectHeaderInfo'>The following web projects are some of my projects that can show how much I evolved, how much I understand about each technology, and at last, how much I can bring to a team of developers alongside me.</p>


      <div className="right-image-projects">
        <a href="http://sws.lethbridgecollege.ca/~s0533907/restaurant/" rel='noreferrer' target='_blank'>
          <img className='projectImage' src={chefsWebImage} alt="" />
        </a>
        <div className="projectSingleContainer">
          <div className="projectHeader">
            <div className="projectTitle">
              Chef's Eye Website
            </div>
            <div className="projectLinkDiv">
              <a href="https://github.com/layuntaFelipe/chefsEyeWeb" rel='noreferrer' target='_blank' style={{color: 'white'}}><FaGithub className='pojectLinkIcons'/></a>
              <a href="http://sws.lethbridgecollege.ca/~s0533907/restaurant/" rel='noreferrer' target='_blank' style={{color: 'white'}}><FaLink className='pojectLinkIcons' /></a>
            </div>
          </div>
          <div className="projectInfo">
            <p>Chef's Eye Website was one of my first big projects working as a Web Developer. Although it is not a complex website due to being only the frontend part of it. It shows a good amount of HTML, and CSS, and even though it doesn't have a lot of javascript, it has enough for making the frontend of the app look appealing to a customer.</p>
            <div className="skillsUsed">
              <FaCss3Alt className='projectIconUsed' color='#379AD6' />
              <FaHtml5 className='projectIconUsed' color='#E44D26' />
              <SiJavascript className='projectIconUsed' color='#F7E017'/>
              <FaGit className='projectIconUsed' color='#F05133' />
            </div>
            <a className='moreDetailLink' rel='noreferrer' target='_blank' href="https://github.com/layuntaFelipe/chefsEyeWeb">Go to Github for more detail</a>
          </div>
        </div>
      </div>

      <div className="left-image-projects">
        <a href="https://crypto-nummum.vercel.app/" rel='noreferrer' target='_blank'>
          <img className='projectImage' src={cryptoWeb} alt="" />
        </a>
        <div className="projectSingleContainer">
          <div className="projectHeader">
            <div className="projectLinkDiv">
              <a href="https://github.com/layuntaFelipe/crypto-nummum" rel='noreferrer' target='_blank' style={{color: 'white'}}><FaGithub className='pojectLinkIcons'/></a>
              <a href="https://crypto-nummum.vercel.app/" rel='noreferrer' target='_blank' style={{color: 'white'}}><FaLink className='pojectLinkIcons' /></a>
            </div>
            <div className="projectTitle">
              Crypto Nummum API
            </div>
          </div>
          <div className="projectInfo">
            <p>Crypto Nummum is a frontend application built on react with the main goal of connecting with the COINGECKO API. This simple crypto app works with a real time api and allows users to check about individual cryptos and get more info about them.</p>
            <div className="skillsUsed">
              <FaCss3Alt className='projectIconUsed' color='#379AD6' />
              <FaHtml5 className='projectIconUsed' color='#E44D26' />
              <SiJavascript className='projectIconUsed' color='#F7E017'/>
              <FaReact className='projectIconUsed' color='#60DBFB' />
              <FaGit className='projectIconUsed' color='#F05133' />
            </div>
            <a className='moreDetailLink' rel='noreferrer' target='_blank' href="https://github.com/layuntaFelipe/crypto-nummum">Go to Github for more detail</a>
          </div>
        </div>
      </div>

      <div className="right-image-projects">
        <a href="https://house-market-app-plum.vercel.app/" rel='noreferrer' target='_blank'>
          <img className='projectImage' src={houseMarketWeb} alt="" />
        </a>
        <div className="projectSingleContainer">
          <div className="projectHeader">
            <div className="projectTitle">
              House Market Web
            </div>
            <div className="projectLinkDiv">
              <a href="https://github.com/layuntaFelipe/house-market-app" rel='noreferrer' target='_blank' style={{color: 'white'}}><FaGithub className='pojectLinkIcons'/></a>
              <a href="https://house-market-app-plum.vercel.app/" rel='noreferrer' target='_blank' style={{color: 'white'}}><FaLink className='pojectLinkIcons' /></a>
            </div>
          </div>
          <div className="projectInfo">
            <p>House Market Web is a React app mainly focused on <span style={{color:'#0f0'}}>Firebase functionality</span> and design for mobile first. House Market consists in a simple context of a customer when logged in, can check out houses for sale and rent in the database, and it can also create a house for sale and rent.</p>
            <p>This project was great for me to learn more about how to talk to an <span style={{color:'#0f0'}}>API</span>, work with <span style={{color:'#0f0'}}>Firebase Storage and Authentication</span>, <span style={{color:'#0f0'}}>Routers</span>, and <span style={{color:'#0f0'}}>Maps</span>.</p>
            <div className="skillsUsed">
              <FaCss3Alt className='projectIconUsed' color='#379AD6' />
              <FaHtml5 className='projectIconUsed' color='#E44D26' />
              <SiJavascript className='projectIconUsed' color='#F7E017'/>
              <FaReact className='projectIconUsed' color='#60DBFB' />
              <SiFirebase className='projectIconUsed' color='#FFCB2D' />
              <FaGit className='projectIconUsed' color='#F05133' />
            </div>
            <a className='moreDetailLink' rel='noreferrer' target='_blank' href="https://github.com/layuntaFelipe/house-market-app">Go to Github for more detail</a>
          </div>
        </div>
      </div>

      <div className="left-image-projects">
        <a href="https://supportdeskappleapp.herokuapp.com/" rel='noreferrer' target='_blank'>
          <img className='projectImage' src={appleSupportDesk} alt="" />
        </a>
        <div className="projectSingleContainer">
          <div className="projectHeader">
            <div className="projectLinkDiv">
              <a href="https://github.com/layuntaFelipe/support-desk" rel='noreferrer' target='_blank' style={{color: 'white'}}><FaGithub className='pojectLinkIcons'/></a>
              <a href="https://supportdeskappleapp.herokuapp.com/" rel='noreferrer' target='_blank' style={{color: 'white'}}><FaLink className='pojectLinkIcons'/></a>
            </div>
            <div className="projectTitle">
              Apple Support Desk
            </div>
          </div>
          <div className="projectInfo">
            <p>Apple Support Desk is a React app mainly <span style={{color:'#0f0'}}>focused on the backend</span> side of a project. It consists of simple actions of a customer can register and login into my MongoDB database, then it can create a ticket informing which devices are not working correctly, and describe what is the problem.</p>
            <p>The user can check out his ticket and send messages to the staff about the ticket as well, and once the problem is solved, the user can close the ticket.</p>
            <p>This project was great for me to learn more about <span style={{color:'#0f0'}}>NodeJS</span>, <span style={{color:'#0f0'}}>MongoDB</span>, <span style={{color:'#0f0'}}>Express</span>, and <span style={{color:'#0f0'}}>Redux</span>, building a <span style={{color:'#0f0'}}>backend</span>, and work with libraries I've never worked with, like <span style={{color:'#0f0'}}>BCrypt</span>, and <span style={{color:'#0f0'}}>Jsonwebtoken</span>.</p>
            <div className="skillsUsed">
              <FaCss3Alt className='projectIconUsed' color='#379AD6' />
              <FaHtml5 className='projectIconUsed' color='#E44D26' />
              <SiJavascript className='projectIconUsed' color='#F7E017'/>
              <FaReact className='projectIconUsed' color='#60DBFB' />
              <SiRedux className='projectIconUsed' color='purple' />
              <FaNodeJs className='projectIconUsed' color='#90C53F' />
              <SiMongodb className='projectIconUsed' color='#51AB4C' />
              <SiExpress className='projectIconUsed' color='#009F38' />
              <FaGit className='projectIconUsed' color='#F05133' />
            </div>
            <a className='moreDetailLink' rel='noreferrer' target='_blank' href="https://github.com/layuntaFelipe/support-desk">Go to Github for more detail</a>
          </div>
        </div>
      </div>

      <div className="right-image-projects">
        <img className='projectImage' src={chefsEyeSoftware} alt="" />
        <div className="projectSingleContainer">
          <div className="projectHeader">
            <div className="projectTitle">
              Chef's Eye Software
            </div>
            <div className="projectLinkDiv">
              <a href="https://github.com/layuntaFelipe/ChefsEye-Software" rel='noreferrer' target='_blank' style={{color: 'white'}}><FaGithub className='pojectLinkIcons'/></a>
              <FaLink className='pojectLinkIcons' />
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <div style={{fontSize: '0.9rem', backgroundColor: 'red', padding: '0.5rem 1rem', height: '1.2rem', borderRadius: '10px', color: 'white', width: '6rem', textAlign: 'center', marginTop: '-0.7rem', marginBottom: '1rem'}}>In Progress</div>
            <div style={{fontSize: '0.9rem', backgroundColor: '#0f9', padding: '0.5rem 1rem', height: '1.2rem', borderRadius: '10px', color: 'black', width: '10rem', textAlign: 'center', marginTop: '-0.7rem', marginBottom: '1rem'}}>Due by end of year</div>
          </div>
          <div className="projectInfo">
            <p>ChefsEye is the main project I'm working on right now, and also one of the most complex apps I'm building. With a complete backend, with complex database relations, and a responsive, simple, and clean frontend so the user can focus on what is important about the software with ease.</p>
            <p>ChefsEye is an internet software focused on restaurant management. It completely changes the way customers, employees, managers, and owners interact with a restaurant, making their jobs easier to be done and managed, and overall making more profit.</p>
            <div className="skillsUsed">
              <FaCss3Alt className='projectIconUsed' color='#379AD6' />
              <FaHtml5 className='projectIconUsed' color='#E44D26' />
              <SiJavascript className='projectIconUsed' color='#F7E017'/>
              <FaReact className='projectIconUsed' color='#60DBFB' />
              <SiRedux className='projectIconUsed' color='purple' />
              <FaNodeJs className='projectIconUsed' color='#90C53F' />
              <SiMongodb className='projectIconUsed' color='#51AB4C' />
              <SiExpress className='projectIconUsed' color='#009F38' />
              <FaGit className='projectIconUsed' color='#F05133' />
            </div>
            <a className='moreDetailLink' rel='noreferrer' target='_blank' href="https://github.com/layuntaFelipe/ChefsEye-Software">Go to Github for more detail</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects