import React, { useEffect } from 'react';
import { Element, Events } from 'react-scroll';
// import { animateScroll as scroll} from 'react-scroll'

// import { Button } from '../styles/global-styles';

import Navbar from './Navbar';
import Landing from './sections/Landing';
import SeekingJob from './sections/SeekingJob';
import About from './sections/About';
import Projects from './sections/Projects';
// import Blogs from './sections/Blogs';

const Home = () => {
  useEffect(() => {
    Events.scrollEvent.register('begin', function () {});
    Events.scrollEvent.register('end', function () {});

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  });

  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };

  return (
    <div>
      <Navbar />

      <Element name="test1">
        <Landing />
      </Element>
      <Element name="test15">
        <SeekingJob />
      </Element>
      <Element name="test2">
        <About />
      </Element>

      <Element name="test3">
        <Projects />
      </Element>
      {/* 
      <Element name="test4">
        <Blogs />
      </Element> */}

      {/* <div
        style={{
          borderTop: '1px solid black',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Button onClick={() => scrollToTop()}>Return to Top</Button>
      </div> */}
    </div>
  );
};

export default Home;
