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
      <div class="container"
            style={{ cursor: 'pointer' }}
          onClick={() => playVideo(videoId)}>
        <img
          src={imageUrl}
          alt="project card"
        />
        <div class="overlay">
          <a class="icon" title="User Profile">
            <i class="fa fa-play"></i>
          </a>
        </div>
      </div>
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
