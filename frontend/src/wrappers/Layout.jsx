const Layout = ({ children }) => {
    return (
      <div className="min-h-screen mt-16 bg-gray-100 flex justify-center">
      {/* Main Content Container */}
      <main className="flex-grow bg-white rounded-lg shadow p-6 overflow-y-auto hide-scrollbar h-[calc(100vh-8rem)]">
        {children} {/* This is where the actual posts will go */}
      </main>
      </div>
    );
  };


export default Layout;