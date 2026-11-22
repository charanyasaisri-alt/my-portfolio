import React from 'react';

function Home({ onNavigate }) {
  return (
    <section className="page-section active">
      <header className="profile-header">
        <div className="avatar">
          {/* Points directly to the public folder */}
          <img src="/profile.jpeg" alt="Gundebommu Sai Sri Charanya" />
        </div>

        <div className="header-text">
          <h1>Gundebommu Sai Sri Charanya</h1>
          <div className="tagline">
            <i className="fas fa-graduation-cap"></i> Computer Science Engineering Student
          </div>
          <a
            href="https://github.com/charanyasaisri-alt"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <i className="fab fa-github"></i> github.com
          </a>
        </div>
      </header>

      <div className="hero-content">
        <h2>Welcome to My Portfolio</h2>
        <p>
          Passionate about programming, web development, and building innovative
          solutions. Explore my certifications and learn more about my journey.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => onNavigate('certs')}>
            View Certifications
          </button>
          <button className="btn btn-outline" onClick={() => onNavigate('about')}>
            About Me
          </button>
        </div>
      </div>

      <div className="github-block">
        <div className="github-block-text">
          <i className="fab fa-github"></i>
          <div>
            <h3>More on GitHub</h3>
            <p>Explore all my open-source projects and contributions.</p>
          </div>
        </div>
        <a
          href="https://github.com/charanyasaisri-alt"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-github-large"
        >
          <i className="fab fa-github"></i> github
        </a>
      </div>
    </section>
  );
}

export default Home;