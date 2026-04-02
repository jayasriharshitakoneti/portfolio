import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FiCode, FiAward, FiBookOpen, FiCpu, FiZap, FiTrendingUp } from 'react-icons/fi';
import { about, education } from '../data/portfolioData';
import './About.css';

const About = () => {
  const icons = [
    { icon: <FiCode />, color: '#8b5cf6' },
    { icon: <FiAward />, color: '#ec4899' },
    { icon: <FiBookOpen />, color: '#22d3ee' },
    { icon: <FiCpu />, color: '#10b981' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="about" id="about">
      <div className="about-bg">
        <div className="about-orb-1"></div>
        <div className="about-orb-2"></div>
        <div className="about-lines"></div>
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {about.description.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              className="education-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="education-glow"></div>
              <div className="education-content">
                <div className="education-icon">
                  <FiBookOpen size={24} />
                </div>
                <div className="education-info">
                  <h4>{education.degree}</h4>
                  <p className="university">{education.university}, {education.location}</p>
                  <div className="education-details">
                    <span className="detail-badge">
                      <FiTrendingUp size={12} />
                      GPA: {education.gpa}
                    </span>
                    <span className="detail-badge">
                      <FiZap size={12} />
                      Expected: {education.graduation}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-stats"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {about.highlights.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
                style={{ '--stat-color': icons[index].color }}
              >
                <div className="stat-glow"></div>
                <div className="stat-content">
                  <div className="stat-icon" style={{ color: icons[index].color }}>
                    {icons[index].icon}
                  </div>
                  <motion.div
                    className="stat-value"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
