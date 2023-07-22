import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import Homepage from './components/pages/Homepage';
import Portfolio from './components/pages/Portfolio';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
// import NavTabs from './components/NavTabs';
import LIImage from './components/LIImage'
import GHImage from './components/GHImage'


function App() {

  return (
    <Router>
      <div className="pageContainer display-flex flex-direction-colum justify-content-center align-items-flex-start">
        <div className="container">
          <div className="navBar">
            <nav className="navbar navbar-light bg-secondary rounded-top-4">

              <h1 className="text-white ps-2">David Leverenz</h1>
              <ul className="nav justify-content-end pt-2">
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/"><p className="nav-link active text-white" aria-current="page">About Me</p></Link>
                </li>
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/portfolio"><p className="nav-link text-white">Portfolio</p></Link>
                </li>
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/contact"><p className="nav-link text-white">Contact</p></Link>
                </li>
                <li className="nav-item">

                  <Link style={{ textDecoration: 'none' }} to="/resume"><p className="nav-link disabled text-white">Resume</p></Link>
                </li>
              </ul>
            </nav>

          </div>


          {/* In bootstrap-5 pl and pr is replaced ps and pe respectively */}

          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          

          <footer className="footer bg-secondary rounded-bottom-4 m-3 border border-3 border-white">
            <div className="d-flex justify-content-center align-items-center">
              <a href="https://github.com/david-leverenz/" className="text-decoration=none align-items-center">
                <GHImage />
              </a>
              <a href="https://www.linkedin.com/in/david-leverenz" className="text-decoration=none align-items-center">
                <LIImage />
              </a>
            </div>
          </footer>
        </div>
      </div>

    </Router >
  );
}

export default App;
