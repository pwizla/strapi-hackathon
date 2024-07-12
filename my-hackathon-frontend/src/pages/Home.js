import React from 'react';
import '../index.css';
import logo from '../logo.svg';
import placeholder from '../square-media-placeholder.png';

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <img className="logo" src={logo} alt="logo" />
        <nav className="nav">
          <a href="#">Getting started</a>
          <a href="#">Resources</a>
          <a href="#">Prizes</a>
          <a href="#">FAQ</a>
        </nav>
        <div className="nav-cta">
          <button className="button button--alt">Share on X</button>
          <button className="button">Join hackathon</button>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-text">
            <h1>Strapi Global Hack Week</h1>
            <p>Connect with developers from around the world to push the boundaries of what’s possible with Strapi</p>
            <button className="button">Join hackathon</button>
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

        <section className="tagline">
          <h2>Team up with other devs for a chance to win exciting prizes!</h2>
        </section>

        <section className="hero about">
          <img className="hero-image" src={placeholder} alt="Placeholder" />
          <div className="hero-text">
            <h2>About the hackathon</h2>
            <p>[placeholder text] Strapi is organizing its first hackathon to promote creativity, dogfooding, and innovation. The hackathon will be held remotely from July 10th to July 12th, 2024. Each team will create a presentation and prototype, upload the presentation by July 12th, and present it during the Monday Meeting on July 15th.</p>
            <button className="button button--alt">How to participate?</button>
          </div>
        </section>

        <section className="steps">
          <h2>How to participate?</h2>
          <div className="steps-wrapper">
            <ul className="stepsGrid">
              <li className="step-card">
                <div className="step-number">1</div>
                <div className="step-text">Register</div>
              </li>
              <li className="step-card">
                <div className="step-number">2</div>
                <div className="step-text">Find a team</div>
              </li>
              <li className="step-card">
                <div className="step-number">3</div>
                <div className="step-text">Build your Strapi project</div>
              </li>
              <li className="step-card">
                <div className="step-number">4</div>
                <div className="step-text">Submit your project for a chance to win!</div>
              </li>
              <li className="step-card">
                <div className="step-number">5</div>
                <div className="step-text">Strapi jury votes</div>
              </li>
              <li className="step-card">
                <div className="step-number">6</div>
                <div className="step-text">Community votes on social media by sharing their favorite projects</div>
              </li>
            </ul>
          </div>
        </section>

        <section className="resources">
          <h2>Resources</h2>
          <p>For some inspiration to kick things off, check out <a className="link link--alt" href="#">this tutorial</a> on how to start<br />with Strapi and Next 14.</p>
          <div className="links">
            <a href="#">Get started with Strapi Cloud</a>
            <a href="#">Strapi Community</a>
            <a href="#">Strapi Discord</a>
            <a href="#">Strapi YouTube channel</a>
          </div>
        </section>

        <section className="prizes">
          <h2>Prizes</h2>
          <p>Set to take place across [hackathon dates], this hackathon is an unparalleled opportunity for your team to engage with the latest Strapi technologies, and make a lasting impact on the open-source community.</p>
          <div className="prizesGrid">
            <div>
              <img className="prize-image" src={placeholder} alt="Placeholder" />
              <h3>1st place</h3>
              <ul>
                <li>$1000 for each team member</li>
                <li>Strapi’s swag</li>
                <li>discount for Strapi</li>
              </ul>
            </div>
            <div>
              <img className="prize-image" src={placeholder} alt="Placeholder" />
              <h3>2nd place</h3>
              <ul>
                <li>Strapi’s swag</li>
                <li>discount for Strapi</li>
              </ul>
            </div>
            <div>
              <img className="prize-image" src={placeholder} alt="Placeholder" />
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
            <p>Contact us at <a className="link--alt" href="mailto:support@strapi.io">support@strapi.io</a></p>
          </details>
        </section>

        <footer className="footer">
          <h2>Join the headless revolution and stand a chance to win exciting prizes!</h2>
          <button className="button">Join hackathon</button>
        </footer>
      </main>
    </div>
  );
}

export default Home;
