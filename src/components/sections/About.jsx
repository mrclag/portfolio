import React from 'react';
import { AboutWrapper } from '../../styles/About.styles';
import styled from 'styled-components';
import profilePic from '../../images/icecream.png';
import resume from '../../images/resume_matthew_clagett.pdf';

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
            <a href={resume}>
              <i className="fa fa-download" aria-hidden="true"></i> Download
              Resume
            </a>
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
            goals by becoming a software developer.
          </p>
          <h3>CURRENT</h3>
          <p>
            I'm now a stack web developer, using tools including React.js,
            Node.js, and Python. I am quick and eager to learn new technologies,
            expanding my skillset while building cool projects.
          </p>
          <p>
            I am looking for a role as a Software Engineer starting in Spring
            2020. Please download my resume, check out my projects, and contact
            me if you are interested in working together.
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
  width: 350px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 20px;
  align-items: center;
  a {
    text-decoration: none;
    color: white;
  }

  img {
    width: 320px;
    height: 320px;
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
  width: 700px;
  background-color: white;
  padding: 20px;
  font-size: 1em;
  margin: 0px 20px 0px;
  @media screen and (max-width: 900px) {
    width: 100%;
    margin: 0px 0px 40px;
  }
`;
