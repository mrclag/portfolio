import styled from 'styled-components';

export const LandingBackground = styled.div`
  height: 100vh;
  background: linear-gradient(45deg, #333333 0%, #375c93 50%);
  background-repeat: no-repeat;
  background-position: center;
`;

export const Wrapper = styled.div`
  text-align: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const Bio = styled.div`
  width: 50vw;
  color: white;
  letter-spacing: 2px;
  text-align: center;
  font-size: 16px;
  img {
    height: 300px;
    width: 300px;
  }
  @media only screen and (max-width: 991px) {
    width: 80vw;
    margin-top: 15px;
    img {
      height: 280px;
      width: 280px;
    }
  }
`;

export const NameTitle = styled.h1`
  font-weight: bold;
  font-size: 44px;
  margin-top: 50px;
`;

export const SocialLinks = styled.div`
  display: flex;
    padding: 30px auto;
    margin-top: 20px;
    justify-content: center;
  }
`;
