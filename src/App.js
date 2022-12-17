import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Team from "./components/team/team";
import Committees from "./components/committees/committees";
import Contact from "./components/contact/contact";
import Register from "./components/register/register";
import Logo from './img/logo.png';
import MyHamburgerMenu from './3lmenu'
import Instagram from './img/instagram.png';
import Tiktok from './img/tiktok.png';
import Messagefromsg from './components/messagefromsg/messagefromsg';
import './footer.css'


function App() {
  return (
  <Router>
    <div>
    <div className='nav-root'>
      <div className='logo-container'>
        <img src={Logo} alt='logo' className='logo' />
        <p className='sb-nav'>EISJMUN'23</p>
      </div>
      <MyHamburgerMenu />

      <div className='nav-links'>
        <a className="futuramednav"> <Link to="/"> Home </Link></a>
        <a className="futuramednav"> <Link to="/about">EISJMUN'23</Link></a>
        <a className="futuramednav"> <Link to="/team">Our Team</Link></a>
        <a className="futuramednav"> <Link to="/committees">Committees</Link></a>
        <a className="futuramednav"> <Link to="/contact">Contact Us</Link></a>
        <a className="futuramednav"> <Link to="/register">Register</Link></a>
    </div>
    </div>
    </div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="team" element={<Team />} />
      <Route path="committees" element={<Committees />} />
      <Route path="contact" element={<Contact />} />
      <Route path="register" element={<Register />} />
      <Route path="sg-message" element={<Messagefromsg />} />

    </Routes>
    <div className='footer-parent'>
        <div className='footer-child'>
        <div className='logo-container'>
        <img src={Logo} alt='logo' className='logo' />
        <p className='sb-nav'>EISJMUN'23</p>
      </div>
            <p className='copyright'>© Copyright 2023 EISJMUN. All rights reserved.</p>
            <div className='footer-child-right'>
            <img src={Instagram} alt='instagram' />
            <img src={Tiktok} alt='tiktok' />
            </div>
        </div>
    </div>   
  </Router>

  );
}

export default App;
