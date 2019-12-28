import styled from 'styled-components';

export const AboutWrapper = styled.div`
  height: 100vh;
  padding-top: 14vh;
  border: 1px solid black;
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: 100%;
    padding-top: 12vh;
  }
`;
