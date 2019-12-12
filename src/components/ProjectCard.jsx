import React from 'react';
import { Card } from '../styles/ProjectCard.styles';

const PortfolioCard = ({ imageUrl, title, blurb, siteUrl }) => {
  return (
    <>
      <Card>
        <img src={imageUrl} />
        <div className="card-body">
          <h2>{title}</h2>
          <div className="site-url">{siteUrl}</div>
          <p>{blurb}</p>
        </div>
      </Card>
    </>
  );
};

export default PortfolioCard;
