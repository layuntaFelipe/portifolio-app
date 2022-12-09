import tim from './assets/accolates/tim.jpeg';
import barry from './assets/accolates/barrry.jpeg';
import stephen from './assets/accolates/stephen.jpeg';
import {FaStar} from 'react-icons/fa';

export const accolatesData = [
 {
   name:'Stephen Graham',
   image: stephen,
   description: 'Felipe is a outstanding and outgoing student who continually strives to improve his understanding of this craft.',
   starsNum: [<FaStar style={{margin: '0 0.7rem'}}/>,<FaStar style={{margin: '0 0.7rem'}}/>, <FaStar style={{margin: '0 0.7rem'}}/>, <FaStar style={{margin: '0 0.7rem'}}/>, <FaStar style={{margin: '0 0.7rem'}}/>],
 },
 {
   name:'Timothy Frantz',
   image: tim,
   description: "Tremendous work! Looks fantastic, professional, well organized, consistent, and complete. I love the enthusiasm! Great job - you're hired!",
   starsNum: [<FaStar style={{margin: '0 0.7rem'}}/>,<FaStar style={{margin: '0 0.7rem'}}/>, <FaStar style={{margin: '0 0.7rem'}}/>, <FaStar style={{margin: '0 0.7rem'}}/>, <FaStar style={{margin: '0 0.7rem'}}/>],
 },
 {
   name:'Barry Robinson',
   image: barry,
   description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt hic molestiae dolorum iste sit, inventore rem ipsa sapiente!',
   starsNum: [<FaStar style={{margin: '0 0.7rem'}}/>,<FaStar style={{margin: '0 0.7rem'}}/>, <FaStar style={{margin: '0 0.7rem'}}/>, <FaStar style={{margin: '0 0.7rem'}}/>, <FaStar style={{margin: '0 0.7rem'}}/>],
 },
];