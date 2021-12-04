import React from 'react';
import './About.css';
import img from './appImg.jpg';

const About = () => {

  return (
      <div className="about-wrap">
        <div className="container">
          <div className="about">

            <div className="about__content">
              <h3>Dmitriy Volchenko</h3>
              <p><a href="https://github.com/dmitriywolf">GitHub</a></p>
              <p><span>Age:</span> 25</p>
              <p><span>Country:</span> Ukraine</p>
              <p><span>Profession:</span> Mining Engineer</p>
              <p><span>Hard Skill:</span> HTML&CSS, JS, React</p>
            </div>

            <div className="about__img">
              <img src={img} alt="ВДС"/>
            </div>
          </div>
        </div>
      </div>
  )
};

export default About;
