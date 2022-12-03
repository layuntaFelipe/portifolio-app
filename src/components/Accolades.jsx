import React from 'react';
import {FaStar} from 'react-icons/fa';
import tim from '../assets/accolates/tim.jpeg';
import barry from '../assets/accolates/barrry.jpeg';
import stephen from '../assets/accolates/stephen.jpeg';

const Accolades = () => {
  const accolatesData = [
    {
      name:'Stephen Graham',
      image: stephen,
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt hic molestiae dolorum iste sit, inventore rem ipsa sapiente!',
      starsNum: [<FaStar style={{margin: '0 0.7rem'}}/>,<FaStar style={{margin: '0 0.7rem'}}/>, <FaStar style={{margin: '0 0.7rem'}}/>, <FaStar style={{margin: '0 0.7rem'}}/>, <FaStar style={{margin: '0 0.7rem'}}/>],
    },
    {
      name:'Timothy Frantz',
      image: tim,
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt hic molestiae dolorum iste sit, inventore rem ipsa sapiente!',
      starsNum: [<FaStar style={{margin: '0 0.7rem'}}/>,<FaStar style={{margin: '0 0.7rem'}}/>, <FaStar style={{margin: '0 0.7rem'}}/>, <FaStar style={{margin: '0 0.7rem'}}/>, <FaStar style={{margin: '0 0.7rem'}}/>],
    },
    {
      name:'Barry Robinson',
      image: barry,
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt hic molestiae dolorum iste sit, inventore rem ipsa sapiente!',
      starsNum: [<FaStar style={{margin: '0 0.7rem'}}/>,<FaStar style={{margin: '0 0.7rem'}}/>, <FaStar style={{margin: '0 0.7rem'}}/>, <FaStar style={{margin: '0 0.7rem'}}/>, <FaStar style={{margin: '0 0.7rem'}}/>],
    },
  ];

  return (
    <div style={{marginBottom: '10rem'}}>
      <h2 style={{color: 'gainsboro', textAlign: 'center', fontSize: '3rem', paddingBottom: '3.5rem'}}>Reviews / Accolates</h2>
      <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center', gap: '2rem'}}>
        {accolatesData.map((accolate, index) => (
          <div key={index} style={{backgroundColor: '#222222', margin: '1rem', width: '27rem', padding: '1rem 2rem', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}>
            <img style={{width: '6rem', borderRadius: '50%', display: 'block', margin: '1rem auto'}} src={accolate.image} alt="" />
            <h4 style={{color: 'gainsboro', marginBottom: '1rem'}}>{accolate.name}</h4>
            <p style={{fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.545)'}}>{accolate.description}</p>
            <div style={{color: '#0f0', marginTop: '1rem'}}>
              {accolate.starsNum.map((star, index) => (
                star
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Accolades