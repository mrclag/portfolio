import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { NavStyles } from '../styles/Navbar.styles';

const Navbar = () => {
  const [navCol, setNavCol] = useState('rgba(51, 51, 51, 0)');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        setNavCol('rgba(51, 51, 51, 0)');
      } else if (window.scrollY > 100) {
        setNavCol('rgba(51, 51, 51, 1)');
      } else if (window.scrollY > 80) {
        setNavCol('rgba(51, 51, 51, 0.8)');
      } else if (window.scrollY > 60) {
        setNavCol('rgba(51, 51, 51, 0.6)');
      } else if (window.scrollY > 40) {
        setNavCol('rgba(51, 51, 51, 0.4)');
      } else if (window.scrollY > 20) {
        setNavCol('rgba(51, 51, 51, 0.2)');
      }
    });
  });

  return (
    <NavStyles style={{ backgroundColor: navCol }}>
      <div className="navItem">
        <Link
          activeClass="active"
          className="test1"
          to="test1"
          spy={true}
          smooth={true}
          duration={500}
        >
          <i className="fa fa-home" aria-hidden="true"></i>
          <span className="navbarName"> Home</span>
        </Link>
      </div>
      <div className="navItem">
        <Link
          activeClass="active"
          className="test2"
          to="test2"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <i className="fa fa-user-circle" aria-hidden="true"></i>
          <span className="navbarName"> About</span>
        </Link>
      </div>
      <div className="navItem">
        <Link
          activeClass="active"
          className="test3"
          to="test3"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <i className="fa fa-rocket" aria-hidden="true"></i>
          <span className="navbarName"> Projects</span>
        </Link>
      </div>
      {/* <div className="navItem">
        <Link
          activeClass="active"
          className="test4"
          to="test4"
          spy={true}
          smooth={true}
          offset={1}
          duration={500}
        >
          <i className="fa fa-pencil" aria-hidden="true"></i>
          <span className="navbarName"> Blog</span>
        </Link>
      </div> */}
    </NavStyles>
  );
};

export default Navbar;
