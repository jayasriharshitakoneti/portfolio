import { motion } from 'framer-motion';
import {
  FiCode, FiServer, FiLayout, FiCloud, FiDatabase, FiCpu
} from 'react-icons/fi';
import { skills } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
  const categoryConfig = {
    "Programming Languages": { icon: <FiCode />, color: '#10b981' },
    "Backend": { icon: <FiServer />, color: '#059669' },
    "Frontend": { icon: <FiLayout />, color: '#34d399' },
    "Cloud & DevOps": { icon: <FiCloud />, color: '#14b8a6' },
    "Databases": { icon: <FiDatabase />, color: '#047857' },
    "AI/ML": { icon: <FiCpu />, color: '#6ee7b7' }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-bg">
        <div className="skills-orb orb-left"></div>
        <div className="skills-orb orb-right"></div>
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I've been working with</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(skills).map(([category, skillList], categoryIndex) => {
            const config = categoryConfig[category];
            return (
              <motion.div
                key={category}
                className="skill-category"
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                style={{ '--category-color': config.color }}
              >
                <div className="category-glow"></div>
                <div className="category-content">
                  <div className="category-header">
                    <div className="category-icon" style={{ background: `linear-gradient(135deg, ${config.color}33, ${config.color}11)` }}>
                      {config.icon}
                    </div>
                    <h3>{category}</h3>
                  </div>
                  <div className="skill-tags">
                    {skillList.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="skill-tag"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.05 + skillIndex * 0.03,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: `${config.color}30`,
                          borderColor: config.color
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
