import {FaCode, FaCss3Alt, FaHtml5, FaReact, FaDatabase} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si';
import {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';

function App() {
  const iconsList = [<FaCode className='icon' />, <FaCss3Alt className='icon' />, <FaHtml5 className='icon' />, <FaReact className='icon' />, <SiJavascript className='icon' />, <FaDatabase className='icon' />];
  const [iconsNumber, setIconsNumber] = useState([]);

  useEffect(() => {
    const newState = buildRandomIcons();
    setIconsNumber((prevState) => [...prevState, newState]);
  }, []);

  const buildRandomIcons = () => {
    let newIcons = [];
    for (let i = 0; i < 300; i++) {
      newIcons.push(iconsList[Math.floor(Math.random() * 6)])
    }
    return [newIcons];
  }

  return (
    <div id="wrapper">
      <div className="content">  
        <Navbar/>
        <Hero/>
        <Skills/>
      </div>
      <div className="background">
          {iconsNumber.map((icon, index) => (
            <div key={index}>
              {icon}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
