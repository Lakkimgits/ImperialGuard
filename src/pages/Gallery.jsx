import React from 'react'
import '../styling/gallery.css'
import { useState } from 'react'

const Gallery = () => {
    const [choiceClicked, setChoiceClicked] = useState(null);

    const handleChoiceCLick = (choice) => {
        setChoiceClicked(choice);
        console.log(`Choice clicked: ${choice}`);
    }


    return (
        <div id='gallery-page'>
            <div id='gallery-choices'>
                <div id='choices-container'>
                    <button 
                        className={`gallerybtn ${choiceClicked === 'General' ? 'active' : ''}`}
                        onClick={() => handleChoiceCLick('General')}
                    >General</button>

                    <button 
                        className={`gallerybtn ${choiceClicked === 'GFX' ? 'active' : ''}`}
                        onClick={() => handleChoiceCLick('GFX')}
                    >GFX</button>

                    <button 
                        className={`gallerybtn ${choiceClicked === 'PRs' ? 'active' : ''}`}
                        onClick={() => handleChoiceCLick('PRs')}
                    >PRs</button>

                </div>
            </div>

            <div id='gallery-content'>

            </div>
        </div>
    )
}

export default Gallery
