import React from 'react';
import './Hero.css';
import profile_img from '../../assets/about_profile.png';
import resume_pdf from '../../assets/resume.pdf'; // Assuming resume is in PDF format

const Hero = () => {
  const handleResumeDownload = () => {
    window.open(resume_pdf); // Open resume in new tab to initiate download
  };

  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Lakshmi Sailaja, <br/>
        </span>Enthusiastic Learner.</h1>
      <p>I am currently pursuing B.Tech second year at KLUniversity</p>
      <div className='hero-action'>
        <div className='hero-connect'>Connect with me !!</div>
        <div className='hero-resume' onClick={handleResumeDownload}>My Resume</div>
      </div>
    </div>
  );
}

export default Hero;
