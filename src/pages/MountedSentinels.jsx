import React from 'react'
import '../styling/regiment.css'


export default function MountedSentinels() {
  return (
    <div>
      <section className="regiment-hero" style={{ backgroundImage: `url('/Images/regiments/banners/mountedsentinels.png')` }}>
        <div className="regiment-hero-overlay">
          <img className="regiment-page-icon" src="/ImperialGuard/Images/regiments/icons/mountedsentinels.png" alt="Mounted Sentinels Emblem" />
          <h1 className="regiment-hero-title">Mounted Sentinels</h1>
          <p className="regiment-hero-motto">"Born to ride, destined to defend"</p>
        </div>
      </section>

      <section className="regiment-scroll">
        <h2 className="regiment-section-title">Who are the Mounted Sentinels?</h2>
        <p>
          The Mounted Sentinels are the elite cavalry regiment of the Imperial Guards. Assigned to ride horses, they serve as both scouts and frontline defenders. Their unique responsibility is to patrol the area around the protectee, identify potential threats, and eliminate danger from both near and long distances. Members of the Sentinels are trained not only in the art of mounted combat but also in upholding the values and discipline expected of all Imperial Guards.
        </p>
        <hr className="regiment-divider" />

        <h2 className="regiment-section-title">Traditions & Duties</h2>
        <p>
          Mounted Sentinels are respected for their discipline, horsemanship, and skill with a variety of weapons. They are tasked with reconnaissance missions, close protection while mounted, and rapid response to threats. In addition to their combat responsibilities, Sentinels participate in special events and tournaments, further honing their abilities and fostering camaraderie within the regiment.
        </p>
        <hr className="regiment-divider" />

        <h2 className="regiment-section-title">Equipment & Dress Code</h2>
        <ul className="regiment-equipment-list">
          <li>Standard Imperial Guard armor</li>
          <li>Horse (owned via thaler or gamepass)</li>
          <li>Preferred weapons: mace, bow, halberd, or war axe</li>
        </ul>
        <hr className="regiment-divider" />

        <h2 className="regiment-section-title">Values & Expectations</h2>
        <p>
          Members of the Mounted Sentinels are expected to demonstrate maturity, discipline, and activity. They are trained to work as part of a highly skilled and coordinated unit, showing respect for their comrades and a deep sense of responsibility for those they protect. The regiment upholds a strict code of conduct, and Sentinels are regarded as exemplary members of the Guard.
        </p>
        <hr className="regiment-divider" />

        <blockquote className="regiment-quote">
          “Born to ride, destined to defend.”
        </blockquote>
      </section>
    </div>
  );
}