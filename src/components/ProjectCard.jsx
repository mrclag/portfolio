import React from 'react';
import { Card, ProjectButtons } from '../styles/ProjectCard.styles';
import ButtonLink from './ButtonLink';

const PortfolioCard = ({ imageUrl, title, blurb, siteUrl }) => {
  return (
    <>
      <Card>
        <img src={imageUrl} alt="project card" />
        <div className="card-body">
          <h2>{title}</h2>
          <div className="site-url">{siteUrl}</div>
          <p>{blurb}</p>
        </div>
        <ProjectButtons>
          <ButtonLink icon="github" />
          <ButtonLink icon="home" />
        </ProjectButtons>
      </Card>
    </>
  );
};

export default PortfolioCard;
