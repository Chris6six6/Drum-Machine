import { useEffect } from 'react';

import './App.css'
import Pad from './Pads'

const audioClips = [
  {
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater 1"
  },
  {
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Heater 2"
  },
  {
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description: "Heater 3"
  },

  {
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    description: "Heater 4"
  },
  {
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    description: "Clap"
  },
  {
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    description: "Open-HH"
  },

  {
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    description: "Kick-n'-Hat"
  },
  {
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    description: "Kick"
  },
  {
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    description: "Closed-HH"
  },
]

function App() {
  const handleKeyDown = (event) => {
    const clip = audioClips.find(clip => clip.keyTrigger === event.key.toUpperCase());
    if (clip) {
      playSound(clip);
      displayClipDescription(clip.description);
    }
  };

  const playSound = (clip) => {
    const audio = document.getElementById(clip.keyTrigger);
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(error => console.error(error));
    }
  };

  const displayClipDescription = (description) => {
    const displayElement = document.getElementById('display');
    if (displayElement) {
      displayElement.innerText = description;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Agregar [] como dependencia para que el efecto se ejecute solo una vez

  return (
    <div id='drum-machine' className='container'>
      <h1>FCC Machine</h1>
      <div className="pad-container">
        {/* Iterar sobre la matriz de audioClips y renderizar un componente Pad para cada uno */}
        {audioClips.map((clip) => (
          <Pad audioClip={clip} key={clip.keyTrigger}/>
        ))}
      </div>
      <div id='display'></div>
    </div>
  );
}

export default App;
