import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Header from './ts/Header.tsx';
import AboutMe from './pages/About-Me.tsx';
// import Portfolio from './ts/Portfolio.tsx';
// import Contact from './ts/Contact.tsx';
//import Footer from './ts/Footer.tsx';
import Navigation from './components/Navigation.tsx';
import React from 'react';
// import NavTile from './ts/NavTile.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<h1>Welcome to My Portfolio</h1>} />
          <Route path="/about-me" element={<AboutMe />} />
          {/* <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
