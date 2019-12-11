import React, { useEffect } from 'react';
import { Element, Events, animateScroll as scroll } from 'react-scroll';

import Navbar from './Navbar';
import Landing from './Landing';
import About from './About';

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

      <Element name="test3" className="element">
        test 3
      </Element>

      <Element name="test4" className="element">
        test 4
      </Element>

      <Element name="test5" className="element">
        test 5<button onClick={scrollToTop}>To the top!</button>
      </Element>
    </div>
  );
};

export default Home;
