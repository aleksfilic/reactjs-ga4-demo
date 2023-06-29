import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const tagId = 'G-GB4JBF54V2';
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/" element={<Home tagId={tagId} />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard tagId={tagId} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
