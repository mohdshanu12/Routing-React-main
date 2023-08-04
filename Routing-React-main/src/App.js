// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';
import Portfolio from './Portfolio';
import Entertainment from './Entertainment';

function App() {
  return (
      <Router>

      <Routes>
        <Route path='/' element={<Navigation />} />
        <Route path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        
        <Route exact path="/portfolio" element={<Portfolio />} />
        
        <Route exact path="/entertainment" element={<Entertainment />} />
      </Routes>

      </Router>
  );
}

export default App;
