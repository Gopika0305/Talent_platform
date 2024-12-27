import React from 'react';
import Post from '../components/Post';

const Main = () => {
  return (
    <>
      <Post title="Hiring Designers" content="This is the first post." name="FunWorld" position="designer"/>
      <Post content="Yet another post!" />
      <Post content="And one more for good measure." />
      <Post content="This is the first post."/>
      </>
  );
};

export default Main;