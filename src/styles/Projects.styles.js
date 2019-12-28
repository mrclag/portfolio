import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
  padding-top: 14vh;
  min-height: 100vh;
  text-align: center;
  background: #93a3b1;
  color: white;
  @media screen and (max-width: 800px) {
    padding-top: 12vh;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;
