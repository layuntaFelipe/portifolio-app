import React from 'react';
import projectImage from '../assets/chefsEyeWebImage.png';
import {FaGithub, FaLink} from 'react-icons/fa';

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
          </div>
        </div>
      </div>
      <div className="left-image-projects">
        <img className='projectImage' src={projectImage} alt="" />
        <div className="projectSingleContainer">
          <div className="projectHeader">
            <div className="projectTitle">
              Chef's Eye Website
            </div>
            <div className="projectLinkDiv">
              <FaGithub className='pojectLinkIcons'/>
              <FaLink className='pojectLinkIcons'/>
            </div>
          </div>
          <div className="projectInfo">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat sed architecto sint at doloremque aperiam necessitatibus delectus hic consectetur asperiores, doloribus sit accusantium! Distinctio dolorum deleniti fuga ex. Repudiandae.</p>
            <a className='projectMoreInfo' href="">Dive in for more</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects