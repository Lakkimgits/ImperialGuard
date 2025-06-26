import React, { useState } from 'react';
import '../styling/gallery.css';

const galleryImages = {
  General: [
    { src: '/images/general1.png', alt: 'General Image 1' },
    { src: '/images/general2.png', alt: 'General Image 2' },
  ],
  GFX: [
    { src: '/images/gfx1.png', alt: 'GFX Image 1' },
    { src: '/images/gfx2.png', alt: 'GFX Image 2' },
  ],
  PRs: [
    { src: '/images/prs1.png', alt: 'PRs Image 1' },
    { src: '/images/prs2.png', alt: 'PRs Image 2' },
  ],
};

const Gallery = () => {
  const [choiceClicked, setChoiceClicked] = useState('General');

  const handleChoiceClick = (choice) => {
    setChoiceClicked(choice);
    console.log(`Choice clicked: ${choice}`);
  };

  return (
    <div id='gallery-page'>
      <div id='gallery-choices'>
        <div id='choices-container'>
          {['General', 'GFX', 'PRs'].map((choice) => (
            <button
              key={choice}
              className={`gallerybtn ${choiceClicked === choice ? 'active' : ''}`}
              onClick={() => handleChoiceClick(choice)}
            >
              {choice}
            </button>
          ))}
        </div>
      </div>

      <div id='gallery-content'>
        <div className='gallery-images'>
          {(galleryImages[choiceClicked] || []).map((img, idx) => (
            <img key={idx} src={img.src} alt={img.alt} className='gallery-image' />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;