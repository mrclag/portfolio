import React from 'react';
import { AboutWrapper } from '../../styles/About.styles';
import styled from 'styled-components';
import profilePic from '../../images/icecream.png';

import { Button, SectionTitle } from '../../styles/global-styles';

const About = () => {
  return (
    <AboutWrapper>
      <SectionTitle>About</SectionTitle>
      <AboutContentWrapper>
        <AboutMedia>
          <img src={profilePic} alt="TEXT" />
          <br />
          <Button backgroundColor="#e7b31f" color="white">
            <i className="fa fa-download" aria-hidden="true"></i> Download
            Resume
          </Button>
        </AboutMedia>
        <AboutText>
          <h3>BACKGROUND</h3>
          <p>
            I graduated in May 2019 with a Bachelors in Business Administration
            from the University of California, Berkeley. There, I was lucky to
            study many subjects, but most enjoyed coursework in strategy, data
            analytics, and design.
          </p>
          <p>
            I started coding through classes and my internship at Cisco, using R
            and Python almost daily for data analysis. Automating tasks and
            getting insights from data was definitely interesting, but I felt a
            bit limited with the tools I used and the products I could create
            with them. So after graduation, I chose to expand my toolset, open
            more doors of opportunity, and better align myself with my long term
            goals by becoming a software developer.abs In the process, I found I
            can bring together fields I love like design, strategy, data, to
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
      </AboutContentWrapper>
    </AboutWrapper>
  );
};

export default About;

const AboutContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: left;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: 100%;
  }
`;

const AboutMedia = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 20px;
  align-items: center;

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
  background-color: white;
  padding: 20px;
  font-size: 0.8em;
  margin: 0px 20px 0px;
  @media screen and (max-width: 900px) {
    width: 100%;
    margin: 0px 0px 40px;
  }
`;
