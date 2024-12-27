import React from 'react';
import Post from '../components/Post';

const Main = () => {
  return (
    <>
      {/* Example Posts */}
      <Post content="This is the first post." />
      <Post content="Another post with more content. This is a longer example to demonstrate how the scrolling works within the main area." />
      <Post content="Yet another post!" />
      <Post content="And one more for good measure." />
      {/* Add more posts here... */}
      <Post content="A very long post to test scrolling. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    
      <Post content="This is the first post." />
      
      </>
  );
};

export default Main;