import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  function isActive(linkName) {
    const location = useLocation();

    if (linkName === '/home') {
      if (location.pathname === '/') return 'active';
    }

    if (linkName === location.pathname) return 'active';

    return null;
  }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/home" className={isActive('/home')}>Home</Link>
          </li>
          <li>
            <Link to="/project" className={isActive('/project')}>Project</Link>
          </li>
          <li>
            <Link to="/about" className={isActive('/about')}>About</Link>
          </li>
          <li>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="external-link">
        <a
          href="https://github.com/zellko"
          aria-label="Resume, (PDF, 1MB)"
        >
          <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9.5 11.5C9.5 12.3 8.8 13 8 13H7V15H5.5V9H8C8.8 9 9.5 9.7 9.5 10.5V11.5M14.5 13.5C14.5 14.3 13.8 15 13 15H10.5V9H13C13.8 9 14.5 9.7 14.5 10.5V13.5M18.5 10.5H17V11.5H18.5V13H17V15H15.5V9H18.5V10.5M12 10.5H13V13.5H12V10.5M7 10.5H8V11.5H7V10.5Z" />
          </svg>
          Resume
        </a>
        <a
          href="https://github.com/zellko"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub, (opens in new tab)"
        >
          <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
          </svg>
          GitHub
        </a>
      </div>
    </header>
  );
}

export default Header;
