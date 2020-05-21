import React, { useState } from 'react';
import styled from 'styled-components';
import resume from '../../images/resume_matthew_clagett.pdf';

const SeekingJob = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <SeekingJobStyles>
      <div className="seeking">
        I am currently seeking a role as a software developer.
      </div>
      <div className="seeking text">
        Please download my resume and contact me if you would like to work
        together.
      </div>
      <ResumeButton
        hovered={hovered}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        <a href={resume}>
          <i className="fa fa-download" aria-hidden="true"></i>
          <div className="dl-text">
            <p>Resume</p>
            <br />
          </div>
        </a>
      </ResumeButton>
    </SeekingJobStyles>
  );
};

export default SeekingJob;

const SeekingJobStyles = styled.div`
  background: #fcc21b;
  padding: 20px;
  padding-bottom: 40px;
  padding-top: 40px;

  @media screen and (max-width: 800px) {
    padding-top: 25px;
    padding-bottom: 25px;
  }

  .seeking {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
  .text {
    font-size: 16px;
  }
`;

export const ResumeButton = styled.div`
  margin: auto;
  margin-top: 20px;
  height: 50px;
  width: 140px;
  background-color: ${(props) => (props.hovered ? 'white' : '#375a90')};
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  i {
    font-size: 1.5em;
  }
  a {
    padding-left: 20px;
    display: flex;
    text-decoration: none;
    flex-direction: row;
    padding-top: 12px;
    font-weight: bold;
    color: ${(props) => (props.hovered ? '#375a90' : 'white')};

    .fa-download {
      padding-top: 4px;
    }

    .dl-text {
      padding-top: 4px;
      padding-left: 13px;
      padding-right: 20px;
      line-height: 100%;
      font-size: 1.3em;
      }
    }
  }
`;
