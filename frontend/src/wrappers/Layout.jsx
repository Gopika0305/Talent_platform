const Layout = ({ children }) => {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center">

        <div className="max-w-5xl w-full mx-auto py-10 px-4 sm:px-6 lg:px-8 flex ">

      {/* Main Content Container */}
      <main className="flex-grow bg-white rounded-lg shadow mt-12 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 overflow-y-auto hide-scrollbar h-[calc(100vh-8rem)]">
        {children} {/* This is where the actual posts will go */}
      </main>

      </div>
      </div>
    );
  };


export default Layout;