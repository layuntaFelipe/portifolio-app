import React from 'react';
import projectImage from '../assets/chefsEyeWebImage.png';
import {FaGithub, FaLink, FaCss3Alt, FaHtml5, FaGit, FaReact, FaNodeJs} from 'react-icons/fa';
import {SiJavascript, SiFirebase, SiExpress, SiMongodb} from 'react-icons/si'

const Projects = () => {
  return (
    <div className='heroContainer'>
      <h1 className='projectHeaderText'>Projects</h1>
      <p className='projectHeaderInfo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quis laboriosam officiis obcaecati minus harum ducimus reprehenderit animi enim alias? Quam quaerat dicta consequatur sequi.</p>


      <div className="right-image-projects">
        <img className='projectImage' src={projectImage} alt="" />
        <div className="projectSingleContainer">
          <div className="projectHeader">
            <div className="projectTitle">
              Chef's Eye Website
            </div>
            <div className="projectLinkDiv">
              <FaGithub className='pojectLinkIcons'/>
              <FaLink className='pojectLinkIcons' />
            </div>
          </div>
          <div className="projectInfo">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat sed architecto sint at doloremque aperiam necessitatibus delectus hic consectetur asperiores, doloribus sit accusantium! Distinctio dolorum deleniti fuga ex. Repudiandae.</p>
            <a className='projectMoreInfo' href="">Dive in for more</a>
            <div className="skillsUsed">
              <FaCss3Alt color='#379AD6' />
              <FaHtml5 color='#E44D26' />
              <SiJavascript color='#F7E017'/>
              <FaGit color='#F05133' />
            </div>
          </div>
        </div>
      </div>

      <div className="left-image-projects">
        <img className='projectImage' src={projectImage} alt="" />
        <div className="projectSingleContainer">
          <div className="projectHeader">
            <div className="projectLinkDiv">
              <FaGithub className='pojectLinkIcons'/>
              <FaLink className='pojectLinkIcons'/>
            </div>
            <div className="projectTitle">
              API Project
            </div>
          </div>
          <div className="projectInfo">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat sed architecto sint at doloremque aperiam necessitatibus delectus hic consectetur asperiores, doloribus sit accusantium! Distinctio dolorum deleniti fuga ex. Repudiandae.</p>
            <div className="skillsUsed">
              <FaCss3Alt color='#379AD6' />
              <FaHtml5 color='#E44D26' />
              <SiJavascript color='#F7E017'/>
              <FaReact color='#60DBFB' />
              <FaGit color='#F05133' />
            </div>
            <a className='projectMoreInfo' href="">Dive in for more</a>
          </div>
        </div>
      </div>

      <div className="right-image-projects">
        <img className='projectImage' src={projectImage} alt="" />
        <div className="projectSingleContainer">
          <div className="projectHeader">
            <div className="projectTitle">
              House Market Web
            </div>
            <div className="projectLinkDiv">
              <FaGithub className='pojectLinkIcons'/>
              <FaLink className='pojectLinkIcons' />
            </div>
          </div>
          <div className="projectInfo">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat sed architecto sint at doloremque aperiam necessitatibus delectus hic consectetur asperiores, doloribus sit accusantium! Distinctio dolorum deleniti fuga ex. Repudiandae.</p>
            <a className='projectMoreInfo' href="">Dive in for more</a>
            <div className="skillsUsed">
              <FaCss3Alt color='#379AD6' />
              <FaHtml5 color='#E44D26' />
              <SiJavascript color='#F7E017'/>
              <FaReact color='#60DBFB' />
              <SiFirebase color='#FFCB2D' />
              <FaGit color='#F05133' />
            </div>
          </div>
        </div>
      </div>

      <div className="left-image-projects">
        <img className='projectImage' src={projectImage} alt="" />
        <div className="projectSingleContainer">
          <div className="projectHeader">
            <div className="projectLinkDiv">
              <FaGithub className='pojectLinkIcons'/>
              <FaLink className='pojectLinkIcons'/>
            </div>
            <div className="projectTitle">
              Pear Tech Support
            </div>
          </div>
          <div className="projectInfo">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat sed architecto sint at doloremque aperiam necessitatibus delectus hic consectetur asperiores, doloribus sit accusantium! Distinctio dolorum deleniti fuga ex. Repudiandae.</p>
            <div className="skillsUsed">
              <FaCss3Alt color='#379AD6' />
              <FaHtml5 color='#E44D26' />
              <SiJavascript color='#F7E017'/>
              <FaReact color='#60DBFB' />
              <FaNodeJs color='#90C53F' />
              <SiMongodb color='#51AB4C' />
              <SiExpress color='#009F38' />
              <FaGit color='#F05133' />
            </div>
            <a className='projectMoreInfo' href="">Dive in for more</a>
          </div>
        </div>
      </div>

      <div className="right-image-projects">
        <img className='projectImage' src={projectImage} alt="" />
        <div className="projectSingleContainer">
          <div className="projectHeader">
            <div className="projectTitle">
              Chef's Eye Software
            </div>
            <div className="projectLinkDiv">
              <FaGithub className='pojectLinkIcons'/>
              <FaLink className='pojectLinkIcons' />
            </div>
          </div>
          <div className="projectInfo">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat sed architecto sint at doloremque aperiam necessitatibus delectus hic consectetur asperiores, doloribus sit accusantium! Distinctio dolorum deleniti fuga ex. Repudiandae.</p>
            <a className='projectMoreInfo' href="">Dive in for more</a>
            <div className="skillsUsed">
              <FaCss3Alt color='#379AD6' />
              <FaHtml5 color='#E44D26' />
              <SiJavascript color='#F7E017'/>
              <FaReact color='#60DBFB' />
              <FaNodeJs color='#90C53F' />
              <SiMongodb color='#51AB4C' />
              <SiExpress color='#009F38' />
              <FaGit color='#F05133' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects