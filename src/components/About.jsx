import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="about" className="section-padding section-bg">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="heading-2 mb-4">About Me</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="card p-8 space-y-6">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Solution Architect and AI Innovation Leader with over{' '}
              <span className="font-semibold text-primary-500">8 years of specialized experience</span> in
              Microsoft Dynamics 365 Finance & Operations. Currently serving as Manager, IT System at{' '}
              <span className="font-semibold text-gray-900 dark:text-white">Goldbell Group</span> in
              Singapore, where I spearhead ERP and AI initiatives, aligning D365F&O customization with
              business strategy and leading cross-functional teams to implement cutting-edge solutions like
              Microsoft Copilot.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              As a{' '}
              <span className="font-semibold text-primary-500">Microsoft Certified Trainer</span> since 2020
              and founder of AI Savvy Tech, I'm passionate about making complex technologies accessible to
              businesses worldwide. My career journey spans prestigious firms including{' '}
              <span className="font-semibold">Accenture, OnActuate, PwC, CGI, and Microsenze Dynamics</span>,
              where I've led numerous ERP transformation projects, integration implementations, and system
              upgrades from AX 2012 to D365 F&O.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Recognized for excellence with awards like{' '}
              <span className="font-semibold text-primary-500">'Sparkling Star' and 'ACE'</span> at
              Accenture, I combine technical expertise in integration technologies (Web Services, Logic Apps,
              Data Entities, OData) with business acumen to deliver scalable, enterprise-grade solutions that
              drive operational efficiency and digital transformation.
            </p>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-gray-200 dark:border-dark-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">8+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">50%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Efficiency Boost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Major Companies</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
