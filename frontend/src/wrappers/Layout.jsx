const Layout = ({ children }) => {
    return (
      <div>

        <div>

      {/* Main Content Container */}
      <main className="mt-[100px]">
        {children} {/* This is where the actual posts will go */}
      </main>

      </div>
      </div>
    );
  };


export default Layout;