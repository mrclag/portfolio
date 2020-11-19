import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
  padding-top: calc(18vh - 50px);
  min-height: 95vh;
  text-align: center;
  /* background: #adbece; */
  background: #fcfcfd;
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
  width: 80vw;
  max-width: 1300px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    max-width: unset;
    width: unset;
  }
`;
