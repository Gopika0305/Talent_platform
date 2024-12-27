import React from 'react';
import Post from '../components/Post';

const Main = () => {
  return (
    <>
      <Post title="Hiring Designers" content="This is the first post." name="FunWorld" position="designer"/>
      <Post title="Hiring Designers" content="Yet another post!" name="FunWorld" position="designer"/>
      <Post title="Hiring Designers" content="And one more for good measure." name="FunWorld" position="designer"/>
      <Post title="Hiring Designers" content="This is the first post." name="FunWorld" position="designer"/>
      </>
  );
};

export default Main;