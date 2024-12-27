import React from 'react';
import Post from '../components/Post';

const Main = () => {
  return (
    <>
      {/* Example Posts */}
      <Post title="Hiring Designers" content="This is the first post." name="FunWorld" position="designer"/>
      <Post content="Another post with more content. This is a longer example to demonstrate how the scrolling works within the main area." />
      <Post content="Yet another post!" />
      <Post content="And one more for good measure." />
      {/* Add more posts here... */}
      <Post content="This is the first post."/>
      </>
  );
};

export default Main;