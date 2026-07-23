import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference, default to dark
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
    return 'dark';
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Section links scroll to in-page anchors. When already on the home route
  // we smooth-scroll directly; from another route we go home first and let
  // Home's effect perform the scroll via navigation state.
  const sectionLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Publications', id: 'publications' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleSectionClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  const handleLogoClick = () => {
    setIsOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleLogoClick}>
          Harshita<span className="logo-accent">.</span>
        </Link>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {sectionLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              className="nav-link"
              onClick={(e) => handleSectionClick(e, link.id)}
            >
              {link.name}
            </a>
          ))}
          <NavLink
            to="/blog"
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Blog
          </NavLink>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <a href="/JayaSriharshitaKoneti.docx" target="_blank" className="btn btn-primary nav-btn">
            Resume
          </a>
        </div>

        <div className="navbar-actions">
          <button className="theme-toggle mobile-theme" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
