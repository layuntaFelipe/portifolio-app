import React from 'react';
import chefsWebImage from '../assets/chefsEyeWebImage.png';
import cryptoWeb from '../assets/cryptoWeb.png';
import houseMarketWeb from '../assets/houseMarketWeb.png';
import appleSupportDesk from '../assets/appleSupportDesk.png';
import chefsEyeSoftware from '../assets/chefsEyeSoftware.png';
import {FaGithub, FaLink, FaCss3Alt, FaHtml5, FaGit, FaReact, FaNodeJs} from 'react-icons/fa';
import {SiJavascript, SiFirebase, SiExpress, SiMongodb} from 'react-icons/si'

const Projects = () => {
  return (
    <div className='heroContainer' id='projects'>
      <h1 className='projectHeaderText'>Projects</h1>
      <p className='projectHeaderInfo'>The following web projects are some of my projects that can show how much I evolved, how much I understand about each technology, and at last, how much I can bring to a team of developers alongside me.</p>


      <div className="right-image-projects">
        <img className='projectImage' src={chefsWebImage} alt="" />
        <div className="projectSingleContainer">
          <div className="projectHeader">
            <div className="projectTitle">
              Chef's Eye Website
            </div>
            <div className="projectLinkDiv">
              <a href="https://github.com/layuntaFelipe/ChefsEye-Software" rel='noreferrer' target='_blank' style={{color: 'white'}}><FaGithub className='pojectLinkIcons'/></a>
              <a href="http://sws.lethbridgecollege.ca/~s0533907/restaurant/" rel='noreferrer' target='_blank' style={{color: 'white'}}><FaLink className='pojectLinkIcons' /></a>
            </div>
          </div>
          <div className="projectInfo">
            <p>Chef's Eye Website was one of my first big projects working as a Web Developer. Although it is not a complex website due to be only the frontend part of it. It shows a good amount of HTML, CSS, and eventhough it doenst't have a lot of javascript, it has enough for make the frontend of the app look appealing for a customer.</p>
            <div className="skillsUsed">
              <FaCss3Alt className='projectIconUsed' color='#379AD6' />
              <FaHtml5 className='projectIconUsed' color='#E44D26' />
              <SiJavascript className='projectIconUsed' color='#F7E017'/>
              <FaGit className='projectIconUsed' color='#F05133' />
            </div>
            <a className='projectMoreInfo' href="">Dive in for more</a>
          </div>
        </div>
      </div>

      <div className="left-image-projects">
        <img className='projectImage' src={cryptoWeb} alt="" />
        <div className="projectSingleContainer">
          <div className="projectHeader">
            <div className="projectLinkDiv">
              <a href="https://github.com/layuntaFelipe/crypto-nummum" rel='noreferrer' target='_blank' style={{color: 'white'}}><FaGithub className='pojectLinkIcons'/></a>
              <a href="https://crypto-nummum.vercel.app/" rel='noreferrer' target='_blank' style={{color: 'white'}}><FaLink className='pojectLinkIcons' /></a>
            </div>
            <div className="projectTitle">
              Crypto Nummum
            </div>
          </div>
          <div className="projectInfo">
            <p>Crypto Nummum is a .</p>
            <div className="skillsUsed">
              <FaCss3Alt className='projectIconUsed' color='#379AD6' />
              <FaHtml5 className='projectIconUsed' color='#E44D26' />
              <SiJavascript className='projectIconUsed' color='#F7E017'/>
              <FaReact className='projectIconUsed' color='#60DBFB' />
              <FaGit className='projectIconUsed' color='#F05133' />
            </div>
            <a className='projectMoreInfo' href="">Dive in for more</a>
          </div>
        </div>
      </div>

      <div className="right-image-projects">
        <img className='projectImage' src={houseMarketWeb} alt="" />
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat sed architecto sint at doloremque aperiam necessitatibus delectus hic consectetur asperiores, doloribus sit accusantium! Distinctio dolorum deleniti fuga ex. Repudiandae.</p>
            <div className="skillsUsed">
              <FaCss3Alt className='projectIconUsed' color='#379AD6' />
              <FaHtml5 className='projectIconUsed' color='#E44D26' />
              <SiJavascript className='projectIconUsed' color='#F7E017'/>
              <FaReact className='projectIconUsed' color='#60DBFB' />
              <SiFirebase className='projectIconUsed' color='#FFCB2D' />
              <FaGit className='projectIconUsed' color='#F05133' />
            </div>
            <a className='projectMoreInfo' href="">Dive in for more</a>
          </div>
        </div>
      </div>

      <div className="left-image-projects">
        <img className='projectImage' src={appleSupportDesk} alt="" />
        <div className="projectSingleContainer">
          <div className="projectHeader">
            <div className="projectLinkDiv">
              <a href="https://github.com/layuntaFelipe/support-desk" rel='noreferrer' target='_blank' style={{color: 'white'}}><FaGithub className='pojectLinkIcons'/></a>
              <FaLink className='pojectLinkIcons'/>
            </div>
            <div className="projectTitle">
              Apple Tech Support
            </div>
          </div>
          <div className="projectInfo">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat sed architecto sint at doloremque aperiam necessitatibus delectus hic consectetur asperiores, doloribus sit accusantium! Distinctio dolorum deleniti fuga ex. Repudiandae.</p>
            <div className="skillsUsed">
              <FaCss3Alt className='projectIconUsed' color='#379AD6' />
              <FaHtml5 className='projectIconUsed' color='#E44D26' />
              <SiJavascript className='projectIconUsed' color='#F7E017'/>
              <FaReact className='projectIconUsed' color='#60DBFB' />
              <FaNodeJs className='projectIconUsed' color='#90C53F' />
              <SiMongodb className='projectIconUsed' color='#51AB4C' />
              <SiExpress className='projectIconUsed' color='#009F38' />
              <FaGit className='projectIconUsed' color='#F05133' />
            </div>
            <a className='projectMoreInfo' href="">Dive in for more</a>
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
          <div className="projectInfo">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat sed architecto sint at doloremque aperiam necessitatibus delectus hic consectetur asperiores, doloribus sit accusantium! Distinctio dolorum deleniti fuga ex. Repudiandae.</p>
            <div className="skillsUsed">
              <FaCss3Alt className='projectIconUsed' color='#379AD6' />
              <FaHtml5 className='projectIconUsed' color='#E44D26' />
              <SiJavascript className='projectIconUsed' color='#F7E017'/>
              <FaReact className='projectIconUsed' color='#60DBFB' />
              <FaNodeJs className='projectIconUsed' color='#90C53F' />
              <SiMongodb className='projectIconUsed' color='#51AB4C' />
              <SiExpress className='projectIconUsed' color='#009F38' />
              <FaGit className='projectIconUsed' color='#F05133' />
            </div>
            <a className='projectMoreInfo' href="">Dive in for more</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects