import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.tsx';
import AboutMe from './pages/About-Me.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Contact from './pages/Contact.tsx';
import Footer from './components/Footer.tsx';
import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundery.tsx';
//import myImage from './assets/images/myImage.jpg'; 
import Resume from './pages/Resume.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Place Header here */}
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe name='Stacy' />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          {/* Error Boundary */}
          <Route path="*" element={<ErrorBoundary />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
