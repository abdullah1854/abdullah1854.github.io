import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Get In Touch</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="card p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 dark:bg-primary-900/20 rounded-full mb-6">
                <i className="fas fa-rocket text-2xl text-primary-500"></i>
              </div>

              <h3 className="heading-3 mb-4">Let's Connect & Innovate Together</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Transforming businesses through cutting-edge AI solutions and Microsoft technologies
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.description}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className={`w-14 h-14 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-gray-200 dark:border-dark-border">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="flex items-center justify-center gap-3"
                  >
                    <i className={`${info.icon} text-primary-500`}></i>
                    <div className="text-left">
                      <div className="text-xs text-gray-500 dark:text-gray-500">{info.title}</div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
