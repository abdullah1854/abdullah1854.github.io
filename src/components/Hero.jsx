import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abdullah0094',
      icon: 'fab fa-linkedin-in',
      color: 'hover:bg-[#0077B5]',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/abdullah1854',
      icon: 'fab fa-github',
      color: 'hover:bg-gray-800',
    },
    {
      name: 'Email',
      url: 'https://www.linkedin.com/in/abdullah0094',
      icon: 'fas fa-envelope',
      color: 'hover:bg-primary-500',
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 section-padding">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
                <i className="fas fa-map-marker-alt mr-2"></i>
                Based in Singapore
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="heading-1">
              Abdullah Sarfaraz
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold text-primary-500"
            >
              Solution Architect & AI Innovation Leader
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Manager, IT System at <span className="font-semibold text-gray-900 dark:text-white">Goldbell Group</span>
              <br />
              Spearheading ERP transformation and AI adoption with 8+ years of Microsoft Dynamics 365 F&O expertise
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="btn-primary">
                <i className="fas fa-paper-plane"></i>
                Get In Touch
              </a>
              <button
                onClick={() => {
                  // Generate CV download - you can link to actual PDF later
                  const link = document.createElement('a');
                  link.href = '/Abdullah_Sarfaraz_CV.pdf'; // Replace with actual CV file
                  link.download = 'Abdullah_Sarfaraz_CV.pdf';
                  link.click();
                }}
                className="btn-secondary group"
              >
                <i className="fas fa-download group-hover:animate-bounce"></i>
                Download CV
              </button>
              <a href="#experience" className="btn-secondary">
                <i className="fas fa-briefcase"></i>
                View Experience
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl blur-2xl opacity-20"></div>
                <img
                  src="/Abdullah.JPG"
                  alt="Abdullah Sarfaraz - Solution Architect and Manager of IT Systems"
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white dark:border-dark-card"
                  loading="eager"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
                        <rect width="400" height="400" fill="#0078D7"/>
                        <text x="200" y="220" font-family="Arial" font-size="120" font-weight="bold" fill="white" text-anchor="middle">A</text>
                      </svg>
                    `)}`;
                  }}
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-dark-card rounded-xl shadow-lg p-4 border border-gray-100 dark:border-dark-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Available for consulting
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400"
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
