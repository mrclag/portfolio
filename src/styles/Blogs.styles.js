import styled from 'styled-components';

export const BlogsWrapper = styled.div`
  min-height: 100vh;
  padding-top: 14vh;
  text-align: center;
  margin-bottom: 10vh;
  @media screen and (max-width: 800px) {
    justify-content: unset;
    height: 100%;
    padding-top: 12vh;
  }
`;
