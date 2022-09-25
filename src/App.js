import headshot from './assets/headshot.JPG';
import iphone from './assets/iphone.png';
import clublyGif from './assets/clubly.gif';
import keenr from './assets/keenr.gif';
import './App.css';
import RadioButton from './components/RadioButton';
import RadioButtonMini from './components/RadioButtonMini';
import generic from './assets/generic.png';
import { useState, useEffect } from 'react';
import github from './assets/github.png';
import white from './assets/white.png';
import linkedin from './assets/linkedin.png';
import { FaCode, FaLanguage, FaWrench } from 'react-icons/fa';
import ContactForm from './components/ContactForm';
import UnlockScreen from './components/UnlockScreen';
import Modal from 'react-bootstrap/Modal';
import SlideIn from './components/SlideIn';
import lockscreen from './assets/lockscreen.jpg';

let value = [
{id: 0, value: 'About Me'},
{id: 1, value: 'Skills'},
{id: 2, value: 'Clubly'},
{id: 3, value: 'Keenr'},
{id: 4, value: 'Contact'},
 ];

let valueMenu = [
  {id: 0, value: <FaCode size = {20}/>
  },
  {id: 1, value: <FaLanguage size = {20}/>},
  {id: 2, value: <FaWrench size = {20}/>},
]

function App() {

  const [currentItem, setCurrentItem] = useState(5);
  const [currentScreen, setCurrentScreen] = useState(lockscreen);
  const [currentSkills, setCurrentSkills] = useState(<ul><li>react</li><li>react-native</li></ul>);

  function Changed(v) {
    setCurrentItem(v);
    if (v == 0){
      setCurrentScreen(generic);

    } else if (v == 1){
      setCurrentScreen(generic);
      setCurrentSkills(<ul><li>react</li><li>react-native</li><li>bootstrap</li><li>jQuery</li><li>redux</li><li>illustrator</li></ul>);
    } else if (v == 2){
      setCurrentScreen(clublyGif);
    } else if (v == 3){
      setCurrentScreen(keenr);
    } else if (v == 4){
      setCurrentScreen(white);
    } else if (v == 5){
      setCurrentSkills(generic);
    }
  }

  function skillChange(v) {
    if (v == 0){
      setCurrentSkills(<ul><li>react</li><li>react-native</li><li>bootstrap</li><li>jQuery</li><li>redux</li><li>illustrator</li><li>unity</li></ul>);
    } else if (v == 1){
      setCurrentSkills(<ul><li>java</li><li>python</li><li>javascript</li><li>C/C++/C#</li><li>liquid</li></ul>);
    } else if (v == 2){
      setCurrentSkills(<ul><li>Jira</li><li>Version Control (Git, Subversion)</li><li>G-Suite</li></ul>);
    }
  }

  const unlock = async event => {
    setStartAnimation(true);
    await delay(200);
    Changed(0);
  }

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const [startAnimation, setStartAnimation] = useState(false);

  return (
    <div className="App">
        
        <div className = "infoContainer">

        <div className = "mainContainer">
          <div className = "iphoneContainer">
            <img src={currentScreen} className = "screen" style = {{objectFit: 'cover'}}/>
            <div className='screen'>
              {currentItem==0 ? <div className='overlay'>
              <div className='screenContainer'>
                <div className = "headshotContainer">
                </div>
                <img src={headshot} className = "headshot" />
              </div>
              <div className='textBox'>
                  My name is Andrew Stephens. I am 22 years old, and a fifth year
                  computer engineering student with specialty in
                  software engineering at Toronto Metropolitan
                  University (formerly known as Ryerson.)
              </div>
              <div className='textBox2'>
                  My experience in <strong>startups</strong> and 
                  <strong> larger teams</strong> has shaped me into
                  a practiced developer
              </div>
              </div> : null}

            </div>
            
            <img src={iphone} className = "iphone" />

            <div className='screen'>
            
              {currentItem==1 ? <div className='overlay'>
              <div className='screenContainer'>
                <div className = "headshotContainer">
                </div>
                <img src={headshot} className = "headshot" />
              </div>
              <div className='textBox3'>

              <div className='optionsBox'>
              <RadioButtonMini value = {valueMenu} onChange={skillChange}/>
              </div>

              <div className="skillBox">
              {currentSkills}
              </div>
                
              </div>
              <div className = 'logoBox'>

                <a href = 'https://www.linkedin.com/in/andrewstephens08/' target = 'blank'>
                  <img src={linkedin} className = 'miniLogo'/>
                </a>
                <a href = 'https://github.com/andrew-j-stephens' target = 'blank'>
                  <img src={github} className = 'miniLogo'/>
                </a>
                  
              </div>
              </div> : null}
              
              {currentItem==4 ? 
              
                <ContactForm />
              : null}
              {currentItem==5 ? 

                <div onClick={unlock} style = {{height: '85%'}}>
                    <UnlockScreen />
                </div>

              : null}
            </div>
            
          </div>

          <div className = "projects">
            <RadioButton value = {value} onChange={Changed}/>
          </div>
          
        </div>

        {currentItem==2 ?
        <div className = "description">
        Clubly is an app built with React Native designed to create tech-based solutions that make it easier for nightlife entertainment venues to improve the customer experience.
        </div> : null}

        {currentItem==3 ?
        <div className = "description">
        Keenr is a prototype app designed with React Native designed for users to be able to share and vote for photos based on a daily challenge or prompt.
        </div> : null}

        

        </div>

        
        
    </div>
  );
}

export default App;
