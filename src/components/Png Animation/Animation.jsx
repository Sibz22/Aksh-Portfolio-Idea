import  { useState } from 'react';


import GuitarImage from '../../Images/Guitar.png';
import PaperImage from '../../Images/Paper.png';
import CircleSVG from '../../Images/circle.svg';
import MusicSVG from '../../Images/Music.svg'; // Import music.svg
//import { useState } from 'react';

const WhiteBackgroundComponent = () => {
  const [showMusic, setShowMusic] = useState(false);

  const handleMouseEnter = () => {
    setShowMusic(true);
  };

  const handleMouseLeave = () => {
    setShowMusic(false);
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${PaperImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* {children} */}
      <img
        src={CircleSVG}
        alt="Circle"
        className="absolute bottom-0 transform -translate-x-1/2 left-1/2"
        style={{ 
          width: '60rem', 
          height: 'auto',
          maxHeight: '50vh', // Ensures it scales with the viewport height
          objectFit: 'contain', // Maintains aspect ratio
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <img
        src={GuitarImage}
        alt="Guitar"
        className="absolute bottom-0 transform -translate-x-1/2 left-1/2"
        style={{ 
          width: '60rem', 
          height: 'auto', 
          zIndex: 20,
          maxHeight: '65vh', // Ensures it scales with the viewport height
          objectFit: 'contain', // Maintains aspect ratio
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {showMusic && (
        <img
          src={MusicSVG}
          alt="Music"
          className="absolute transform -translate-x-1/2 left-1/2 animate-easeInOut"
          style={{ 
            width: '10rem', 
            height: 'auto', 
            bottom: '8rem', // Position it just below the guitar
          }}
        />
      )}
      {showMusic && (
       <img
          src={MusicSVG}
          alt="Music"
          className="absolute transform -translate-x-1/2 left-1/2 animate-easeInOut"
          style={{ 
            width: '10rem', 
            height: 'auto', 
            bottom: '8rem', // Position it just below the guitar
            transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
           }}
        />
    )}
    </div>
  );
};

export default WhiteBackgroundComponent;
