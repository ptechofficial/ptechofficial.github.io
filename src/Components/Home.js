import React from 'react';
import landingIcon from '../Assets/landing.png';
import socialLinks from '../Meta/socialLinks.json';

export const Home = () => {
  const { resume, linkedIn, github, twitter } = socialLinks;
  return (
    <section className='home section' id='home'>
      <div className='home__container container grid'>
        <div className='home__data'>
          <span className='home__greeting'> Hello, I'm </span>
          <h1 className='home__name'>Prakarsh Gupta</h1>
          <h3 className='home__education'>Full Stack Developer</h3>
          <div className='home__buttons'>
            <a href={resume} target='_blank' className='button button--ghost'>
              Resumé
            </a>
            <a href='#about' className='button'>
              {' '}
              About Me
            </a>
          </div>
        </div>
        <div className='home__handle'>
          <img src={landingIcon} alt='' className='home__img' />
        </div>
        <div className='home__social'>
          <a href={linkedIn} target='_blank' className='home__social-link'>
            <i className='bx bxl-linkedin-square'></i>
          </a>
          <a href={github} target='_blank' className='home__social-link'>
            <i className='bx bxl-github'></i>
          </a>
          <a href={twitter} target='_blank' className='home__social-link'>
            <i className='bx bxl-twitter'></i>
          </a>
        </div>
        <a href='#about' className='home__scroll'>
          <i className='bx bx-mouse home__scroll-icon'></i>
          <span className='home__scroll-name'>Scroll Down</span>
        </a>
      </div>
    </section>
  );
};
