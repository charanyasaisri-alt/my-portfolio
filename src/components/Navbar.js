import React from 'react';

function Navbar({ activePage, onNavigate }) {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'certs', label: 'Certifications' },
  ];

  const handleLogoClick = (e) => {
    e.preventDefault();
    onNavigate('home');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            My<span>Portfolio</span>
        </div>
        <div className="nav-links">
          {links.map((link) => (
            <div
              key={link.id}
              className={`nav-link ${activePage === link.id ? 'active' : ''}`}
              onClick={() => onNavigate(link.id)}
            >
              {link.label}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;