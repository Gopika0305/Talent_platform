const Layout = ({ children }) => {
    return (
      <div className="max-h-screen mt-12 bg-gray-100 flex justify-center">

        <div className="max-w-5xl w-full mx-auto py-10 px-4 sm:px-6 lg:px-8 flex ">

      {/* Main Content Container */}
      <main className="flex-grow bg-white rounded-lg shadow p-6 overflow-y-auto hide-scrollbar h-[calc(100vh-8rem)]">
        {children} {/* This is where the actual posts will go */}
      </main>

      </div>
      </div>
    );
  };


export default Layout;