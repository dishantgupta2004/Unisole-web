import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
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

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div>
              <Element name="home">
                <Homepage />
              </Element>
              <Element name="about">
                <About />
              </Element>
              <Element name="announcement">
                <Announcement />
              </Element>
              <Element name="course">
                <Course />
              </Element>
              <Element name="project">
                <Project />
              </Element>
              <Element name="donate">
                <Donate />
              </Element>
              <Element name="blog">
                <Blog />
              </Element>
              <Element name="event">
                <Event />
              </Element>
              <Element name="team">
                <Team />
              </Element>
            </div>
          } />
          <Route path="/shadowpage" element={<Shadowpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/team" element={<Team />} />
          <Route path="/project" element={<Project />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/blog" element={<Blog />} />
          {/* Add a route for 404 errors */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
