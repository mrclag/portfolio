import styled from 'styled-components';

export const NavStyles = styled.div`
font-weight: bold;
  z-index: 999;
  border: none;
  font-size: 1.25em;
  justify-content: center;
  position: fixed;
  display: flex;
  left: 50%;
  min-width: 100vw;
  transform: translateX(-50%);
  font-size: 1.5em;

  transition: all 0.5s ease;
  .navItem {
    padding: 20px;
    &:hover {
      transform: translateY(2px);
    }
  }
  a {
    cursor: pointer;
    color: white;
    text-decoration: none;

    &:hover {
      color: #fcc21b;
      transition: all 0.5s ease;
      text-shadow: 0 0 10px #d9a719;
    }
    &:hover .fa {
      color: #d9a719;
      text-shadow: 0 0 10px #d9a719;
      transition: all 0.5s ease;
    }
  }

  @media screen and (max-width: 800px) {
    .navbarName {
      display: none;
    }
    font-size: 2.5em;
  }
}

`;
