import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Portfolio from './components/pages/Portfolio';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import LIImage from './components/LIImage'
import GHImage from './components/GHImage'
import SEImage from './components/SEImage'

let id;

function App(currentPage) {

  return (
    <Router>
      {/* <div className="pageContainer display-flex flex-direction-colum justify-content-center align-items-flex-start"> */}
        <div className="container">
          <div className="navBar">
            <nav className="navbar navbar-light bg-secondary rounded-top-4">

              <h1 className="text-white ps-3">David Leverenz</h1>
              <ul className="nav justify-content-end pt-2">
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/"><p aria-current="page" id={id === "aboutMe" ? 'nav-link-active' : 'nav-link'}>About Me</p></Link>
                  {/* className="nav-link active text-white"  */}
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


          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>


          <footer className="footer bg-secondary rounded-bottom-4 m-3 border border-3 border-white">
            <div className="d-flex justify-content-center align-items-center">
              <a href="https://stackexchange.com/users/29071132/dave" className="icons">
                <SEImage />
              </a>
              <a href="https://github.com/david-leverenz/" className="icons">
                <GHImage />
              </a>
              <a  href="https://www.linkedin.com/in/david-leverenz" className="icons ps-2">
                <LIImage />
              </a>
            </div>
          </footer>
        </div>
      {/* </div> */}

    </Router >
  );
}

export default App;
