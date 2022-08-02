import React from 'react';
import moreAboutMe1 from '../assets/moreAboutMe1.JPG';

const MoreAboutMe = () => {
  return (
    <div className='skillsContainer' style={{paddingBottom: '0'}}>
      <h1 className='projectHeaderText'>More About Me</h1>
      <p className='projectHeaderInfo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quis laboriosam officiis obcaecati minus harum ducimus reprehenderit animi enim alias? Quam quaerat dicta consequatur sequi.</p>

      <div className="right-image-projects" style={{margin: '2rem 0 3rem 0'}}>
        <img className='projectImage' style={{width: '32rem', height: '23rem', objectFit: 'cover'}} src={moreAboutMe1} alt="" />
        <div className="projectSingleContainer">
          <div className="projectInfo" style={{paddingTop: '1.5rem', textAlign: 'left'}}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat sed architecto sint at doloremque aperiam necessitatibus delectus hic consectetur asperiores, doloribus sit accusantium! Distinctio dolorum deleniti fuga ex. Repudiandae necessitatibus delectus hic consectetur asperiores, doloribus sit accusantium! Distinctio dolorum deleniti fuga ex. Repudiandaenecessitatibus delectus hic consectetur asperiores, doloribus sit accusantium!.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat sed architecto sint at doloremque aperiam necessitatibus delectus hic</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat sed architecto sint at doloremque aperiam necessitatibus delectus hic</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreAboutMe