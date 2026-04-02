import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowRight, FiDownload, FiMapPin } from 'react-icons/fi';
import { personalInfo, about } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['Software Engineer', 'Full Stack Developer', 'AI Enthusiast', 'Startup Founder'];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <motion.div
          className="bento-grid"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Main intro card - spans 2 columns */}
          <motion.div className="bento-card main-card" variants={item}>
            <span className="status-badge">
              <span className="status-dot"></span>
              Available for work
            </span>
            <h1 className="hero-name">
              {personalInfo.name.split(' ').slice(0, 2).join(' ')}
              <span className="name-highlight"> {personalInfo.name.split(' ').slice(2).join(' ')}</span>
            </h1>
            <div className="hero-role">
              <span className="role-text">{displayText}</span>
              <span className="cursor">_</span>
            </div>
            <p className="hero-tagline">{personalInfo.tagline}</p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Projects <FiArrowRight />
              </a>
              <a href={personalInfo.resume} target="_blank" className="btn btn-secondary">
                <FiDownload /> Resume
              </a>
            </div>
          </motion.div>

          {/* Profile image card */}
          <motion.div className="bento-card image-card" variants={item}>
            <img src={personalInfo.profileImage} alt={personalInfo.name} />
            <div className="image-overlay">
              <FiMapPin /> {personalInfo.location}
            </div>
          </motion.div>

          {/* Stats cards */}
          {about.highlights.map((stat, index) => (
            <motion.div
              key={index}
              className="bento-card stat-card"
              variants={item}
            >
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}

          {/* Tech stack card */}
          <motion.div className="bento-card tech-card" variants={item}>
            <span className="card-label">Tech Stack</span>
            <div className="tech-pills">
              <span>GenAI</span>
              <span>Python</span>
              <span>Java</span>
              <span>React</span>
              <span>AWS</span>
              <span>MySQL</span>
            </div>
          </motion.div>

          {/* Social links card */}
          <motion.div className="bento-card social-card" variants={item}>
            <span className="card-label">Connect</span>
            <div className="social-links">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <FiGithub /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <FiLinkedin /> LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
