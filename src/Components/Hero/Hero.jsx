import React from 'react';
import './Hero.css';
import profile_img from '../../assets/Thurshani1.PNG';
import resumePDF from '../../assets/Thurshani Nagalingam (2).pdf'; // Import your CV PDF
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <>
      <div id='home' className='hero'>
        <img src={profile_img} alt='Profile' />
        <h1>I'm <span>Thurshani Nagalingam</span></h1>
        <h2>Full Stack Developer</h2>
        <p>
          I build modern, responsive websites and apps that solve real-world problems — fast, clean, and powerful
        </p>
      </div>

      <div className='hero-action'>
        <div className='hero-connect'>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>
        </div>

        {/* Download Resume Button */}
        <a href={resumePDF} download className='hero-resume'>
          My resume
        </a>
      </div>
    </>
  );
};

export default Hero;
