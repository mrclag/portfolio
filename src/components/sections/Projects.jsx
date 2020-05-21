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
      <SectionTitle >Projects</SectionTitle>
      <br />
      <CardWrapper>
        <ProjectCard
          imageUrl={vocarta}
          title="Vocarta"
          siteUrl="https://vocarta.com"
          githubUrl="https://github.com/mrclag/vocarta"
          blurb="Search and create flashcards for relevant vocabulary in a new language. Created using React.js, Redux, Firebase, Google Translate API, Wikipedia API, Words API."
        />
        <ProjectCard
          imageUrl={emojitetris}
          title="Emoji Tetris"
          siteUrl="https://emojitetris.com"
          githubUrl="https://github.com/mrclag/Emoji-Tetris"
          blurb="One of my favorite classics, with a few twists. Recreated with React.js Hooks, and includes high score component using Firebase. Responsive / PWA optimized."
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
