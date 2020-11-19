import React from 'react';
import styled from 'styled-components';

import css from '../../images/icons/css.png';
import html from '../../images/icons/html.png';
// import javascript from '../../images/icons/javascript.png';
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
                <div className="degree">B.S. in Business Administration</div>
                <div className="degree">
                  Certificate in Technology Entrepreneurship
                </div>
                <div className="focus">
                  Focus in analytics, design, and strategy
                </div>
              </div>
            </div>
          </div>

          <div className="section skills">
            <div className="section-title">Top Technical Skills</div>
            <div className="top-skills">
              <div>
                <img src={react} alt="" />
                <div>React.js</div>
              </div>
              <div>
                <img src={node} alt="" />
                <div>Node.js</div>
              </div>
              <div>
                <img src={redux} alt="" />
                <div>Redux</div>
              </div>
              <div>
                <img src={python} alt="" />
                <div>Python</div>
              </div>
              <div>
                <img src={django} alt="" />
                <div>Django</div>
              </div>
              <div>
                <img src={mongodb} alt="" />
                <div>MongoDB</div>
              </div>
              <div>
                <img src={html} alt="" />
                <div>HTML</div>
              </div>
              <div>
                <img src={css} alt="" />
                <div>CSS</div>
              </div>
              <div>
                <img src={rprog} alt="" />
                <div>R</div>
              </div>
              <div>
                <img src={excel} alt="" />
                <div>Excel</div>
              </div>
              <div>
                <img src={figma} alt="" />
                <div>Figma</div>
              </div>
            </div>
          </div>

          <div className="section values">
            <div className="section-title">My Values</div>
            <img src={heart} alt="" />
            Health and Sustainability
            <br />
            <img src={helpinghand} alt="" />
            Serving and Adding Value to Others
            <br />
            <img src={improvement} alt="" />
            Continuous Improvement
            <br />
            <img src={optimism} alt="" />
            Practical Optimism
            <br />
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
    width: 80vw;
    font-size: 1.3em;
    margin: 0 auto;
    padding-bottom: 80px;
    border-bottom: 1px solid #ddd;

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
    width: 450px;
    .section-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
      font-style: underline;
    }
    @media screen and (max-width: 500px) {
      
      width: 95vw;
    }
  }

  .education {
    display: flex;
    flex-direction: row;
    justify-content: center;
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
      font-style: italic
      font-size: 14px;
    }
  }

  .top-skills {
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

