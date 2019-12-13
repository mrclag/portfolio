import styled from 'styled-components';

export const BlogsWrapper = styled.div`
  height: 100vh;
  padding-top: 20vh;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 800px) {
    justify-content: unset;
    align-items: center;
    flex-direction: column;
    height: 100%;
  }
`;
