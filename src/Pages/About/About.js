import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-heading">
        <h2>About Us</h2>
      </div>
      <div className="about-content">
        {/* <div className="about-img">
          <img src="https://i.imgur.com/g3L4TVx.jpg" alt="Viking Ship" />
        </div> */}
        <div className="about-text">
          <p>
            Our team of brave Viking warriors is dedicated to saving princesses from dragons and other mythical beasts. With years of experience and countless battles under our belts, we have the skills and knowledge necessary to overcome any challenge.
          </p>
          <p>
            We specialize in rescuing princesses from towering castles and treacherous dungeons. Whether the princess is being held captive by a fire-breathing dragon or an evil sorcerer, we will stop at nothing to bring her to safety.
          </p>
          <p>
            Our services also include dragon slaying, treasure hunting, and monster extermination. If you have a problem that requires the strength and bravery of a Viking warrior, we're the team for you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
