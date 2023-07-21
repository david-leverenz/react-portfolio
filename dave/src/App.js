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
      <div className="navBar p-4 text-decoration-none">
        <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">

  </div>

        <h1>David Leverenz</h1>
        {/* <Link to="/"></Link> */}
        <Link to="/"><p className="text-decoration-none">About Me</p></Link>
        <Link to="/portfolio"><p className="text-decoration-none">Portfolio</p></Link>
        <Link to="/contact"><p className="text-decoration-none">Contact</p></Link>
        <Link to="/resume"><p className="text-decoration-none">Resume</p></Link>
        <div className='pageContainer'>

        </div>
        </nav>
      </div>
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <footer>
        <a href="https://www.linkedin.com/in/david-leverenz"className="text-decoration=none align-items-center p-5">
                <LIImage />
            </a>
      </footer>
    </Router>
  );
}

export default App;
