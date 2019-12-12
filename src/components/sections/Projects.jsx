import React from 'react';
import ProjectCard from '../ProjectCard';
import { ProjectsWrapper, CardWrapper } from '../../styles/Projects.styles';

const Projects = () => {
  return (
    <ProjectsWrapper>
      <h1>Projects</h1>
      <br />
      <CardWrapper>
        <ProjectCard
          imageUrl="https://via.placeholder.com/150"
          title="Emoji Tetris"
          blurb="This is my favorite game, recreated with React Hooks. Added a high score component which uses Firebase"
        />
        <ProjectCard
          imageUrl="https://via.placeholder.com/150"
          title="Image Overlay"
          blurb="Based on youtube video 'Freaky Dot patterns', this tool shows unexpected patterns that emerge when moving overlayed patterns. Build with React.js, fully responsive"
        />
        <ProjectCard
          imageUrl="https://via.placeholder.com/150"
          title="Doter"
          blurb="Social productivity app where users raise pets by buying food from task rewards"
        />
      </CardWrapper>
    </ProjectsWrapper>
  );
};

export default Projects;
