import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="external-link">
        <a
          href="https://github.com/zellko"
          aria-label="Resume, (PDF, 1MB)"
        >
          Resume
        </a>
        <a
          href="https://github.com/zellko"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub, (opens in new tab)"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}

export default Header;
