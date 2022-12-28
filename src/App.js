import './App.css';
import './css/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Nav from './components/nav/nav';
import NavLeft from './components/nav/left';

function App() {
  return (
    <div className="web">
        <Router>
        <Nav />
        <NavLeft />
        <div className="container-page-miles">
          <Routes>
            <Route path="/" element={<Home />}/> 
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
