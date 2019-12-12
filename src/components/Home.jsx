import React, { useEffect } from 'react';
import { Element, Events, animateScroll as scroll } from 'react-scroll';

import Navbar from './Navbar';
import Landing from './sections/Landing';
import About from './sections/About';
import Projects from './sections/Projects';
import Blogs from './sections/Blogs';

const Home = () => {
  useEffect(() => {
    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments);
    });
    Events.scrollEvent.register('end', function() {
      console.log('end', arguments);
    });

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <Navbar />

      <Element name="test1">
        <Landing />
      </Element>

      <Element name="test2">
        <About />
      </Element>

      <Element name="test3">
        <Projects />
      </Element>

      <Element name="test4">
        <Blogs />
      </Element>

      <div
        style={{
          borderTop: '1px solid black',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <button onClick={() => scrollToTop()}>Return to Top</button>
      </div>
    </div>
  );
};

export default Home;
