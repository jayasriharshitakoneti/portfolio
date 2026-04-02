import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle, FiExternalLink } from 'react-icons/fi';
import { certifications } from '../data/portfolioData';
import './Certifications.css';

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="certifications" id="certifications">
      <div className="cert-bg">
        <div className="cert-orb"></div>
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Professional credentials and achievements</p>
        </motion.div>

        <motion.div
          className="certifications-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="certification-card"
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                y: -5,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              <div className="cert-card-shine"></div>
              <div className="cert-content">
                <motion.div
                  className="cert-icon"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  <FiAward size={24} />
                </motion.div>

                <div className="cert-info">
                  <h3 className="cert-name">{cert.name}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <span className="cert-date">
                    <FiCheckCircle size={12} />
                    <span>Earned {cert.date}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
