import './Topbar.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

const Topbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`modern-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="brand">
          <div className="logo">
            <div className="wave-animation">
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
            </div>
            <span>Ocean</span>
            <span className="highlight">Quest</span>
          </div>
        </div>
        
        <nav className="nav-links">
          <Link to="/page1" className="nav-item">Accueil</Link>
          <Link to="/page2" className="nav-item">Explorer</Link>
          <Link to="/page3" className="nav-item">Interagir</Link>
          <Link to="/page4" className="nav-item">Podcast</Link>
          <Link to="/apropos" className="nav-item">À propos</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </nav>

        <button className="explore-button">
          <span>Commencer l'exploration</span>
          <svg className="button-icon" viewBox="0 0 24 24">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
  
export default Topbar;