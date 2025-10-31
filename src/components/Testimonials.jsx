import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const achievements = [
    {
      icon: '🏆',
      title: 'Sparkling Star Award',
      description: 'Accenture recognition for high-impact D365 solutions',
      year: '2022'
    },
    {
      icon: '🎖️',
      title: 'ACE Award',
      description: 'Excellence in D365 F&O integration projects',
      year: '2021'
    },
    {
      icon: '📈',
      title: '50% Efficiency Boost',
      description: 'Achieved through Copilot implementation at Goldbell Group',
      year: '2024'
    },
    {
      icon: '🚀',
      title: 'Digital Transformation',
      description: 'Led multiple AX 2012 to D365 F&O migrations',
      year: '2021-2024'
    },
    {
      icon: '🤖',
      title: 'AI Innovation Leader',
      description: 'Pioneered AI adoption strategies across organizations',
      year: '2023-Present'
    },
    {
      icon: '👥',
      title: '100+ Projects',
      description: 'Successfully delivered across 6+ companies',
      year: '2016-Present'
    }
  ];

  const companyLogos = [
    { name: 'Goldbell Group', emoji: '🏢', years: '2022-Present' },
    { name: 'Accenture', emoji: '💼', years: '2021-2022' },
    { name: 'PwC', emoji: '🏦', years: '2019' },
    { name: 'CGI', emoji: '💻', years: '2016-2019' },
    { name: 'OnActuate', emoji: '🚀', years: '2021' },
    { name: 'Microsenze', emoji: '📊', years: '2019-2021' }
  ];

  const skills = [
    { name: 'D365 F&O', level: 95 },
    { name: 'AI & Copilot', level: 90 },
    { name: 'System Integration', level: 92 },
    { name: 'Digital Transformation', level: 88 }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-dark-bg dark:to-dark-card/30">
      <div className="container-custom">
        <motion.div ref={ref}>
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="heading-2 mb-4"
            >
              Achievements & Recognition
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-1 bg-primary-500 mx-auto rounded-full"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Recognized for excellence in ERP transformation and AI innovation
            </motion.p>
          </div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-sm border border-gray-100 dark:border-dark-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {achievement.description}
                    </p>
                    <span className="text-xs text-primary-500 font-medium">
                      {achievement.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="max-w-3xl mx-auto mb-12 bg-white dark:bg-dark-card rounded-xl p-8 shadow-sm border border-gray-100 dark:border-dark-border"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Core Expertise Areas
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: 0.6 + index * 0.1, duration: 1, ease: "easeOut" }}
                      className="bg-primary-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Company Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
              Professional Journey
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              {companyLogos.map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
                  className="group"
                >
                  <div className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-card transition-colors">
                    <span className="text-3xl">{company.emoji}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {company.name}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {company.years}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="text-center p-6 bg-primary-50 dark:bg-primary-900/10 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">8+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-primary-50 dark:bg-primary-900/10 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">100+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center p-6 bg-primary-50 dark:bg-primary-900/10 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">6+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Companies</div>
            </div>
            <div className="text-center p-6 bg-primary-50 dark:bg-primary-900/10 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">2</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Excellence Awards</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;