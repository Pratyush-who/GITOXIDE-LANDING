import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ReportIssue from './pages/ReportIssue';
import PublicFeed from './pages/PublicFeed';

function App() {
  return (
    <Router>
      <div className="min-h-screen" style={{ backgroundColor: '#F6F5FA' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/report" element={<ReportIssue />} />
          <Route path="/feed" element={<PublicFeed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;