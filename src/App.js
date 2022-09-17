import headshot from './assets/headshot.JPG';
import iphone from './assets/iphone.png';
import clublyGif from './assets/clubly.gif';
import './App.css';
import RadioButton from './components/RadioButton';
import generic from './assets/generic.png';
import { useState } from 'react';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';

let value = [
{id: 0, value: 'About Me'},
{id: 1, value: 'What\'s Next?'},
{id: 2, value: 'Clubly'},
{id: 3, value: 'Keenr'},
 ];

function App() {

  const [currentItem, setCurrentItem] = useState(2);
  const [currentScreen, setCurrentScreen] = useState(clublyGif);

  function Changed(v) {
    setCurrentItem(v);
    if (v == 0){
      setCurrentScreen(generic);

    } else if (v == 1){
      setCurrentScreen(generic);
    } else if (v == 2){
      setCurrentScreen(clublyGif);
    } else if (v == 3){
      setCurrentScreen(null);
    }
  }

  return (
    <div className="App">
        
        <div className = "infoContainer">


        <div className = "mainContainer">
          <div className = "iphoneContainer">
            <img src={currentScreen} className = "screen" />
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
                  My goal is to build professional interfaces
                  using react, react native and other javascript
                  based frameworks.
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
              <div className='textBox'>
                  I want to work for a company with room to grow. I'm looking
                  for a job with opportunities to showcase my skillsets and share
                  in the successes of the company and my fellow coworkers.
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
            </div>
            
          </div>

          <div className = "projects">
            <RadioButton value = {value} onChange={Changed}/>
          </div>
          
        </div>

        

        </div>

        
        
    </div>
  );
}

export default App;
