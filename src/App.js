import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Forgot from './Components/Forgot';
import LearnerDashboard from './Components/LearnerDashboard/LearnerDashboard';
import Dashboard from './Components/Dashboard';
import Profile from './Components/Profile';


function App() {
  return (
   
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<Forgot />} />
            <Route path="/learnerdashboard" element={<LearnerDashboard/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/myprofile" element={<Profile/>}/>

          </Routes>
        </Router>
      </div>
  );
}

export default App;
