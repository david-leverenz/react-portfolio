import React, { useState } from "react"
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // this does not work with github pages.
import Portfolio from './components/pages/Portfolio';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import LIImage from './components/LIImage'
import GHImage from './components/GHImage'
import SEImage from './components/SEImage'

function App() {
  let [currentPage, setcurrentpage] = useState("aboutMe")

  const handlePageChange = (page) => setcurrentpage(page)

  return (
    <Router>
      <div className="container">
        <div className="navBar">
          <nav className="navbar navbar-light bg-secondary rounded-top-4">

            <h1 className="text-white ps-3">David Leverenz</h1>
            <ul className="nav justify-content-end pt-2">
              <li className="nav-item">
                <Link style={{ textDecoration: 'none' }} to="/"><p aria-current="page" className={currentPage === "aboutMe" ? 'navLinkActive' : 'navLinkPlain'}>About Me</p></Link>
              </li>
              <li className="nav-item">
                <Link style={{ textDecoration: 'none' }} to="/portfolio"><p aria-current="page" className={currentPage === "portfolio" ? 'navLinkActive' : 'navLinkPlain'}>Portfolio</p></Link>
              </li>
              <li className="nav-item">
                <Link style={{ textDecoration: 'none' }} to="/contact"><p aria-current="page" className={currentPage === "contact" ? 'navLinkActive' : 'navLinkPlain'}>Contact</p></Link>
              </li>
              <li className="nav-item">

                <Link style={{ textDecoration: 'none' }} to="/resume"><p aria-current="page" className={currentPage === "resume" ? 'navLinkActive' : 'navLinkPlain'}>Resume</p></Link>
              </li>
            </ul>
          </nav>

        </div>


        <Routes>
          <Route path="/" element={<AboutMe handlepagechange={handlePageChange} />} />
          <Route path="/portfolio" element={<Portfolio handlepagechange={handlePageChange} />} />
          <Route path="/contact" element={<Contact handlepagechange={handlePageChange} />} />
          <Route path="/resume" element={<Resume handlepagechange={handlePageChange} />} />
        </Routes>


        <footer className="footer bg-secondary rounded-bottom-4 m-3 border border-3 border-white">
          <div className="d-flex justify-content-center align-items-center">
            <a href="https://stackexchange.com/users/29071132/dave" className="icons">
              <SEImage />
            </a>
            <a href="https://github.com/david-leverenz/" className="icons">
              <GHImage />
            </a>
            <a href="https://www.linkedin.com/in/david-leverenz" className="icons ps-2">
              <LIImage />
            </a>
          </div>
        </footer>
      </div>

    </Router >
  );
}

export default App;
