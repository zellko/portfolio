import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

let touchStartY = 0;
let touchEndY = 0;

function Home() {
  const navigate = useNavigate();

  function handleSwipe() {
    // If user swipe up, go to Project route
    if (touchEndY < touchStartY && ((touchStartY - touchEndY) > 100)) {
      navigate('/project');
    }
  }

  useEffect(() => {
    // On touch device, detect if user swipe up
    const homeElement = document.querySelector('.home');

    homeElement.addEventListener('touchstart', (e) => {
      touchStartY = e.changedTouches[0].clientY;
    });

    homeElement.addEventListener('touchend', (e) => {
      touchEndY = e.changedTouches[0].clientY;
      handleSwipe();
    });

    return () => {
      homeElement.removeEventListener('touchstart', () => {});
      homeElement.removeEventListener('touchend', () => {});
    };
  }, []);

  return (
    <main className="home">
      <h1>
        Hi! I&apos;m
        {' '}
        <span>Zellkoss</span>
        .
      </h1>
      <h2>I am a full stack Web Developer.</h2>
      <button type="button">
        <Link to="/projects">See My Work</Link>
      </button>
    </main>
  );
}

export default Home;
