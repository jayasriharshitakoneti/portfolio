import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiStar } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-bg">
        <div className="projects-grid-pattern"></div>
        <div className="projects-orb"></div>
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some things I've built with passion</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-card-glow"></div>
              <div className="project-card-border"></div>

              <div className="project-content">
                <div className="project-header">
                  <motion.div
                    className="project-icon"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FiFolder size={32} />
                  </motion.div>
                  <div className="project-badges">
                    {project.featured && (
                      <motion.span
                        className="badge featured-badge"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <FiStar size={10} /> Featured
                      </motion.span>
                    )}
                    {project.hasResearch && (
                      <span className="badge research-badge">Research</span>
                    )}
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-period">{project.period}</p>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="tech-tag"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                      whileHover={{ y: -2, color: '#10b981' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.2, color: '#10b981' }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub size={18} />
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.2, color: '#10b981' }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiExternalLink size={18} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
