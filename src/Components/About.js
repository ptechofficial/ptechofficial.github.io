import React from 'react';
import AboutImage from '../Assets/about.jpg';

export const About = () => {
  return (
    <section className='about section' id='about'>
      <span className='section__subtitle'> My Intro </span>
      <h2 className='section__title'>About Me</h2>

      <div className='about__container container grid'>
        <img src={AboutImage} alt='' className='about__img' />
        <div className='about__data'>
          <div className='about__info'>
            <div className='about__box'>
              <i className='bx bx-award about__icon'></i>
              <h3 className='about__title'>Experience</h3>
              <span className='about__subtitle'>
                0+ Years of Professional Experience <br />
                7+ Years of Hands on Experience
              </span>
            </div>

            <div className='about__box'>
              <i className='bx bx-briefcase-alt about__icon'></i>
              <h3 className='about__title'>Completed</h3>
              <span className='about__subtitle'> 14+ projects</span>
            </div>
          </div>
          <p className='about__description'>
            Prakarsh is a final year undergrad from National Institute of
            Technology, Kurukshetra currently pursuing his B.Tech in Mechanical
            Engineering. He has experience in working with several technologies.
            In January 2022, he joined DRDO as an SDE Intern for a period of 6
            months, where he developed a remarkable web-app that can use Secured
            Satellite Imagery and plot it on a 3d rendered globe with terrain
            Data. While excelling in development, he also practices Competitve
            Programming. Currently working on a React-Native App.
          </p>
          <a href='#contact' className='button'>
            {' '}
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
