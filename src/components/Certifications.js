import React from 'react';
import { certifications } from './data/certifications';

function Certifications() {
  return (
    <section className="page-section active">
      <div className="section-title">
        <i className="fas fa-certificate"></i> codechef certifications
      </div>
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <article className="cert-card" key={index}>
            <div className="cert-icon">
              <i className={cert.icon}></i>
            </div>
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <span className="cert-year">{cert.year}</span>
            <a
              href="https://www.codechef.com/certificates/verify"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              verify certificate <i className="fas fa-arrow-right"></i>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;