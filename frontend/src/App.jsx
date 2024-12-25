import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './pages/Main'
const Login = React.lazy(() => import('./pages/Login'));
const Account = React.lazy(() => import('./pages/Account'));
const Findtalent = React.lazy(() => import('./pages/Findtalent'));
const Jobs = React.lazy(() => import('./pages/Jobs'));
const Network = React.lazy(() => import('./pages/Network'));
const Notifications = React.lazy(() => import('./pages/Notifications'));


const App = () => {
  return (
    <>
      <Router>
        <div>
          {/* Navbar Component */}
          <Navbar />

          {/* Routing between pages */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Suspense ><Login /></Suspense>} />
            <Route path="/account" element={<Suspense ><Account /></Suspense>} />
            <Route path="/findtalent" element={<Suspense ><Findtalent /></Suspense>} />
            <Route path="/jobs" element={<Suspense ><Jobs /></Suspense>} />
            <Route path="/network" element={<Suspense ><Network /></Suspense>} />
            <Route path="/notifications" element={<Suspense ><Notifications /></Suspense>} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
