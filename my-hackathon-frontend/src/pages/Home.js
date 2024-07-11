import React from 'react';
import '../index.css';
import placeholder from '../square-media-placeholder.png';

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">strapi</div>
        <nav className="nav">
          <a href="#">Getting started</a>
          <a href="#">Resources</a>
          <a href="#">Prizes</a>
          <a href="#">FAQ</a>
        </nav>
        <button className="joinButton">Join hackathon</button>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-text">
            <h1>Join 1st Strapi Hackathon</h1>
            <p>Join 1st Strapi Hackathon</p>
            <button className="joinButton">Join hackathon</button>
          </div>
          <img className="hero-image" src={placeholder} alt="Placeholder" />
        </section>

        <section className="info">
          <div className="card">
            <p>Oct 1 - Oct 14</p>
            <p>Dates</p>
          </div>
          <div className="card">
            <p>13 days : 23 hours</p>
            <p>Ends in</p>
          </div>
          <div className="card">
            <p>1023</p>
            <p>Devs registered</p>
          </div>
        </section>

        <section className="description">
          <h2>Join to the Headless revolution and stand a chance to win exciting prizes!</h2>
          <button className="shareButton">Share on X</button>
          <div className="about">
            <h3>About the hackathon</h3>
            <p>[placeholder text] Strapi is organizing its first hackathon to promote creativity, dogfooding, and innovation. The hackathon will be held remotely from July 10th to July 12th, 2024. Each team will create a presentation and prototype, upload the presentation by July 12th, and present it during the Monday Meeting on July 15th.</p>
            <button className="learnButton">How to participate?</button>
          </div>
        </section>

        <section className="steps">
          <h2>How to participate?</h2>
          <div className="steps-wrapper">
            <ul className="stepsGrid">
              <li className="step-card">
                <div className="step-number">1</div>
                <div className="step-text">Register your team</div>
              </li>
              <li className="step-card">
                <div className="step-number">2</div>
                <div className="step-text">Create free Strapi Cloud account</div>
              </li>
              <li className="step-card">
                <div className="step-number">3</div>
                <div className="step-text">Create free trial project</div>
              </li>
              <li className="step-card">
                <div className="step-number">4</div>
                <div className="step-text">Build or modify an open-source or open-code app using Strapi.</div>
              </li>
              <li className="step-card">
                <div className="step-number">5</div>
                <div className="step-text">Launch your app...</div>
              </li>
              <li className="step-card">
                <div className="step-number">6</div>
                <div className="step-text">Share your work on social media and tag @Strapi so we can spread the love!</div>
              </li>
            </ul>
          </div>
        </section>

        <section className="resources">
          <h2>Resources</h2>
          <div className="links">
            <a href="#">Get started with Strapi Cloud</a>
            <a href="#">Strapi Community</a>
            <a href="#">Strapi Discord</a>
            <a href="#">Strapi YouTube channel</a>
          </div>
        </section>

        <section className="prizes">
          <h2>Prizes</h2>
          <div className="prizesGrid">
            <div>
              <h3>1st place</h3>
              <ul>
                <li>$1000 for each team member</li>
                <li>Strapi’s swag</li>
                <li>discount for Strapi</li>
              </ul>
            </div>
            <div>
              <h3>2nd place</h3>
              <ul>
                <li>Strapi’s swag</li>
                <li>discount for Strapi</li>
              </ul>
            </div>
            <div>
              <h3>3rd place</h3>
              <ul>
                <li>Strapi’s swag</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="faq">
          <h2>FAQ</h2>
          <details>
            <summary>Who can participate in the Strapi Hackathon?</summary>
            <p>Anyone with a passion for coding and innovation can participate.</p>
          </details>
          <details>
            <summary>What are hackathon dates?</summary>
            <p>The hackathon will be held from July 10th to July 12th, 2024.</p>
          </details>
          <details>
            <summary>Need help?</summary>
            <p>Contact us at support@strapi.io</p>
          </details>
        </section>

        <footer className="footer">
          <h2>Join to the Headless revolution and stand a chance to win exciting prizes!</h2>
          <button className="joinButton">Join hackathon</button>
        </footer>
      </main>
    </div>
  );
}

export default Home;
