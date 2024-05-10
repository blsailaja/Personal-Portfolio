import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.png';

const About = () => {
  return (
    <div id = 'about'className='about'>
      <div className='about-title'>
        <h1>About Me</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className='about-sections'>
        <div className='about-left'>
          <img src={profile_img} alt=""/>
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <p>I am a sophomore at KLU, like to explore the technical domains</p>
          </div>
          <div className='about-skills'>
            <div className='about-skill'>
              <p>HTML & CSS</p> <hr style={{width: "50%"}} />
            </div>
            <div className='about-skill'>
              <p>REACT JS , EXPRESS JS , NODE JS , MONGODB</p> <hr style={{width: "50%"}} />
            </div>
            <div className='about-skill'>
              <p>C</p> <hr style={{width: "50%"}} />
            </div>
            <div className='about-skill'>
              <p>JAVA</p> <hr style={{width: "50%"}} />
            </div>
            <div className='about-skill'>
              <p>PYTHON</p> <hr style={{width: "50%"}} />
            </div>
          </div>
        </div>
      </div>
      <div className='about-achievements'>
        <div className="about-achievement">
          <h3>WOMEN ENGINEERS PROGRAM</h3>
          <p>selected as one among 200 members selected among 220+ applicants</p>
        </div>
        <div className="about-achievement">
          <h3>RELIANCE UNDERGRADUATE SCHOLAR</h3>
          <p>selected as one among 5000 members selected among 50000+ applicants</p>
        </div>
      </div>
    </div>
  );
}

export default About;
