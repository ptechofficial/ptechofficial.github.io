import React from 'react';
import socialLinks from '../Meta/socialLinks.json';

export const Footer = () => {
  const { twitter, instagram, facebook } = socialLinks;
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Prakarsh Gupta</h1>

        <ul className='footer__list'>
          <li>
            <a href='#about' className='footer__link'>
              About
            </a>
          </li>
          <li>
            <a href='#work' className='footer__link'>
              Projects
            </a>
          </li>
          <li>
            <a href='#contact' className='footer__link'>
              Contact
            </a>
          </li>
        </ul>

        <ul className='footer__social'>
          <a href={facebook} className='footer__social-link' target='_blank'>
            <i className='bx bxl-facebook'></i>
          </a>
          <a href={instagram} className='footer__social-link' target='_blank'>
            <i className='bx bxl-instagram'></i>
          </a>
          <a href={twitter} className='footer__social-link' target='_blank'>
            <i className='bx bxl-twitter'></i>
          </a>
        </ul>

        <span className='footer__copy'>
          &#169; Prakarsh Gupta. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
