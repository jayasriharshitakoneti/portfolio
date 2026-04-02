import { motion } from 'framer-motion';
import { FiFileText, FiExternalLink, FiBookOpen } from 'react-icons/fi';
import { publications } from '../data/portfolioData';
import './Publications.css';

const Publications = () => {
  return (
    <section className="publications" id="publications">
      <div className="publications-bg">
        <div className="pub-orb"></div>
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Publications</h2>
          <p className="section-subtitle">Research contributions to the community</p>
        </motion.div>

        <div className="publications-grid">
          {publications.map((pub, index) => (
            <motion.a
              key={index}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="publication-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="pub-card-glow"></div>
              <div className="pub-card-border"></div>

              <div className="pub-content">
                <motion.div
                  className="publication-icon"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <FiBookOpen size={32} />
                </motion.div>

                <div className="publication-body">
                  <div className="publication-meta">
                    <span className="publisher">{pub.publisher}</span>
                    <span className="date">{pub.date}</span>
                  </div>

                  <h3 className="publication-title">{pub.title}</h3>
                  <p className="publication-description">{pub.description}</p>

                  <div className="publication-link">
                    <span>Read Paper</span>
                    <FiExternalLink size={16} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
