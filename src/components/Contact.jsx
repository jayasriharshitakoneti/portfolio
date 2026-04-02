import { motion } from 'framer-motion';
import { FiMapPin, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-header">
            <motion.span
              className="contact-label"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.span>
            <h2 className="contact-title">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="contact-description">
              I'm currently looking for new opportunities. Whether you have a question
              or just want to say hi, feel free to reach out!
            </p>
          </div>

          <motion.div
            className="contact-cards"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="contact-card"
              whileHover={{ y: -5 }}
            >
              <div className="contact-icon">
                <FiMapPin />
              </div>
              <div className="contact-info">
                <span className="contact-info-label">Location</span>
                <span className="contact-info-value">{personalInfo.location}</span>
              </div>
            </motion.div>

            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              whileHover={{ y: -5 }}
            >
              <div className="contact-icon">
                <FiLinkedin />
              </div>
              <div className="contact-info">
                <span className="contact-info-label">LinkedIn</span>
                <span className="contact-info-value">Let's connect</span>
              </div>
            </motion.a>

            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              whileHover={{ y: -5 }}
            >
              <div className="contact-icon">
                <FiGithub />
              </div>
              <div className="contact-info">
                <span className="contact-info-label">GitHub</span>
                <span className="contact-info-value">Check my repos</span>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
