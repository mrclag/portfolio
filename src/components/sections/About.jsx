import React from 'react';
import { AboutWrapper } from '../../styles/About.styles';
import styled from 'styled-components';
import profilePic from '../../images/icecream.png';

const About = () => {
  return (
    <AboutWrapper>
      <AboutMedia>
        <img src={profilePic} alt="TEXT" />
        <p style={{ float: 'left' }}>
          <strong>Contact</strong>
        </p>
        <button>Leave a Note</button>
        <button>Download Resume</button>
      </AboutMedia>
      <AboutText>
        <h3>BACKGROUND</h3>
        <p>
          I recently graduated with a Bachelors Degree in Business
          Administration from the University of California Berkeley. In school,
          I had very broad studies, but I most enjoyed coursework in strategy,
          data analytics, and design.
        </p>
        <p>
          Coursework and internships using Python and R introduced me to writing
          code daily. Yet, I yearned for a more creative creative outlet than
          solely doing data analysis. So I chose to become a software developer,
          and found a way to bring together the fields I love, with the power to
          create meaningful products.
        </p>
        <h3>CURRENT</h3>
        <p>
          I'm a full stack web developer, using tools including React.js,
          Node.js, and Python. However, I am curious and quick to learn, so I
          feel confident to join a team using an unfamiliar language.
        </p>
        <p>
          I am looking for a role as a Software Engineer starting in Spring
          2020. Be sure to check out my portfolio, resume, and blog page to
          learn more about me, and please contact me if you are interested in
          working together.
        </p>
      </AboutText>
    </AboutWrapper>
  );
};

export default About;

const AboutMedia = styled.div`
  width: 300px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 20px;

  img {
    width: 280px;
    height: 280px;
  }

  @media screen and (max-width: 900px) {
    height: 100%;
    margin: 0px auto;
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

const AboutText = styled.div`
  width: 600px;
  height: 70vh;
  background-color: white;
  padding: 20px;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
