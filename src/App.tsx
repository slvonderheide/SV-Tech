import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Header from './components/Header.tsx';
import AboutMe from './pages/About-Me.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Contact from './pages/Contact.tsx';
//import Footer from './components/Footer.tsx';
import Navigation from './components/Navigation.tsx';
import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundery.tsx';
import myImage from './assets/images/myImage.jpg'; 
// import NavTile from './ts/NavTile.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<h1>Welcome to My Portfolio</h1>} />
          <Route path="/about-me" element={<AboutMe name='Stacy'
        />} />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* { error boundary } */}
          <Route path="*" element={<ErrorBoundary />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
