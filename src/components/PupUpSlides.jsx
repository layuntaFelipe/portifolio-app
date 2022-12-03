import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import chefsWebImage from '../assets/chefsEyeWebImage.png';

const PupUpSlides = () => {
  return (
    <Popup trigger={<img className='projectImage' src={chefsWebImage} alt="" />} position="top left">
      {close => (
        <div>
          Content here
          <a className="close" onClick={close}>
            &times;
          </a>
        </div>
      )}
    </Popup>
  )
}

export default PupUpSlides