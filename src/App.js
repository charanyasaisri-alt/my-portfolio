import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home onNavigate={setActivePage} />;
      case 'about':
        return <About />;
      case 'certs':
        return <Certifications />;
      default:
        return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <>
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <main className="portfolio">
        {renderPage()}
        <Footer />
      </main>
    </>
  );
}

export default App;