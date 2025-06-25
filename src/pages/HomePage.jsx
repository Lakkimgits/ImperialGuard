import '../App.css';
import { useNavigate } from 'react-router-dom';

const regimentRoutes = {
  "Paladins Unit": "/Paladins",
  "Mounted Sentinels": "/MountedSentinels",
  "Scharfrichter Order": "/ScharfrichterOrder"
}

const Regiment = ({ title, text }) => {
  const navigate = useNavigate();

  const imageFile = title.toLowerCase().replace(/\s+/g, '') + '.png';
  const imageScr = '/ImperialGuard/Images/regiments/icons/' + imageFile;
  const pagePath = regimentRoutes[title] || title.replace(/\s+/g, '');

  return (
    <div className='regiment'>
      <div className='regiment-header'>
        <img className='regiment-icons' src={imageScr} alt="" />
        <h3 className='regiment-title'>{title}</h3>
      </div>
      <p className='regiment-text'>{text}</p>

      <button className='regimental-read-more' onClick={() => navigate(pagePath)}>Read More</button>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <section id='hero-section'>
        <img id='hero-image' src="/ImperialGuard/Images/hero-image.jpg" alt="Imperial Guard" />
        <div id='hero-content'>
          <h1 className='hero-things' id='hero-text'>Imperial Guard</h1>
          <h2 className='hero-things'>Ad Imperii Gloria!</h2>
        </div>
      </section>
      <section id='intro-section'>
        <div className='intro-container'>
          <h1 className='intro-title'>About</h1>
          <p className='intro-text'>
            The Imperial Guard is an elite guarding division of the Holy Roman Empire designed to protect the Emperor, duke and any other high ranking officials. Only the best of HRE may serve this purpose.
          </p>
        </div>
        <div className='intro-container'>
          <h1 className='intro-title'>Oath of Silence</h1>
          <p className='intro-text'>The Imperial Guards follow a strict Oath of Silence that cannot be broken otherwise punishment will be given, all guards must be effective at combat and patient while performing their duties, or else the protectee may be in danger. The cost of being ineffective is the protectees death which is an unacceptable loss.</p>
        </div>

        <h2 className='sub-title' style={{marginTop: '2.5rem'}}>Regiments in the Guard</h2>
        <div id='regiment-container'>
          
          <Regiment 
              title='Mounted Sentinels' 
              text='The Mounted Sentinels are the cavalry regiment of the Imperial Guards. They are specialized in scouting and are known for their skill on the horse. Also trained in long-ranged weapons.' />

          <Regiment 
              title='Paladins Unit' 
              text='The Paladins Unit is the elite regiment within the Imperial Guard. They are chosen out of the best combattants in the division and are outstanding in combatative actions.' />

          <Regiment 
              title='Scharfrichter Order' 
              text='The Scharfrichter Order is the policing regimental unit. Responsible for upholding the absolute standards and general rules IG should follow.' />

        </div>
      </section>
    </div>
  );
}