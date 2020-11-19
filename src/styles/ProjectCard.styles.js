import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  width: 350px;
  height: 450px;
  color: black;
  margin: 10px;
  /* background: linear-gradient(45deg, #333333 0%, #375c93 50%); */
  background: white;
  font-size: 14px;
  overflow: hidden;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
    0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
  transition: all ease 200ms;
  border-radius: 10px;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12),
      0 8px 32px -8px hsla(0, 0%, 0%, 0.14),
      0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }

  .card-body {
    padding: 0 20px 0 20px;
  }
  p {
    font-size: 1.1em;
    color: #333;
    margin-top: 10px;
  }

  }
  #site-url {
    padding-bottom: 10px;
    color: cornflowerblue;
    font-size: 1em;
    /* font-style: italic; */
  }

  img {
    width: 350px;
    height: 200px;
    object-fit: cover;
    transform: translateX(-15px);
  }
    .container {
    position: relative;
    width: 100%;
    max-width: 400px;
  }
  .image {
    width: 100%;
    height: auto;
  }

/* The overlay effect (full height and width) - lays on top of the container and over the image */
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .3s ease;
  background-color: #333;
}

/* When you mouse over the container, fade in the overlay icon*/
.container:hover .overlay {
  opacity: 0.6;
}

/* The icon inside the overlay is positioned in the middle vertically and horizontally */
.icon {
  color: white;
  font-size: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

/* When you move the mouse over the icon, change color */
.fa-user:hover {
  color: #eee;
}

  h2 {
    font-size: 22px;
    color: darkslateblue;
    margin-bottom: 3px;
    transition: all ease-in 100ms;
    /* text-transform: uppercase; */
  }

  @media screen and (max-width: 800px) {
    margin: 10px 0;
  }
`;

export const ProjectButtons = styled.div`
  position: absolute;
  top: 46%;
  right: 5px;
  justify-content: center;
`;
