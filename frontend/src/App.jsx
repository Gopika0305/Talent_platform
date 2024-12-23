import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import Account from "./components/Account";
import Findtalent from "./components/Findtalent";
import Jobs from "./components/Jobs";
import Network from "./components/Network";
import Notifications from "./components/Notifications";
import Userimage from "../src/assets/user.jpg"

const App = () => {
  return (
    <>
      <Router>
        <div>
          <nav class="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            <div class="container mx-auto px-6 py-3 flex justify-between items-center">
              <Link to="/" class="text-4xl text-gray-700 hover:text-indigo-600">
                TalentMatch
              </Link>

              <div class="flex items-center space-x-6">
                <Link to="/" class="text-gray-700 hover:text-indigo-600">
                  Home
                </Link>
                <Link
                  to="/findtalent"
                  class="text-gray-700 hover:text-indigo-600"
                >
                  {" "}
                  <i class="fas fa-briefcase mr-1"></i>
                  Find Talent
                </Link>
                <Link to="/jobs" class="text-gray-700 hover:text-indigo-600">
                  <i class="fas fa-users mr-1"></i>
                  Jobs
                </Link>
                <Link to="/network" class="text-gray-700 hover:text-indigo-600">
                  <i class="fas fa-users mr-1"></i>
                  Network
                </Link>
                <Link
                  to="/Notifications"
                  class="text-gray-700 hover:text-indigo-600"
                >
                  <i class="fas fa-bell mr-1"></i>
                  Notifications
                </Link>

                <img
                  id="avatarButton"
                  type="button"
                  data-dropdown-toggle="userDropdown"
                  data-dropdown-placement="bottom-start"
                  class="w-10 h-10 rounded-full cursor-pointer"
                  src={Userimage}
                  alt="User dropdown"
                />

                {/* <!-- Dropdown menu --> */}
                <div
                  id="userDropdown"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>Bonnie Green</div>
                    <div class="font-medium truncate">name@flowbite.com</div>
                  </div>
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="avatarButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/findtalent" element={<Findtalent />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/network" element={<Network />} />
            <Route path="/Notifications" element={<Notifications />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
