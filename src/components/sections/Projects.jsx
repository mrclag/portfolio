import React from 'react';
import ProjectCard from '../ProjectCard';

import emojitetris from '../../images/EmojiTetris.png';
import patternoverlay from '../../images/PatternOverlay.png';
import vocarta from '../../images/Vocarta.png';

import { ProjectsWrapper, CardWrapper } from '../../styles/Projects.styles';
import { SectionTitle } from '../../styles/global-styles';

const Projects = () => {
  return (
    <ProjectsWrapper>
      <SectionTitle style={{ color: '#333333' }}>Projects</SectionTitle>
      <br />
      <CardWrapper>
        <ProjectCard
          imageUrl={vocarta}
          title="Vocarta"
          siteUrl="https://vocarta.com"
          githubUrl="https://github.com/mrclag/vocarta"
          blurb="Search and create flashcards for relevant vocabulary and songs in a new language. Created using React.js, Redux, Firebase, Google Translate API, Wikipedia API, Words API."
        />
        <ProjectCard
          imageUrl={emojitetris}
          title="Emojimino"
          siteUrl="https://emojimino.com"
          githubUrl="https://github.com/mrclag/Emoji-Tetris"
          blurb="Recreation of a classic block puzzle game, with a few twists. Build with React.js Hooks, and includes high score component using Firebase. Responsive / PWA optimized."
        />
        <ProjectCard
          imageUrl={patternoverlay}
          title="Pattern Overlay"
          siteUrl="https://patternoverlay.com"
          githubUrl="https://github.com/mrclag/freakydotpatterns"
          blurb="Based on youtube video 'Freaky Dot Patterns', this tool shows unexpected patterns that emerge when moving overlayed patterns. Build with React.js, mobile friendly."
        />
      </CardWrapper>
    </ProjectsWrapper>
  );
};

export default Projects;
