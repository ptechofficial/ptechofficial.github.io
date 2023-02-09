import React from 'react';
import dotCardIcon from '../Assets/dotCard.png';
import socialLinks from '../Meta/socialLinks.json';

export const Contact = () => {
  const { email, dotcard, mobile } = socialLinks;
  return (
    <section className='contact section' id='contact'>
      <span className='section__subtitle'> Get in touch </span>
      <h2 className='section__title'>Contact Me</h2>
      <div className='contact__container container grid'>
        <div className='contact__content'>
          <h3 className='contact__title'>Talk to Me</h3>
          <div className='contact__info'>
            <div className='contact__card'>
              <i className='bx bx-mail-send contact__card-icon'></i>
              <h3 className='contact__card-title'>Email</h3>
              <span className='contact__card-data'>{email}</span>
              <a
                href={'mailto:' + email}
                target='_blank'
                className='contact__button'
              >
                Write me
                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>
            <div className='contact__card'>
              <i className='bx bxl-whatsapp contact__card-icon'></i>
              <h3 className='contact__card-title'>Whatsapp</h3>
              <span className='contact__card-data'>{mobile}</span>
              <a
                href={
                  'https://api.whatsapp.com/send?phone=' +
                  mobile +
                  '&text=Hello, from Portfolio website!'
                }
                target='_blank'
                className='contact__button'
              >
                Write me
                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>
            <div className='contact__card'>
              <img src={dotCardIcon} alt='' width='30px' height='30px' />
              <h3 className='contact__card-title'>dotCard</h3>
              <span className='contact__card-data'>
                Check out all social media
              </span>
              <a href={dotcard} target='_blank' className='contact__button'>
                View
                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>
          </div>
        </div>

        <div className='contact__content'>
          <h3 className='contact__title'>Send a message</h3>
          <form action='' className='contact__form'>
            <div className='contact__form-div'>
              <label htmlFor='' className='contact__form-tag'>
                Name
              </label>
              <input
                type='text'
                placeholder='Insert your name'
                className='contact__form-input'
              />
            </div>
            <div className='contact__form-div'>
              <label htmlFor='' className='contact__form-tag'>
                Email
              </label>
              <input
                type='email'
                placeholder='Insert your email'
                className='contact__form-input'
              />
            </div>
            <div className='contact__form-area contact__form-div'>
              <label htmlFor='' className='contact__form-tag'>
                Message
              </label>
              <textarea
                name=''
                id=''
                cols='30'
                rows='10'
                placeholder='Write your message'
                className='contact__form-input'
              ></textarea>
            </div>

            <button className='button'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};
