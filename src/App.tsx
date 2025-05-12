import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.tsx';
import AboutMe from './pages/About-Me.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Contact from './pages/Contact.tsx';
import Resume from './pages/Resume.tsx';
import Footer from './components/Footer.tsx';
import { ErrorBoundary } from './components/ErrorBoundery.tsx';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe name="Stacy" />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<ErrorBoundary />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
