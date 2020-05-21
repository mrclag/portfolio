import React, { useState } from 'react';
import { AboutWrapper } from '../../styles/About.styles';
import styled from 'styled-components';

import css from '../../images/icons/css.png';
import html from '../../images/icons/html.png';
import javascript from '../../images/icons/javascript.png';
import react from '../../images/icons/react.png';
import django from '../../images/icons/django.png';
import excel from '../../images/icons/excel.png';
import figma from '../../images/icons/figma.png';
import postgres from '../../images/icons/postgres.png';
import node from '../../images/icons/node-js.png';
import redux from '../../images/icons/redux.png';
import python from '../../images/icons/python.png';
import rprog from '../../images/icons/R.png';
import heart from '../../images/icons/heart.png';
import improvement from '../../images/icons/improvement.png';
import helpinghand from '../../images/icons/helpinghand.png';
import optimism from '../../images/icons/optimism.png';
import resume from '../../images/resume_matthew_clagett.pdf';


import { SectionTitle } from '../../styles/global-styles';

const About = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <AboutWrapper>
      <SectionTitle>About</SectionTitle>
      <AboutContentWrapper>
        {/* <AboutMedia>
          <img src={profilePic} alt="TEXT" />
        </AboutMedia> */}
        <AboutText>
        <strong>Education</strong>
        <p>
          University of California, Berkeley 
          <br/>
          <div className='degree'>
          B.S. in Business Administration
          </div>
          <div className='focus'>
          Focus in analytics, design, and strategy
          </div>
        </p>

        <strong>Top Technical Skills</strong>
        <p>
        <div className='skills'>
          <div>
            <img src={react} alt=""/>
            <div>React.js</div>
          </div>
          <div>
            <img src={node} alt=""/>
            <div>Node.js</div>
          </div>
          <div>
            <img src={redux} alt=""/>
            <div>Redux</div>
          </div>
          <div>
            <img src={python} alt=""/>
            <div>Python</div>
          </div>
          <div>
            <img src={django} alt=""/>
            <div>Django</div>
          </div>
          <div>
            <img src={html} alt=""/>
            <div>HTML</div>
          </div>
          <div>
            <img src={css} alt=""/>
            <div>CSS</div>
          </div>
          <div>
            <img src={postgres} alt=""/>
            <div>PostgreSQL</div>
          </div>
          <div>
            <img src={rprog} alt=""/>
            <div>R</div>
          </div>
          <div>
            <img src={excel} alt=""/>
            <div>Excel</div>
          </div>
          <div>
            <img src={figma} alt=""/>
            <div>Figma</div>
          </div>
        </div>
        </p>

        <div className="secton values">
          <strong>My Values</strong>
          <br/>
          <img src={heart} alt=""/>
          Health and Sustainability
          <br/>
          <img src={helpinghand} alt=""/>
          Serving and Adding Value to Others
          <br/>
          <img src={improvement} alt=""/>
          Continuous Improvement
          <br/>
          <img src={optimism} alt=""/>
          Practical Optimism
          <br/>
        </div>

        
          {/* <p>
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
            I am looking for a role as a Software Engineer. Please download my resume, check out my projects, and contact
            me if you are interested in working together.
          </p> */}
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
  strong {
    font-size: 24px;
  }
  .degree {
    font-style: italic
  }
  .focus {
    font-style: italic
    font-size: 14px;
  }

  .skills {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    
    &>*{
      color: black;
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 10px;
      @media screen and (min-width: 800px){
        font-size: 14px;
      }
      img {
        height: 40px;
        width: 40px;
      }
    }
  }
  .values {
    &>*{
      
    }
      img {
        height: 20px;
        width: 20px;
        margin-right: 10px;
      }
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
  width: 600px;
  background-color: white;
  padding: 20px;
  text-align: center;
  font-size: 1.3em;
  p {
    margin-bottom: 15px;
  }

  margin: 20px 20px 0px;
  @media screen and (max-width: 900px) {
    width: 100%;
    font-size: 1em;
    margin: 0px 0px 40px;
  }
`;
