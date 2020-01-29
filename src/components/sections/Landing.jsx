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
          Software developer and May 2019 UC Berkeley graduate.
          <br />
          <br />
          Strong in React.js development, data structures and algorithms, and
          other computer science fundamentals. Big thirst for knowledge and
          continuous improvement.
          <br />
          <br />
          <strong>
            Currently looking for a full-time role starting in early 2020.
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
