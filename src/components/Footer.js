// src/components/Footer.js

import React from 'react';

function Footer() {
  return (
    <>
      <div className="contact-mini">
        <a href="mailto:charanya.saisri@gmail.com">
          <i className="fas fa-envelope"></i> charanya.saisri@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/charanya-gundebommu-53a07937b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        
        {/* FIX IS HERE: Notice the <span> opening and </span> closing */}
        <span 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            color: 'var(--text-light)', 
            fontSize: '0.9rem', 
            fontWeight: 500 
          }}
        >
          <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary)' }}></i> 
          India
        </span>

      </div>
      
      <div className="footer-note">
        <i className="fas fa-code-branch"></i> always building · always learning
      </div>
    </>
  );
}

export default Footer;