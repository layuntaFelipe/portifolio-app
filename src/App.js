import { FaCode, FaCss3Alt, FaHtml5, FaReact, FaDatabase } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import MoreAboutMe from './components/MoreAboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Accolades from './components/Accolades';

function App() {
  const iconsList = [<FaCode className='icon' />, <FaCss3Alt className='icon' />, <FaHtml5 className='icon' />, <FaReact className='icon' />, <SiJavascript className='icon' />, <FaDatabase className='icon' />];
  const [iconsNumber, setIconsNumber] = useState([]);

  useEffect(() => {
    const newState = buildRandomIcons((document.documentElement.clientWidth * 1.7));
    setIconsNumber((prevState) => [...prevState, newState]);
    console.log(document.documentElement.clientWidth);
  }, []);

  const buildRandomIcons = (number = 2200) => {
    let newIcons = [];
    for (let i = 0; i < number; i++) {
      newIcons.push(iconsList[Math.floor(Math.random() * 6)])
    }
    return [newIcons];
  }

  return (
    <div id="wrapper">
      <div className="content">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Accolades/>
        <MoreAboutMe />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
