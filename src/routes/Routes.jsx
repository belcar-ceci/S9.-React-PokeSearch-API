import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../App'
import Registration from '../components/auth/Registration'
import Login from '../components/auth/Login'
import About from '../pages/About'
import ComparisonPoke from '../pages/ComparisonPoke'
import Home from '../pages/Home'

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
          <Route path='compare' element={<ComparisonPoke />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default RoutesComponent