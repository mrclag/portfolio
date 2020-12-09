import React from 'react';
import styled from 'styled-components';

import css from '../../images/icons/css.png';
import html from '../../images/icons/html.png';
import javascript from '../../images/icons/javascript.png';
import react from '../../images/icons/react.png';
import django from '../../images/icons/django.png';
import excel from '../../images/icons/excel.png';
import figma from '../../images/icons/figma.png';
import node from '../../images/icons/node-js.png';
import redux from '../../images/icons/redux.png';
import python from '../../images/icons/python.png';
import rprog from '../../images/icons/R.png';
import mongodb from '../../images/icons/mongodb_logo.png';
import heart from '../../images/icons/heart.png';
import improvement from '../../images/icons/improvement.png';
import helpinghand from '../../images/icons/helpinghand.png';
import optimism from '../../images/icons/optimism.png';
import berkeley from '../../images/icons/berkeley.png';
import dvc from '../images/icons/dvc_seal.jpg';
import typesript from '../images/icons/TS.png';
import jest from '../images/icons/jest.png';
import sass from '../images/icons/sass.png';
import git from '../images/icons/git.png';
import styledComponents from '../images/icons/styled-components.png';
import postgres from '../images/icons/postgres.png';
import illustrator from '../images/icons/illustrator.png';
import xd from '../images/icons/xd.png';
import docker from '../images/icons/docker.png';
import webpack from '../images/icons/webpack.png';

const About = () => {
  return (
      <AboutContentWrapper>
        <div className='about-content'>
          <div className="section">
            <div className="section-title">Education</div>
            <div className="education">
              <img src={berkeley} alt="" />
              <div className="edu-content">
                <div className="university">
                  University of California, Berkeley
                </div>
                <div className="degree">B.S. in Business Administration (May 2019)</div>
                <div className="degree">
                  Certificate in Technology Entrepreneurship
                </div>
                <div className="focus">
                  Focus in analytics, design, and strategy
                </div>
              </div>
            </div>
            <div style={{marginTop: '20px'}} className="education">
              <img src={dvc} alt="" />
              <div className="edu-content">
                <div className="university">
                  Diablo Valley College
                </div>
                <div className="degree">A.A. in Communication Studies (May 2016)</div>
                <div className="degree">
                  A.A. in Spanish (May 2016)
                </div>
                <div className="focus">
                </div>
              </div>
            </div>
          </div>

          <div className="section skills">

            <div className="section-title">My Technical Skills</div>
            <div className="skill-section">
              <div className="skill-section-title">
                Languages
              </div>
              <div className="top-skills">
                <div className='skill'>
                  <img src={typesript} alt="" />
                  <span>Typescript</span>
                </div>
                <div className='skill'>
                  <img src={javascript} alt="" />
                  <span>Javascript</span>
                </div>
                <div className='skill'>
                  <img src={python} alt="" />
                  <span>Python</span>
                </div>
                <div className='skill'>
                  <img src={rprog} alt="" />
                  <span>R</span>
                </div>
              </div>
            </div>

            <div className="skill-section">
                
              <div className="skill-section-title">
                Frontend
              </div>
              <div className="top-skills">
                <div className='skill'>
                  <img src={react} alt="" />
                  <span>React.js</span>
                </div>
                <div className='skill'>
                  <img src={redux} alt="" />
                  <span>Redux</span>
                </div>
                <div className='skill'>
                  <img src={html} alt="" />
                  <span>HTML</span>
                </div>
                <div className='skill'>
                  <img src={css} alt="" />
                  <span>CSS</span>
                </div>
                <div className='skill'>
                  <img src={sass} alt="" />
                  <span>SASS</span>
                </div>
                <div className='skill'>
                  <img src={styledComponents} alt="" />
                  <span>Styled Components</span>
                </div>
                <div className='skill'>
                  <img src={jest} alt="" />
                  <span>Jest/Enzyme</span>
                </div>
                <div className='skill'>
                  <img src={webpack} alt="" />
                  <span>Webpack</span>
                </div>
              </div>
            </div>

            <div className="skill-section">
              
              <div className="skill-section-title">
                Backend
              </div>
              <div className="top-skills">
                <div className='skill'>
                  <img src={node} alt="" />
                  <span>Node.js</span>
                </div>
                {/* <div className='skill'>
                  <img src={django} alt="" />
                  <span>Django</span>
                </div> */}
                <div className='skill'>
                  <img src={mongodb} alt="" />
                  <span>MongoDB</span>
                </div>
                <div className='skill'>
                  <img src={postgres} alt="" />
                  <span>Postgres</span>
                </div>
                <div className='skill'>
                  <img src={docker} alt="" />
                  <span>Docker</span>
                </div>
              </div>
              
            </div>

            <div className="skill-section">
              
              <div className="skill-section-title">
                Tools/Other
              </div>
              <div className="top-skills">
                <div className='skill'>
                    <img src={git} alt="" />
                    <span>Git</span>
                  </div>
                <div className='skill'>
                  <img src={excel} alt="" />
                  <span>Excel</span>
                </div>
                <div className='skill'>
                  <img src={figma} alt="" />
                  <span>Figma</span>
                </div>
                <div className='skill'>
                  <img src={xd} alt="" />
                  <span>Adobe XD</span>
                </div>
                <div className='skill'>
                  <img src={illustrator} alt="" />
                  <span>Adobe Illustrator</span>
                </div>
              </div>
            </div>
            
          </div>

          <div className="section values">
            <div className="section-title">My Values</div>
            <div className='value'>
              <img src={heart} alt="" />
              Health and Sustainability
            </div>
            <div className='value'>
              <img src={helpinghand} alt="" />
              Serving and Adding Value to Others
            </div>
            <div className='value'>
              <img src={improvement} alt="" />
              Continuous Improvement
            </div>
            <div className='value'>
              <img src={optimism} alt="" />
              Practical Optimism
            </div>
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
        </div>
      </AboutContentWrapper>
  );
};

