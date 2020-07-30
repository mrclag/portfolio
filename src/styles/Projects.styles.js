import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
  padding-top: calc(18vh - 50px);
  min-height: 95vh;
  text-align: center;
  background: #adbece;
  color: white;
  @media screen and (max-width: 800px) {
    padding-top: calc(12vh - 50px);
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  flex-wrap: wrap;
  margin: auto;
  max-width: 70vw;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    max-width: unset;
  }
`;
