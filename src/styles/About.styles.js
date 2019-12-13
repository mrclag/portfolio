import styled from 'styled-components';

export const AboutWrapper = styled.div`
  height: 100vh;
  padding-top: 10vh;
  border: 1px solid black;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: 100%;
  }
`;
