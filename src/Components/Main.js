import React from 'react';
import { About } from './About';
import { Contact } from './Contact';
import { Home } from './Home';
import { Work } from './Work';

export const Main = () => {
  return (
    <main className='main'>
      <Home />
      <About />
      <Work />
      <Contact />
    </main>
  );
};
