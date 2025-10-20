import React from "react";

const About = () => {
  return (
    <main data-testid="test-about-page" className="about-page">
      <section className="about-hero" aria-labelledby="about-hero-heading">
        <h1 id="about-hero-heading">About Me</h1>
        <p className="hero-subtitle">My journey in frontend development</p>
      </section>

      <section
        className="about-section"
        data-testid="test-about-bio"
        aria-labelledby="bio-heading"
      >
        <h2 id="bio-heading">Bio</h2>
        <div className="bio-content">
          <p>
            I'm a passionate frontend developer currently enhancing my skills
            through this program. I love creating beautiful, accessible, and
            responsive web experiences.
          </p>
          <p>
            My journey began with curiosity about how websites work, and now I'm
            diving deep into modern web technologies and accessibility best
            practices.
          </p>
        </div>
      </section>

      <section
        className="about-section"
        data-testid="test-about-goals"
        aria-labelledby="goals-heading"
      >
        <h2 id="goals-heading">Goals in This Program</h2>
        <ul className="goals-list" data-testid="test-about-goals-list">
          <li>Master semantic HTML5 and accessibility standards</li>
          <li>Become proficient in React and modern JavaScript</li>
          <li>Build responsive, mobile-first designs</li>
          <li>Learn testing strategies</li>
          <li>Create production-ready applications</li>
        </ul>
      </section>

      <section
        className="about-section"
        data-testid="test-about-confidence"
        aria-labelledby="confidence-heading"
      >
        <h2 id="confidence-heading">Areas of Low Confidence</h2>
        <div className="confidence-content">
          <h3>Advanced CSS Layouts</h3>
          <p>Working on complex layouts and advanced techniques.</p>

          <h3>Performance Optimization</h3>
          <p>Learning code splitting and optimization strategies.</p>

          <h3>Advanced Testing</h3>
          <p>Getting comfortable with comprehensive testing.</p>
        </div>
      </section>

      <section
        className="about-section"
        data-testid="test-about-future-note"
        aria-labelledby="future-note-heading"
      >
        <h2 id="future-note-heading">Note to Future Self</h2>
        <blockquote className="future-note">
          <p>
            Keep pushing your boundaries! Every challenge is an opportunity to
            grow. Stay curious and never stop building.
          </p>
          <footer>— Your past self</footer>
        </blockquote>
      </section>

      <section
        className="about-section"
        data-testid="test-about-extra"
        aria-labelledby="extra-heading"
      >
        <h2 id="extra-heading">Extra Thoughts</h2>
        <div className="extra-content">
          <p>
            Excited about creating accessible, inclusive web experiences.
            Looking forward to collaborating and contributing to open-source.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
