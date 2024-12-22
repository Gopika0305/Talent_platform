import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Home from './components/Home'
import Account from './components/Account'

const App = () => {
  return (
    <>
  <Router>
    <div>
  <nav className="navbar">
    <ul className=' flex justify-around bg-gray-800 text-white p-4'>
      <li className="nav-item hover:bg-gray-700 w-20 text-center rounded text-xl">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item hover:bg-gray-700 w-28 text-center rounded text-xl">
        <Link to="/account">Account</Link>
      </li>
    </ul>
  </nav>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/account" element={<Account />} />
    </Routes>
    </div>
  </Router>







  
  </>
  )
}

export default App
