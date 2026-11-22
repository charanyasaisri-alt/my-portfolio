import React from 'react';

function About() {
  return (
    <section className="page-section active">
      <div className="section-title">
        <i className="fas fa-user"></i> about me
      </div>
      <div className="about-card">
        <p>
          Hi! I'm Charanya, a passionate and enthusiastic Computer Science student
          with a strong interest in technology, programming, and web development.
        </p>
        <p>
          I enjoy learning new technologies, solving problems, and building creative
          projects that turn ideas into real-world applications. I have explored
          programming languages and technologies such as Python, Java, HTML, CSS,
          JavaScript, React, Node.js, and MongoDB.
        </p>
        <p>
          I am also interested in Artificial Intelligence and Machine Learning, and
          I enjoy developing projects that combine innovation with practical solutions.
        </p>
        <p>
          I believe in continuous learning, improving my technical skills, and taking
          on new challenges. My goal is to become a skilled software developer and
          contribute to creating useful and innovative applications.
        </p>
        <div className="about-quote">
          "Learning, Creating, and Growing Every Day!"
        </div>
      </div>
    </section>
  );
}

export default About;