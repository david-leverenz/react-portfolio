import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Homepage from './components/pages/Homepage';
import Portfolio from './components/pages/Portfolio';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
// import NavTabs from './components/NavTabs';
import LIImage from './components/LIImage'

function App() {

  return (
    <Router>
      <div className="navBar">
        <nav className="navbar navbar-light bg-secondary rounded-top">
          <div className="container-fluid">

          </div>
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
        <div className="pageContainer display-flex flex-direction-colum justify-content-center align-items-flex-start">
        </div>
        {/* In bootstrap-5 pl and pr is replaced ps and pe respectively */}
      </div>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <footer className="footer bg-secondary rounded-bottom m-4">
        <div className="d-flex justify-content-center">
          <a href="https://www.linkedin.com/in/david-leverenz" className="text-decoration=none align-items-center p-5">
            <LIImage />
          </a>
        </div>
      </footer>


    </Router >
  );
}

export default App;
