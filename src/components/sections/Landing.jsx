import React from 'react';
import ButtonLink from '../ButtonLink';
import Background from '../Background';
import profilePic from '../../images/icecream.png';

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
          <NameTitle>Hi, I'm Matt</NameTitle>
          <br />
          <img src={profilePic} alt="" style={{border: '1px solid #375c93', borderRadius: '50%'}}/>
          <br />
          <br />
          Full-Stack Software Developer
          <br />
          <br />
          May 2019 UC Berkeley Graduate.
          <br />
          <br />
          Ironman Competitor
          {/* <br />
          <br />
          Triathlete */}
          {/* Strong in React.js development, data structures and algorithms, and
          other computer science fundamentals. Big thirst for knowledge and
          continuous improvement. */}
          {/* <br />
          <br />
          <strong>
          Currently seeking a full-time software development role.
          </strong> */}
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