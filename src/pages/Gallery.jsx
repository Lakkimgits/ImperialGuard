import React, { useState } from 'react';
import '../styling/gallery.css';

const GENERAL_IMAGES = import.meta.glob('../assets/gallery/General/*.png', { eager: true });
const GFX_IMAGES = import.meta.glob('../assets/gallery/GFX/*.png', { eager: true });
const PR_IMAGES = import.meta.glob('../assets/gallery/PRs/*.png', { eager: true });

const formatImages = (imageObj, label) =>
  Object.entries(imageObj).map(([path, module]) => ({
    src: module.default,
    alt: `${label} image: ${path.split('/').pop().replace('.png', '').replace(/[_-]/g, ' ')}`,
  }));

const galleryImages = {
  General: formatImages(GENERAL_IMAGES, "General"),
  GFX: formatImages(GFX_IMAGES, "GFX"),
  PRs: formatImages(PR_IMAGES, "PRs"),
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
              aria-pressed={choiceClicked === choice}
            >
              {choice}
            </button>
          ))}
        </div>
      </div>

      <div id='gallery-content'>
        <div className='gallery-images'>
          {(galleryImages[choiceClicked] || []).length === 0 ? (
            <div className="gallery-empty">No images found for this category.</div>
          ) : (
            galleryImages[choiceClicked].map((img, idx) => (
              <img key={idx} src={img.src} alt={img.alt} className='gallery-image' />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;