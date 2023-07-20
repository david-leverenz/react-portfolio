import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/pages/Homepage';

function App() {

  return (
    <Router>
    <div className="">
      <Link to="/">Home</Link>
      <Link to="/profile">profile</Link>
      <Link to="/contact">Contact</Link>
      <div className='pageContainer'>

      </div>
    </div>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/profile" element={<h1>Profile</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
    </Routes>
    {/* <footer></footer> */}
    </Router>
  );
}

export default App;
