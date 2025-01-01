import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './pages/Main'
import Layout from './wrappers/Layout';
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
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
            <Route path="/" element={<Layout><Main /></Layout>} />
            <Route path="/login" element={<Suspense ><Layout><Login /></Layout></Suspense>} />
            <Route path="/register" element={<Suspense><Layout><Register/></Layout></Suspense>}/>
            <Route path="/findtalent" element={<Suspense ><Findtalent /></Suspense>} />
            <Route path="/jobs" element={<Suspense ><Layout><Jobs /></Layout></Suspense>} />
            <Route path="/network" element={<Suspense ><Layout><Network /></Layout></Suspense>} />
            <Route path="/notifications" element={<Suspense ><Layout><Notifications /></Layout></Suspense>} />
          </Routes>

          
        </div>
      </Router>
    </>
  )
}

export default App;
