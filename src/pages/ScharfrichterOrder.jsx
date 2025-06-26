import React from 'react'
import '../styling/regiment.css'

export default function ScharfrichterOrder() {
  return (
    <div>
      <section className="regiment-hero" style={{ backgroundImage: `url('/ImperialGuard/Images/regiments/banners/scharfrichterorder.png')` }}>
        <div className="regiment-hero-overlay">
          <img className="regiment-page-icon" src='/Images/regiments/icons/scharfrichterorder.png' alt="SO Emblem" />
          <h1 className="regiment-hero-title">Scharfrichter Order</h1>
          <p className="regiment-hero-motto">"Without order there is nothing"</p>
        </div>
      </section>

      <section className="regiment-scroll">
        <h2 className="regiment-section-title">What is the Scharfrichter?</h2>
        <p>
          The Scharfrichter Order is a specialized regiment within the Imperial Guard, entrusted with upholding internal security and discipline. Members of the Order are responsible for maintaining standards, issuing warnings, and ensuring that the Guard remains loyal and effective in their service.
        </p>
        <hr className="regiment-divider" />

        <h2 className="regiment-section-title">Traditions & Duties</h2>
        <p>
          Scharfrichter members are chosen for their integrity, impartiality, and dedication. Their chief responsibilities include monitoring conduct, delivering official warnings, and overseeing the process of correction and discipline. The Order operates with a strict code of confidentiality and professionalism to protect both the Guards and the integrity of the regiment.
        </p>
        <hr className="regiment-divider" />

        <h2 className="regiment-section-title">Discipline & Correction</h2>
        <p>
          The Scharfrichter Order manages the warning and corrective action system of the Guards. Warnings are given for breaches of conduct; repeated offenses can lead to more serious measures. The Order ensures that discipline is fair and consistent, and that the standards of the Imperial Guard are upheld at all times.
        </p>
        <blockquote className="regiment-quote">
          “Discipline is the shield of the Guard.”
        </blockquote>
        <hr className="regiment-divider" />

        <h2 className="regiment-section-title">Confidentiality & Integrity</h2>
        <p>
          Due to the sensitive nature of their duties, members of the Scharfrichter Order are bound by strict confidentiality. The privacy of all Guards is respected, and information is only shared on a need-to-know basis within the Order. Any breach of trust is considered a grave offense.
        </p>
        <hr className="regiment-divider" />

        <h2 className="regiment-section-title">Contact & Further Information</h2>
        <p>
          For questions regarding discipline, standards, or the Scharfrichter Order, members of the Imperial Guard may approach an Order member. The Scharfrichter Order stands ready to serve the Emperor and the Guard with unwavering fairness and resolve.
        </p>
      </section>
    </div>
  );
}