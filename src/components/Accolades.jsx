import React, {useRef, useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import {accolatesData} from '../accolatesData';

const Accolades = () => {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div style={{marginBottom: '10rem'}}>
      <h2 style={{color: 'gainsboro', textAlign: 'center', fontSize: '3rem', paddingBottom: '3.5rem'}}>Reviews / Accolates</h2>

      <motion.div ref={carousel} className='carousel'>
        <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className='inner-carousel'>
          {accolatesData.map((accolate, index) => (
            <motion.div className='carousel-item'>
              <div key={index} className='accolateItem'>
                <img src={accolate.image} alt="" />
                <h4>{accolate.name}</h4>
                <p>{accolate.description}</p>
                <div style={{color: '#0f0', marginTop: '1rem'}}>
                  {accolate.starsNum.map((star) => (
                    star
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Accolades