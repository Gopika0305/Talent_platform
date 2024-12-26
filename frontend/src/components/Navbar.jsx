import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Navbar =  () =>{ 
    return (
        <>
         {/* <nav classNameName="navbar">
    <ul classNameName=' flex justify-around bg-gray-800 text-white p-4'>
      <li classNameName="nav-item hover:bg-gray-700 w-20 text-center rounded text-xl">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item hover:b</div>g-gray-700 w-28 text-center rounded text-xl">
        <Link to="/account">Account</Link>
      </li>
    </ul>
  </nav> */}

<nav class="fixed top-0 left-0 right-0 bg-white shadow-md aleo-regular z-50">
        <div class="container mx-auto px-6 py-3 flex justify-between items-center">
            <Link to="/" className="text-4xl text-black font-semibold hover:text-indigo-600">TALENTMATCH</Link>

            <div className="flex items-center space-x-6">
                <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
                <Link to="/login" className="text-gray-700 hover:text-indigo-600">Login</Link>
                <Link to="/findtalent" className="text-gray-700 hover:text-indigo-600"> <i className="fas fa-briefcase mr-1"></i>
                Find Talent</Link>
                <Link to="/jobs" className="text-gray-700 hover:text-indigo-600"><i className="fas fa-users mr-1"></i>
                Jobs</Link>
                <Link to="/network" className="text-gray-700 hover:text-indigo-600"><i className="fas fa-users mr-1"></i>
                Network</Link>
                <Link to="/Notifications" className="text-gray-700 hover:text-indigo-600"><i className="fas fa-bell mr-1"></i>
                Notifications</Link>
                
                {/* <div className="relative group">
                 
                    <button className="flex items-center">
                        <img src="https://via.placeholder.com/30" alt="Profile" className="rounded-full w-8 h-8 mr-2"/>
                        <span className="text-gray-700 hidden md:inline">John Doe</span>
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                    </div>
                </div> */}
                <Dropdown/>
            </div>
            </div>
    </nav>
    </>
    )
}

export default Navbar;