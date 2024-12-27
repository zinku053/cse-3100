import React from 'react';

const Donate = () => {
  return (
    <div className="donate-page">
      <section className="donation-hero">
        <h1>Make a Pawsitive Impact 🐾</h1>
        <p>
          Your kindness can change lives! Help us provide love, shelter, and care to cats in need. Every little bit counts!
        </p>
      </section>

      <section className="donation-content">
        <h2>Why Donate?</h2>
        <p>
          Many of our furry friends have been rescued from the streets or surrendered by previous owners. Your support helps us:
        </p>
        <ul>
          <li>Provide nutritious food for cats.</li>
          <li>Offer essential medical care and vaccinations.</li>
          <li>Create a safe and loving environment until adoption.</li>
          <li>Run community awareness programs about pet care.</li>
        </ul>
        <p>
          Together, we can ensure every cat gets a second chance at life and love.
        </p>
      </section>

      <section className="donate-now">
        <h2>Donate Now</h2>
        <p>
          Let’s make a difference together! Choose an amount or enter your desired donation below:
        </p>
        <form className="donation-form">
          <div className="donation-options">
            <button type="button" className="donation-amount">$10</button>
            <button type="button" className="donation-amount">$25</button>
            <button type="button" className="donation-amount">$50</button>
            <button type="button" className="donation-amount">$100</button>
          </div>
          <input
            type="number"
            placeholder="Enter custom amount"
            className="donation-input"
          />
          <button type="submit" className="donation-submit">
            Donate Now ❤️
          </button>
        </form>
      </section>
    </div>
  );
};

export default Donate;
