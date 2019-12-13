import React, { useState } from 'react';
import { BlogsWrapper } from '../../styles/Blogs.styles';
import BlogLink from '../BlogLink';

import Blog1 from '../blogs/Blog1';
import Blog2 from '../blogs/Blog2';
import Blog3 from '../blogs/Blog3';

import styled from 'styled-components';

const COMPONENT_MAP = {
  blog1: <Blog1 />,
  blog2: <Blog2 />,
  blog3: <Blog3 />
};

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState('blog1');

  const onClickBlog = blog => {
    setSelectedBlog(blog);
  };

  return (
    <BlogsWrapper>
      <BlogTitle>Blogs</BlogTitle>
      <BlogList>
        <div onClick={() => setSelectedBlog('blog1')}>
          <BlogLink
            title="Why you should hire me"
            subtitle="and why not"
            date="12/12/2019"
            selectedBlog={selectedBlog === 'blog1'}
          />
        </div>
        <div onClick={() => setSelectedBlog('blog2')}>
          <BlogLink
            title="Blah blah blog"
            subtitle="part 1"
            date="12/12/2019"
            selectedBlog={selectedBlog === 'blog2'}
          />
        </div>
        <div onClick={() => setSelectedBlog('blog3')}>
          <BlogLink
            title="Lessons from my favorite classes"
            subtitle="Undergrad in 2000 words"
            date="12/12/2019"
            selectedBlog={selectedBlog === 'blog3'}
          />
        </div>
      </BlogList>
      <BlogPost>{COMPONENT_MAP[selectedBlog]}</BlogPost>
    </BlogsWrapper>
  );
};

export default Blogs;

const BlogList = styled.div`
  height: 70vh;
  width: 300px;
  background: white;
  margin: 0px 20px 0px;
  @media screen and (max-width: 800px) {
    height: 100%;
    width: 100vw;
  }
`;

const BlogPost = styled.div`
  height: 70vh;
  width: 600px;
  border: 1px solid black;
  margin: 0px 20px 0px;
  padding: 0 20px 0;

  @media screen and (max-width: 800px) {
    width: 100vw;
    margin: unset;
    height: 100%;
  }
`;

const BlogTitle = styled.h1`
  position: absolute;
  margin-top: -50px;
  @media screen and (max-width: 800px) {
  }
`;
