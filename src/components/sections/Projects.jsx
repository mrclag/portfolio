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
          siteUrl="emojitetris.com"
          githubUrl=""
          blurb="One of my favorite classics, with a few twists. Recreated with React.js Hooks, and includes high score component using Firebase. Responsive / PWA optimized."
        />
        <ProjectCard
          imageUrl="https://via.placeholder.com/150"
          title="Image Overlay"
          siteUrl="imageoverlay.com"
          blurb="Based on youtube video 'Freaky Dot Patterns', this tool shows unexpected patterns that emerge when moving overlayed patterns. Build with React.js, mobile friendly."
        />
        <ProjectCard
          imageUrl="https://via.placeholder.com/150"
          title="Doter"
          siteUrl="doterquest.com"
          blurb="Social productivity app where users raise pets by buying food from task rewards"
        />
      </CardWrapper>
    </ProjectsWrapper>
  );
};

export default Projects;
