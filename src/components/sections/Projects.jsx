import React, { useState } from 'react';
import ProjectCard from '../ProjectCard';
import Modal from '../Modal';
import YouTube from 'react-youtube';

import emojitetris from '../../images/EmojiTetris.png';
import patternoverlay from '../../images/PatternOverlay.png';
import vocarta from '../../images/Vocarta.png';
import shelfspot from '../../images/Shelfspot.png';
import sproulclub from '../../images/sproulclub.png';

import { ProjectsWrapper, CardWrapper } from '../../styles/Projects.styles';
import { SectionTitle } from '../../styles/global-styles';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [videoId, setVideoId] = useState('2g811Eo7K8U');
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <ProjectsWrapper>
      <SectionTitle style={{ color: '#333333' }}>Projects</SectionTitle>
      <br />
      <CardWrapper>
        <ProjectCard
          imageUrl={sproulclub}
          title="sproul.club"
          siteUrl="https://sproul.club"
          githubUrl="https://github.com/mrclag/vocarta"
          blurb="Catalog for UC Berkeley student organizations, used by over 500 clubs. Built with Flask, React.js, Redux.js."
          setShowModal={setShowModal}
          setVideoId={setVideoId}
          videoId="2g811Eo7K8U"
        />
        <ProjectCard
          imageUrl={shelfspot}
          title="ShelfSpot"
          siteUrl="https://shelfspot.herokuapp.com"
          githubUrl="https://github.com/mrclag/vocarta"
          blurb="Digital Bookcase. Organize, summarize, and share your books. Built using React.js, Redux, Node.js, Google Books API, JWT."
          setShowModal={setShowModal}
          setVideoId={setVideoId}
          videoId="2g811Eo7K8U"
        />
        <ProjectCard
          imageUrl={vocarta}
          title="Vocarta"
          siteUrl="https://vocarta.com"
          githubUrl=""
          blurb="Search and create flashcards for relevant vocabulary and songs in a new language. Created using React.js, Redux, Firebase, Google Translate API, Wikipedia API, Words API."
          setShowModal={setShowModal}
          setVideoId={setVideoId}
          videoId="2g811Eo7K8U"
        />
        <ProjectCard
          imageUrl={emojitetris}
          title="Emojimino"
          siteUrl="https://emojimino.com"
          githubUrl="https://github.com/mrclag/Emoji-Tetris"
          blurb="Recreation of a classic block puzzle game, with a few twists. Build with React.js Hooks, and includes high score component using Firebase. Responsive / PWA optimized."
          setShowModal={setShowModal}
          setVideoId={setVideoId}
          videoId="2g811Eo7K8U"
        />
        <ProjectCard
          imageUrl={patternoverlay}
          title="Pattern Overlay"
          siteUrl="https://patternoverlay.com"
          githubUrl="https://github.com/mrclag/freakydotpatterns"
          blurb="Based on youtube video 'Freaky Dot Patterns', this tool shows unexpected patterns that emerge when moving overlayed patterns. Build with React.js, mobile friendly."
          setShowModal={setShowModal}
          setVideoId={setVideoId}
          videoId="2g811Eo7K8U"
        />
      </CardWrapper>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <YouTube videoId={videoId} opts={opts} />
      </Modal>
    </ProjectsWrapper>
  );
};

export default Projects;