export default About;

const AboutContentWrapper = styled.div`
  padding-top: calc(14vh - 50px);
  background-color: #fcfcfd;;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: 100%;
    padding-top: calc(12vh - 50px);
  }

  .about-content {
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: row;
    width: 100vw;
    font-size: 1.3em;
    margin: auto;
    padding-bottom: 80px;
    border-bottom: 1px solid #ddd;
    justify-content: center;

    p {
      margin-bottom: 15px;
    }

    @media screen and (max-width: 1100px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .section {
    margin-bottom: 40px;
    min-width: 400px;
    max-width: 600px;
    .section-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 15px;
      font-style: underline;
    }
    @media screen and (max-width: 500px) {
      min-width: unset;
      max-width: unset;
      width: 95vw;
    }
  }

  .education {
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    width: 100%;
    margin-left: 10px;
    @media screen and (max-width: 800px) {      
      margin-left: 0px;
    }
    .university {
      color: #354b6c;
      font-weight: bold;
    }
    .edu-content {
      display: flex;
      flex-direction: column;
      text-align: left;
      margin: 0px;
    }
    img {
      height: 50px;
      width: 50px;
      margin-top: 15px;
      margin-right: 10px;
    }
    .degree {
      font-style: unset;
      font-size: 14px;
    }
    .focus {
      font-style: italic;
      font-size: 14px;
    }
  }

  .skill-section {
    position: relative;
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
    /* align-items: center; */
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
    .skill-section-title {
      text-align: left;
      min-width: 100px;
      font-size: 14px;
      font-weight: bold;
      padding-top: 3px;
      @media screen and (max-width: 800px) {
        text-align: center;
        font-size: 16px;
        margin: 5px;
      } 
    }
  }

  .top-skills {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* align-items: center; */
    /* justify-content: center; */
    @media screen and (max-width: 800px) {
      align-items: center;
      justify-content: center;
    }
    
    .skill {
      color: #555;
      
      /* margin: auto; */
      margin: 3px;
      padding: 5px 15px;
      border: 1px solid #ddd;
      border-radius: 20px;
      font-size: 14px;
      
      img {
        height: 20px;
        width: 20px;
        margin-right: 8px;
      }
    }
  }
  .values {
    display: flex;
    flex-direction: column;
    
    .value {
      color: #555;
      border: 1px solid #ddd;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 14px;
      margin: auto;
      margin-top: 0px;
      margin-bottom: 5px;
    }
    img {
      height: 20px;
      width: 20px;
      margin-right: 10px;
    }
  }
`;

