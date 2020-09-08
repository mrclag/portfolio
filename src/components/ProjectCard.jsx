import React from 'react';
import { Card, ProjectButtons } from '../styles/ProjectCard.styles';
import ButtonLink from './ButtonLink';

const PortfolioCard = ({
  imageUrl,
  title,
  blurb,
  siteUrl,
  githubUrl,
  setShowModal,
  setVideoId,
  videoId,
}) => {
  const playVideo = (id) => {
    setVideoId(videoId);
    setShowModal(true);
  };

  return (
    <Card>
      <img
        src={imageUrl}
        style={{ cursor: 'pointer' }}
        alt="project card"
        onClick={() => playVideo(videoId)}
      />
      <div className="card-body">
        <h2>{title}</h2>
        <a href={siteUrl} target="__blank" id="site-url">
          {siteUrl.slice(8)}
        </a>
        <p>{blurb}</p>
      </div>
      <ProjectButtons>
        <ButtonLink icon="github" link={githubUrl} />
        <ButtonLink icon="home" link={siteUrl} />
      </ProjectButtons>
    </Card>
  );
};

export default PortfolioCard;
