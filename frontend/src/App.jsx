import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Home from './components/Home'
import Account from './components/Account'
import Findtalent from './components/Findtalent'
import Jobs from './components/Jobs'
import Network from './components/Network'
import Notifications from './components/Notifications'

const App = () => {
  return (
    <>
  <Router>
    <div>
  {/* <nav className="navbar">
    <ul className=' flex justify-around bg-gray-800 text-white p-4'>
      <li className="nav-item hover:bg-gray-700 w-20 text-center rounded text-xl">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item hover:bg-gray-700 w-28 text-center rounded text-xl">
        <Link to="/account">Account</Link>
      </li>
    </ul>
  </nav> */}

<nav class="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div class="container mx-auto px-6 py-3 flex justify-between items-center">
            <Link to="/" class="text-4xl text-gray-700 hover:text-indigo-600">TalentMatch</Link>

            <div class="flex items-center space-x-6">
                <Link to="/" class="text-gray-700 hover:text-indigo-600">Home</Link>
                <Link to="/findtalent" class="text-gray-700 hover:text-indigo-600"> <i class="fas fa-briefcase mr-1"></i>
                Find Talent</Link>
                <Link to="/jobs" class="text-gray-700 hover:text-indigo-600"><i class="fas fa-users mr-1"></i>
                Jobs</Link>
                <Link to="/network" class="text-gray-700 hover:text-indigo-600"><i class="fas fa-users mr-1"></i>
                Network</Link>
                <Link to="/Notifications" class="text-gray-700 hover:text-indigo-600"><i class="fas fa-bell mr-1"></i>
                Notifications</Link>
                
                {/* <div class="relative group">
                 
                    <button class="flex items-center">
                        <img src="https://via.placeholder.com/30" alt="Profile" class="rounded-full w-8 h-8 mr-2"/>
                        <span class="text-gray-700 hidden md:inline">John Doe</span>
                    </button>
                    <div class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                    </div>
                </div> */}
                <div class="relative" id="profileDropdown">
                    <button id="profileButton" class="flex items-center">
                        <img src="https://via.placeholder.com/30" alt="Profile" class="rounded-full w-8 h-8 mr-2"/>
                        <span class="text-gray-700 hidden md:inline">John Doe</span>
                    </button>
                    <div id="dropdownMenu" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/account" element={<Account />} />
    <Route path="/findtalent" element={<Findtalent/>} />
    <Route path="/jobs" element={<Jobs/>} />
    <Route path="/network" element={<Network/>} />
    <Route path="/Notifications" element={<Notifications/>} />
    </Routes>
    </div>
  </Router>
  </>
  )
}

export default App
