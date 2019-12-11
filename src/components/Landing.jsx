import React from 'react';
import ButtonLink from './ButtonLink';
import Background from './Background';

import {
  Wrapper,
  Bio,
  SocialLinks,
  NameTitle,
  LandingBackground
} from '../styles/Landing.styles.js';

const Landing = () => {
  return (
    <LandingBackground>
      <Background />
      <Wrapper>
        <Bio>
          <NameTitle>MATTHEW CLAGETT</NameTitle>
          <br />
          Self-taught software developer.
          <br />
          <br />
          May 2019 UC Berkeley Business Administration graduate.
          <br />
          <br />
          Specialize in React.js web development, but love learning and building
          new things with new tools.
          <br />
          <br />
          Looking for a full-time position starting in Spring 2020.
        </Bio>
        <SocialLinks>
          <ButtonLink link="https://www.github.com/mrclag" icon="github" />
          <ButtonLink
            link="https://www.instagram.com/mrclagett"
            icon="instagram"
          />
          <ButtonLink
            link="https://www.linkedin.com/in/matthewclagett"
            icon="linkedin"
          />
        </SocialLinks>
      </Wrapper>
    </LandingBackground>
  );
};

export default Landing;
