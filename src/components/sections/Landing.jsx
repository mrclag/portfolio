import React from 'react';
import ButtonLink from '../ButtonLink';
import Background from '../Background';
import profilePic from '../../images/profilepic.png';

import {
  Wrapper,
  Bio,
  SocialLinks,
  NameTitle,
  LandingBackground,
} from '../../styles/Landing.styles.js';

const Landing = () => {
  return (
    <LandingBackground>
      <Background />
      <Wrapper>
        <Bio>
          <NameTitle>Hi, I'm Matt</NameTitle>
          <br />
          <img
            src={profilePic}
            alt=""
            style={{ border: '1px solid #375c93', borderRadius: '50%' }}
          />
          <br />
          <br />
          Full-Stack Software Developer
          <br />
          <br />
          May 2019 UC Berkeley Graduate.
          <br />
          <br />
          Ironman Competitor
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
