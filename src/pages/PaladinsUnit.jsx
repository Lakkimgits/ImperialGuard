import React from 'react'
import '../styling/regiment.css'

export default function PaladinsUnit() {
  return (
    <div>
      <section className="regiment-hero" style={{ backgroundImage: `url('Impe/Images/regiments/paladin-bg.png')` }}>
        <div className="regiment-hero-overlay">
          <img className="regiment-page-icon" src="/ImperialGuard/Images/regiments/icons/paladinsunit.png" alt="Paladins Emblem" />
          <h1 className="regiment-hero-title">Paladins Unit</h1>
          <p className="regiment-hero-motto">“Honor the sword, set the flames”</p>
        </div>
      </section>

      <section className="regiment-scroll">
        <h2 className="regiment-section-title">Who are the Paladins?</h2>
        <p>
          The Paladins are elite warriors. Imperial Guards turned into unmatched fighters in service to the Emperor. They take part in exclusive combat trainings that allows them to be much more knowledgeable and skilled than any common Imperial Guard. That makes them incredible allies, and dangerous foes on the battlefield.
        </p>
        <hr className="regiment-divider" />

        <h2 className="regiment-section-title">Traditions & Training</h2>
        <p>
           The rigorous training that Paladins undergo includes mastering a variety of weapons and battlefield tactics. Their code demands not only martial excellence, but also wisdom, restraint, and humility. Paladins are often called upon to serve as exemplars of the Guard’s values.
        </p>
        <hr className="regiment-divider" />

        <h2 className="regiment-section-title">Sub-Regiments: The Crosses</h2>
        <div className="regiment-crosses">
          <div className="cross-card green">
            <h3>The Green Cross <span className="cross-name">“Protectors”</span></h3>
            <p>
              Protectors are charged with safeguarding their comrades and the protectee above all else. They are skilled in defensive tactics and are often found at the heart of any formation, ready to shield others from harm.
            </p>
          </div>
          <div className="cross-card red">
            <h3>The Red Cross <span className="cross-name">“Blades”</span></h3>
            <p>
              Blades are the offensive spearhead of the Paladins. They specialize in direct combat, leading charges and taking the fight to the enemy with unmatched ferocity and tactical prowess.
            </p>
          </div>
          <div className="cross-card blue">
            <h3>The Blue Cross <span className="cross-name">“Berserkers”</span></h3>
            <p>
              Berserkers wield the heaviest arms in the arsenal, such as war axes. Their role is to break enemy lines and turn the tide of battle with overwhelming force.
            </p>
          </div>
        </div>
        <hr className="regiment-divider" />

        <h2 className="regiment-section-title">Organization & Duties</h2>
        <p>
          The Paladins operate in small, tightly-knit squads. They may be deployed to protect the Emperor, lead critical missions, or train the next generation of Imperial Guards. Their presence inspires confidence among allies and fear among adversaries.
        </p>

        {/* Optional: Notable Members */}
        {/* <hr className="regiment-divider" />
        <h2 className="regiment-section-title">Notable Paladins</h2>
        <ul>
          <li><strong>Sir Alaric the Unyielding</strong> – Legendary leader of the Green Cross.</li>
          <li><strong>Dame Ysabel “the Blade”</strong> – Famed for her daring raids as a Red Cross commander.</li>
        </ul> */}

        <hr className="regiment-divider" />
        <h2 className="regiment-section-title">Insignia & Equipment</h2>
        <p>
          Paladins wear the standard Imperial Guard armor, a bascinet helmet, and carry either any Imperial Guard shield or a kite shield. Their attire marks them as elite among the Guard, and their equipment is both functional and symbolic of their dedication and discipline.
        </p>

        <blockquote className="regiment-quote">
          “To stand as a Paladin is to stand for the Empire itself.”<br />
          <span className="regiment-quote-author">– Imperial Guard Chronicle</span>
        </blockquote>
      </section>
    </div>
  );
}