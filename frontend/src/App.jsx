import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Account from './pages/Account'
import Findtalent from './pages/Findtalent'
import Jobs from './pages/Jobs'
import Network from './pages/Network'
import Notifications from './pages/Notifications'
import Navbar from './components/Navbar'
import Layout from './pages/Layout'


const App = () => {
  return (
    <>
  <Router>
    <div>
      {/* Navbar Component */}
    <Navbar/>

    {/* Routing between pages */}
    
    <Routes>
    <Route path="/" element={<Layout/>} />
    <Route path="/login" element={<Login />} />
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

export default App;
