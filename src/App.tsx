import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import Navbar from './components/navbar/Navbar';
import Shadowpage from './components/shadowpage/Shadowpage';
import Homepage from './components/homepage/Homepage';
import About from './components/about/About';
import Announcement from './components/announcement/Announcement';
import UserProfile from './components/Userprofile/Userprofile';
import Login from './components/login/Login';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor") as HTMLElement;
    const cursor2 = document.querySelector(".cursor2") as HTMLElement;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
      cursor2.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="cursor"></div>
        <div className="cursor2"></div>
        <Routes>
          <Route
            path="/"
            element={
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
              </div>
            }
          />
          <Route path="/shadowpage" element={<Shadowpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/case-study" element={<div>Case Study Page</div>} />
          <Route path="/stories" element={<div>Stories Page</div>} />
          <Route path="/login" element={<Login />} /> {/* Login route */}
          <Route path="/user-profile" element={<UserProfile />} /> {/* Add this route for UserProfile */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
