import React from 'react';
import ButtonLink from '../ButtonLink';
import Background from '../Background';

import {
  Wrapper,
  Bio,
  SocialLinks,
  NameTitle,
  LandingBackground
} from '../../styles/Landing.styles.js';

const Landing = () => {
  return (
    <LandingBackground>
      <Background />
      <Wrapper>
        <Bio>
          <NameTitle>MATTHEW CLAGETT</NameTitle>
          <br />
          Full stack web developer.
          <br />
          <br />
          May 2019 UC Berkeley Business Administration graduate.
          <br />
          <br />
          <strong>
            Looking for a full-time software development position starting in
            early 2020.
          </strong>
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
