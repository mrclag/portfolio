import styled from 'styled-components';

export const Card = styled.div`
  width: 350px;
  height: 400px;
  color: white;
  margin: 10px;
  background: linear-gradient(45deg, #333333 0%, #375c93 50%);
  font-size: 14px;
  overflow: hidden;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
    0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
  transition: all ease 200ms;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12),
      0 8px 32px -8px hsla(0, 0%, 0%, 0.14),
      0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }

  .card-body {
    padding: 20px;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h2 {
    font-size: 20px;
    transition: all ease-in 100ms;
    text-transform: uppercase;
  }

  @media screen and (max-width: 800px) {
    margin: 10px 0;
  }
`;
