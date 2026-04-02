import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiGithub, FiLinkedin, FiSend, FiUser, FiMail, FiMessageSquare, FiCheck, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '' // Hidden field - bots will fill this
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formLoadTime = useRef(Date.now());

  // Reset form load time when component mounts
  useEffect(() => {
    formLoadTime.current = Date.now();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam protection checks
    // 1. Honeypot check - if filled, it's a bot
    if (formData.honeypot) {
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      return; // Silently fail for bots
    }

    // 2. Time-based check - if submitted too fast (< 3 seconds), likely a bot
    const timeSpent = Date.now() - formLoadTime.current;
    if (timeSpent < 3000) {
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      return; // Silently fail for bots
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // EmailJS configuration - Replace these with your actual EmailJS credentials
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: personalInfo.name
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      formLoadTime.current = Date.now(); // Reset timer
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-bg">
        <div className="contact-orb-1"></div>
        <div className="contact-orb-2"></div>
        <div className="contact-grid"></div>
      </div>

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
              or just want to say hi, fill out the form below and I'll get back to you!
            </p>
          </div>

          <motion.div
            className="contact-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Contact Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Honeypot field - hidden from humans, bots will fill it */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="honeypot-field"
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <FiUser /> Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <FiMail /> Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  <FiMessageSquare /> Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <FiMessageSquare /> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows="5"
                  required
                ></textarea>
              </div>

              {status.message && (
                <motion.div
                  className={`form-status ${status.type}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status.type === 'success' ? <FiCheck /> : <FiAlertCircle />}
                  {status.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            {/* Side Info */}
            <div className="contact-info-panel">
              <motion.div
                className="info-card"
                whileHover={{ scale: 1.02 }}
              >
                <div className="info-icon">
                  <FiMapPin />
                </div>
                <div className="info-details">
                  <span className="info-label">Location</span>
                  <span className="info-value">{personalInfo.location}</span>
                </div>
              </motion.div>

              <div className="social-links">
                <p>Connect with me</p>
                <div className="social-buttons">
                  <motion.a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-btn"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub size={22} />
                  </motion.a>
                  <motion.a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-btn"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiLinkedin size={22} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
