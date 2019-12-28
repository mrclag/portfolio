import React, { useState } from 'react';

import { BlogsWrapper } from '../../styles/Blogs.styles';
import { SectionTitle } from '../../styles/global-styles';

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

  return (
    <BlogsWrapper>
      <SectionTitle>Blogs</SectionTitle>
      <br />
      <BlogContentWrapper>
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
      </BlogContentWrapper>
    </BlogsWrapper>
  );
};

export default Blogs;

const BlogContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  @media screen and (max-width: 800px) {
    justify-content: unset;
    align-items: center;
    flex-direction: column;
    height: 100%;
  }
`;

const BlogList = styled.div`
  height: 300px;
  overflow-y: scroll;
  width: 320px;
  background: white;
  padding-right: 12px;
  border: 1px solid
  margin: 0px 20px 0px;
  @media screen and (max-width: 800px) {
    height: 100%;
    width: 100vw;
  }
`;

const BlogPost = styled.div`
  min-height: 70vh;
  width: 600px;
  border: 1px solid black;
  margin: 0px 20px 0px;
  padding: 20px 40px 20px;

  @media screen and (max-width: 800px) {
    width: 100vw;
    margin: unset;
    height: 100%;
    padding: 10px 20px 10px;
  }
`;
