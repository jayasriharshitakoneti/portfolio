import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiCalendar, FiChevronRight } from 'react-icons/fi';
import { experience } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-bg">
        <div className="exp-orb"></div>
        <div className="exp-grid"></div>
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey so far</p>
        </motion.div>

        <div className="experience-timeline">
          <div className="timeline-line">
            <motion.div
              className="timeline-progress"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          {experience.map((job, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="timeline-marker"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
              >
                <FiBriefcase />
                <div className="marker-pulse"></div>
              </motion.div>

              <motion.div
                className="experience-card"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="experience-header">
                    <div>
                      <h3 className="company">{job.company}</h3>
                      <h4 className="role">{job.role}</h4>
                    </div>
                    <div className="experience-meta">
                      <span className="meta-item">
                        <FiCalendar size={14} />
                        {job.period}
                      </span>
                      <span className="meta-item">
                        <FiMapPin size={14} />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <ul className="experience-highlights">
                    {job.highlights.map((highlight, hIndex) => (
                      <motion.li
                        key={hIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + hIndex * 0.1 }}
                      >
                        <FiChevronRight className="highlight-icon" />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
