import React from 'react';
import { Card, ProjectButtons } from '../styles/ProjectCard.styles';
import ButtonLink from './ButtonLink';

const PortfolioCard = ({ imageUrl, title, blurb, siteUrl, githubUrl }) => {
  return (
    <Card>
      <img src={imageUrl} alt="project card" />
      <div className="card-body">
        <h2>{title}</h2>
        <div className="site-url">{siteUrl.slice(8)}</div>
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
