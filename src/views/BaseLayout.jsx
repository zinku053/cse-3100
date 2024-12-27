import { Link, Outlet } from 'react-router-dom';
import './BaseLayout.css'; // Import the new CSS for BaseLayout

const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="header">
        <h1>
          <Link className="logo" to="/">Purrfect Adoption</Link>
        </h1>
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-link" to="/available-cats">Available Cats</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/donate">Donate</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>© Copyright 2024 Purrfect Adoption. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
