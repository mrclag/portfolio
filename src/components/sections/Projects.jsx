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

import { p1Sproul, p2Shelfspot, p3Vocarta, p4Emojimino, p5PatternOverlay } from './projectData'


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
          githubUrl="https://github.com/sproul-club/clubwebsite"
          blurb={p1Sproul}
          setShowModal={setShowModal}
          setVideoId={setVideoId}
          videoId="Hxrdwvqc35A"
        />
        <ProjectCard
          imageUrl={shelfspot}
          title="Shelfspot"
          siteUrl="https://shelfspot.herokuapp.com"
          githubUrl="https://github.com/mrclag/shelfspot"
          blurb={p2Shelfspot}
          setShowModal={setShowModal}
          setVideoId={setVideoId}
          videoId="jZPUBRMqrfQ"
        />
        <ProjectCard
          imageUrl={vocarta}
          title="Vocarta"
          siteUrl="https://vocarta.com"
          githubUrl="https://github.com/mrclag/vocarta"
          blurb={p3Vocarta}
          setShowModal={setShowModal}
          setVideoId={setVideoId}
          videoId="7CkhpNriTf4"
        />
        <ProjectCard
          imageUrl={emojitetris}
          title="Emojimino"
          siteUrl="https://emojimino.com"
          githubUrl="https://github.com/mrclag/Emoji-Tetris"
          blurb={p4Emojimino}
          setShowModal={setShowModal}
          setVideoId={setVideoId}
          videoId="Q4vaGVIDdSc"
        />
        <ProjectCard
          imageUrl={patternoverlay}
          title="Pattern Overlay"
          siteUrl="https://patternoverlay.com"
          githubUrl="https://github.com/mrclag/freakydotpatterns"
          blurb={p5PatternOverlay}
          setShowModal={setShowModal}
          setVideoId={setVideoId}
          videoId="8qnJ3KM82-k"
        />
      </CardWrapper>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <YouTube videoId={videoId} opts={opts} />
      </Modal>
    </ProjectsWrapper>
  );
};

export default Projects;
