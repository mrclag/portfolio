import React from 'react';
import styled from 'styled-components';

const ButtonLink = ({ link, icon, color }) => {
  return (
    <Wrapper color={color}>
      <a href={link} target="_blank" rel="noreferrer noopener">
        <i className={`fa fa-${icon} fa-2x`} aria-hidden="true"></i>
      </a>
    </Wrapper>
  );
};

export default ButtonLink;

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin: 5px 5px;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid ${(props)=> props.color === 'white' ? 'white' : "#8f8f8f"};
  float: left;
  transition: all 0.5s ease;

  .fa {
    color:${(props)=> props.color === 'white' ? 'white' : "#8f8f8f"};
    margin-top: 3px;
    transition: all 0.5s ease;
  }
  &:hover {
    border: 3px solid #d9a719;
    box-shadow: 0 0 10px #d9a719;
    transition: all 0.5s ease;
  }
  &:hover .fa {
    color: #d9a719;
    text-shadow: 0 0 10px #d9a719;
    transition: all 0.5s ease;
  }
`;
