import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import About from './components/about/About';
import Announcement from './components/announcement/Announcement';
import UserProfile from './components/Userprofile/Userprofile';
import Login from './components/login/Login';
import Event from './components/event/Event';
import Explore from './components/course/Explore';
import Course from './components/course/Course';
import Team from './components/team/Team';
import Project from './components/project/Project';
import Donate from './components/donate/Donate';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
import Shadowpage from './components/shadowpage/Shadowpage';
import Certificate from './components/certificate/Certificate';
import Form from './components/course/form';
import SavedCourses from './components/Userprofile/savedcourses';
import ScrollToTop from './components/scrolltotop';

const App: React.FC = () => {
  return (
    <Router>
      {/* Scroll to top on route change */}
      <ScrollToTop />
      {/* Navbar is fixed at the top */}
      <Navbar />
      {/* Add a top margin equal to the Navbar's height */}
      <div className="pt-[64px] min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={
            <>
              <Homepage />
              <About />
              <Announcement />
              <Course />
              <Project />
              <Donate />
              <Blog />
              <Event />
              <Team />
            </>
          } />
          <Route path="/shadowpage" element={<Shadowpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/event" element={<Event />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/course" element={<Course />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/team" element={<Team />} />
          <Route path="/project" element={<Project />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/enroll-form" element={<Form />} />
          <Route path="/savedcourses" element={<SavedCourses />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
