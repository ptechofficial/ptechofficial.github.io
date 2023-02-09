import React from 'react';
import workLandscape from '../Assets/work1.jpg';
import workList from '../Meta/workList.json';
export const Work = () => {
  return (
    <section className='work section' id='work'>
      <span className='section__subtitle'> My Portfolio</span>
      <h2 className='section__title'>Recent Works</h2>
      <div className='work__container container grid'>
        {workList.map((work, index) => {
          return (
            <div className='work__card' key={index}>
              {work.type === 'image' ? (
                <img src={work.url} alt='' className='work__img' />
              ) : (
                <iframe
                  src={work.url}
                  className='work__img'
                  style={{ width: '100%' }}
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  // title='video'
                />
              )}

              <h3 className='work__title'>{work.title}</h3>
              <a href={work.links.live_demo} className='work__button'>
                Live Demo{' '}
              </a>

              <a href={work.links.case_study} className='work__button'>
                Case Study{' '}
              </a>
              <a href={work.links.github} className='work__button'>
                Github
              </a>
            </div>
          );
        })}
      </div>{' '}
    </section>
  );
};
