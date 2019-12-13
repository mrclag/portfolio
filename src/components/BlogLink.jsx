import React from 'react';
import styled from 'styled-components';

const BlogLink = ({ title, subtitle, date, selectedBlog }) => {
  return (
    <BlogListItem selectedBlog={selectedBlog}>
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      <div className="date">{date}</div>
    </BlogListItem>
  );
};

export default BlogLink;

const BlogListItem = styled.div`
  height: 75px;
  width: 300px;
  margin-bottom: 5px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  background-color: ${props => (props.selectedBlog ? 'gold' : '#eee')}
  padding: 10px;

  .title {
    font-size: 1.2em;
  }
  .subtitle {
    font-size: 1em;
  }
  .date {
    font-size: 0.8em;
  }
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;
