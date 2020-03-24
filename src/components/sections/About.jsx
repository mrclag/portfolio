import React, { useState } from 'react';
import { AboutWrapper } from '../../styles/About.styles';
import styled from 'styled-components';
import profilePic from '../../images/icecream.png';
import resume from '../../images/resume_matthew_clagett.pdf';

import { SectionTitle } from '../../styles/global-styles';

const About = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <AboutWrapper>
      <SectionTitle>About</SectionTitle>
      <AboutContentWrapper>
        <AboutMedia>
          <img src={profilePic} alt="TEXT" />
          <br />
          <ResumeButton
            hovered={hovered}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
          >
            <a href={resume}>
              <i className="fa fa-download fa-2x" aria-hidden="true"></i>
              <div className="dl-text">
                <p>Download</p>
                <p>Resume</p>
                <br />
              </div>
            </a>
          </ResumeButton>
        </AboutMedia>
        <AboutText>
          <p>
            I'm a full-stack web developer, using tools including React.js,
            Node.js, and Python. I recently graduated from UC Berkeley with a
            B.S. in Business Administration, and a focus in data analytics.
          </p>

          <p>
            I started programming daily through classes and an internship at
            Cisco, using R and Python. I found an insistent desire to learn and
            do more with code, and so dedicated my time after graduation
            watching computer science lectures and building personal projects.
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

const ResumeButton = styled.div`
  margin-top: 5px;
  height: 60px;
  width: 160px;
  background-color: ${props => (props.hovered ? 'white' : '#eeb609')};
  border-radius: 5px;
  border: 1px solid #eeb609;
  outline: none;
  cursor: pointer;

  a {
    padding-left: 20px;
    display: flex;
    text-decoration: none;
    flex-direction: row;
    padding-top: 12px;
    color: ${props => (props.hovered ? '#eeb609' : 'white')};

    .fa-download {
      padding-top: 4px;
    }

    .dl-text {
      padding-left: 13px;
      padding-right: 20px;
      line-height: 80%;
      font-size: 1.15em;

      p {
        margin-bottom: 5px;
        text-align: center;
        &:last-of-type {
          font-size: 1.22em;
        }
      }
    }
  }
`;

const AboutText = styled.div`
  width: 700px;
  background-color: white;
  padding: 20px;
  font-size: 1.2em;

  margin: 40px 20px 0px;
  @media screen and (max-width: 900px) {
    width: 100%;
    font-size: 1em;
    margin: 0px 0px 40px;
  }
`;
