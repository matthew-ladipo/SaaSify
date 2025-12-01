  import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signin from './Pages/auth/Signin'
import Signup from './Pages/auth/Signup'
import Recover from './Pages/auth/Recover'
import Details from './Pages/auth/Details'
import Finish from './Pages/auth/Finish'
import Dashboard from './Pages/dashboard/Dashboard'
import Page2 from './Pages/dashboard/page2'
import Page3 from './Pages/dashboard/page3'
import Page4 from './Pages/dashboard/page4'
import Page5 from './Pages/dashboard/page5'
import Page6 from './Pages/dashboard/page6'
import Page7 from './Pages/dashboard/page7'
import Page8 from './Pages/dashboard/page8'
import Page9 from './Pages/dashboard/page9'
import Page10 from './Pages/dashboard/page10'
import Page11 from './Pages/dashboard/page11'
import Page12 from './Pages/dashboard/page12'
import DashboardLayout from './Pages/dashboard/DashboardLayout'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recover" element={<Recover />} />
        <Route path="/details" element={<Details />} />
        <Route path="/finish" element={<Finish />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
          <Route path="page4" element={<Page4 />} />
          <Route path="page5" element={<Page5 />} />
          <Route path="page6" element={<Page6 />} />
          <Route path="page7" element={<Page7 />} />
          <Route path="page8" element={<Page8 />} />
          <Route path="page9" element={<Page9 />} />
          <Route path="page10" element={<Page10 />} />
          <Route path="page11" element={<Page11 />} />
          <Route path="page12" element={<Page12 />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
