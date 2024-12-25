import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen mt-16 bg-gray-100 flex justify-center ">
      {/* Main Content Container */}
      <div className="max-w-5xl w-full mx-auto py-10 px-4 sm:px-6 lg:px-8 flex ">


        {/* Main Content Area (Posts) */}
        <main className="flex-grow bg-white rounded-lg shadow p-6 overflow-y-auto hide-scrollbar h-[calc(100vh-8rem)]">
          {children} {/* This is where the actual posts will go */}
        </main>

        
      </div>
    </div>
  );
};

const Post = ({ content }) => (
  <div className="mb-4 p-4 border rounded shadow ">
    <p>{content}</p>
  </div>
);


const Apps = () => {
  return (
    <Layout>
      {/* Example Posts */}
      <Post content="This is the first post." />
      <Post content="Another post with more content. This is a longer example to demonstrate how the scrolling works within the main area." />
      <Post content="Yet another post!" />
      <Post content="And one more for good measure." />
      {/* Add more posts here... */}
      <Post content="A very long post to test scrolling. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    
      <Post content="This is the first post." />
      <Post content="Another post with more content. This is a longer example to demonstrate how the scrolling works within the main area." />
      <Post content="Yet another post!" />
      <Post content="And one more for good measure." />

      <Post content="This is the first post." />
      <Post content="Another post with more content. This is a longer example to demonstrate how the scrolling works within the main area." />
      <Post content="Yet another post!" />
      <Post content="And one more for good measure." />
    
    </Layout>
  );
};

export default Apps;