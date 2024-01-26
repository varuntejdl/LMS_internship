import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Forgot from './Components/Forgot';
import LearnerDashboard from './Components/LearnerDashboard/LearnerDashboard';
import Profile from './Components/Profile/Profile';
import CourseDashboard from './Components/CourseDashboard/CourseDashboard';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import MainModule from './Components/Modules/MainModule';
import AllCourses from './Components/AllCourses/AllCourses';

function App() {
  return (

    //Defining routes
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<Forgot />} />
          <Route path="/learnerdashboard" element={<LearnerDashboard />} />
          <Route path="/myprofile" element={<Profile />} />
          <Route path="/coursedashboard/:courseName/:trainerName" element={<CourseDashboard />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/mainmodule" element={<MainModule />}></Route>
          <Route path="/allcourses" element={<AllCourses/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
