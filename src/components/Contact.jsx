import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: 'consulting'
  });
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with your email service (EmailJS, Formspree, etc.)
    console.log('Form submitted:', formData);
    setFormStatus({ submitted: true, error: false });
    setTimeout(() => setFormStatus({ submitted: false, error: false }), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abdullah0094',
      icon: 'fab fa-linkedin-in',
      color: 'hover:bg-[#0077B5]',
      description: 'Connect on LinkedIn'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/abdullah1854',
      icon: 'fab fa-github',
      color: 'hover:bg-gray-800',
      description: 'View GitHub Repositories'
    },
    {
      name: 'Message',
      url: 'https://www.linkedin.com/in/abdullah0094',
      icon: 'fas fa-envelope',
      color: 'hover:bg-primary-500',
      description: 'Send a Message'
    }
  ];

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Singapore'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Status',
      value: 'Open to consulting opportunities'
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div ref={ref}>
          <div className="text-center mb-8">
            <h2 className="heading-2 mb-3">Get In Touch</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="card p-6"
            >
              <h3 className="heading-3 mb-3">Send a Message</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Interested in collaboration? Fill out the form and I'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-card text-gray-900 dark:text-white transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-card text-gray-900 dark:text-white transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-card text-gray-900 dark:text-white transition-all"
                    placeholder="Acme Corporation"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    I'm interested in *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-card text-gray-900 dark:text-white transition-all"
                  >
                    <option value="consulting">D365 Consulting</option>
                    <option value="integration">Integration Projects</option>
                    <option value="ai-adoption">AI Adoption Strategy</option>
                    <option value="training">Training & Workshops</option>
                    <option value="other">Other Opportunities</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-card text-gray-900 dark:text-white transition-all resize-none"
                    placeholder="Tell me about your project or requirements..."
                  ></textarea>
                </div>

                {formStatus.submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400 text-sm"
                  >
                    <i className="fas fa-check-circle mr-2"></i>
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                <button type="submit" className="btn-primary w-full">
                  <i className="fas fa-paper-plane mr-2"></i>
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Right Column - Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="card p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-50 dark:bg-primary-900/20 rounded-full mb-4">
                  <i className="fas fa-rocket text-xl text-primary-500"></i>
                </div>

                <h3 className="heading-3 mb-3">Let's Innovate Together</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Transforming businesses through cutting-edge AI solutions and Microsoft technologies. Available for consulting, speaking engagements, and strategic partnerships.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <i className={`${info.icon} text-primary-500 text-xl w-6`}></i>
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-500">{info.title}</div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-gray-200 dark:border-dark-border">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Connect with me:</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.description}
                        className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-dark-border text-gray-700 dark:text-gray-300 ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
                      >
                        <i className={social.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="card p-5 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Why Work With Me?</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check-circle text-primary-500 mt-0.5"></i>
                    <span>8+ years Microsoft D365 expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check-circle text-primary-500 mt-0.5"></i>
                    <span>Proven 50% efficiency improvements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check-circle text-primary-500 mt-0.5"></i>
                    <span>Microsoft Certified Trainer (MCT)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check-circle text-primary-500 mt-0.5"></i>
                    <span>Award-winning solutions delivery</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
