import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCompany, setExpandedCompany] = useState(null);

  // Group experiences by company
  const experienceGroups = [
    {
      company: 'Goldbell Group',
      location: 'Singapore',
      totalDuration: '2 yrs 4 mos',
      logo: '🏢',
      roles: [
        {
          title: 'Manager, IT System',
          period: 'Jul 2025 - Present',
          duration: '4 mos',
          isCurrent: true,
          achievements: [
            'Spearheaded ERP and AI initiatives, aligning D365F&O customization with business strategy',
            'Led cross-functional teams to implement Copilot, boosting operational efficiency by 50%',
            'Drove adoption of intelligent automation tools, reducing process times and improving data accuracy'
          ]
        },
        {
          title: 'Assistant Manager, IT System',
          period: 'Oct 2022 - Jul 2025',
          duration: '2 yrs 10 mos',
          achievements: [
            'Managed D365F&O customizations and system integrations',
            'Led AI adoption strategies and digital transformation initiatives',
            'Collaborated with stakeholders to optimize business processes'
          ]
        }
      ]
    },
    {
      company: 'Accenture',
      location: 'Noida, India',
      totalDuration: '1 yr 2 mos',
      logo: '💼',
      roles: [
        {
          title: 'Application Development Senior Analyst',
          period: 'Sep 2021 - Oct 2022',
          duration: '1 yr 2 mos',
          achievements: [
            'Led D365 FnO integration projects as Integration Lead',
            'Designed integrations using Web Services, Logic Apps, Data Entities, and OData',
            'Recognized with Sparkling Star and ACE awards for high-impact solutions'
          ]
        }
      ]
    },
    {
      company: 'OnActuate',
      location: 'Gurugram, India',
      totalDuration: '5 mos',
      logo: '🚀',
      roles: [
        {
          title: 'Senior Consultant - D365',
          period: 'May 2021 - Sep 2021',
          duration: '5 mos',
          achievements: [
            'Led upgrade from AX 2012 to Dynamics 365 F&O',
            'Provided optimization support for existing D365FO implementations'
          ]
        }
      ]
    },
    {
      company: 'Microsenze Dynamics',
      location: 'Noida, India',
      totalDuration: '1 yr 6 mos',
      logo: '📊',
      roles: [
        {
          title: 'Senior Consultant',
          period: 'Dec 2019 - May 2021',
          duration: '1 yr 6 mos',
          achievements: [
            'Delivered D365 F&O implementation projects',
            'Provided technical consulting for enterprise clients'
          ]
        }
      ]
    },
    {
      company: 'PwC',
      location: 'Gurugram, India',
      totalDuration: '3 mos',
      logo: '🏦',
      roles: [
        {
          title: 'D365 Technical Consultant',
          period: 'Sep 2019 - Nov 2019',
          duration: '3 mos',
          achievements: [
            'Provided D365 technical consulting services',
            'Supported client implementations and customizations'
          ]
        }
      ]
    },
    {
      company: 'CGI',
      location: 'Bangalore, India',
      totalDuration: '2 yrs 9 mos',
      logo: '💻',
      roles: [
        {
          title: 'Software Engineer',
          period: 'Sep 2018 - Jul 2019',
          duration: '11 mos',
          achievements: [
            'Developed software solutions for enterprise clients',
            'Worked on D365 and ERP projects'
          ]
        },
        {
          title: 'Associate Software Engineer',
          period: 'Dec 2016 - Sep 2018',
          duration: '1 yr 10 mos',
          achievements: [
            'Started career in software development',
            'Gained expertise in Microsoft technologies'
          ]
        }
      ]
    }
  ];

  const toggleCompany = (company) => {
    setExpandedCompany(expandedCompany === company ? null : company);
  };

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-dark-bg/50">
      <div className="container-custom">
        <motion.div ref={ref}>
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Professional Experience</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              8+ years of expertise in Microsoft Dynamics 365 F&O, leading digital transformation and AI innovation
            </p>
            <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {experienceGroups.map((group, index) => {
              const isExpanded = expandedCompany === group.company || group.roles.length === 1;
              const currentRole = group.roles[0];

              return (
                <motion.article
                  key={group.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white dark:bg-dark-card rounded-xl shadow-sm border border-gray-200 dark:border-dark-border overflow-hidden"
                >
                  {/* Company Header - Always Visible */}
                  <div
                    className={`p-6 ${group.roles.length > 1 ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-dark-bg/30 transition-colors' : ''}`}
                    onClick={() => group.roles.length > 1 && toggleCompany(group.company)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          {/* Company Logo/Icon */}
                          <div className="w-12 h-12 flex items-center justify-center bg-primary-50 dark:bg-primary-900/20 rounded-lg text-2xl flex-shrink-0">
                            {group.logo}
                          </div>

                          <div className="flex-1">
                            {/* Current/Latest Role Title */}
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                              {currentRole.title}
                            </h3>

                            {/* Company Info */}
                            <div className="flex flex-wrap items-center gap-3 text-sm">
                              <span className="text-primary-600 dark:text-primary-400 font-medium">
                                {group.company}
                              </span>
                              <span className="text-gray-400">•</span>
                              <span className="text-gray-600 dark:text-gray-400">
                                <i className="fas fa-map-marker-alt mr-1 text-xs"></i>
                                {group.location}
                              </span>
                              {currentRole.isCurrent && (
                                <>
                                  <span className="text-gray-400">•</span>
                                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400">
                                    Current
                                  </span>
                                </>
                              )}
                            </div>

                            {/* Duration Info */}
                            <div className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                              {group.roles.length === 1 ? (
                                <span>
                                  <i className="far fa-calendar mr-1"></i>
                                  {currentRole.period} · {currentRole.duration}
                                </span>
                              ) : (
                                <span>
                                  <i className="far fa-calendar mr-1"></i>
                                  {currentRole.period} · Total: {group.totalDuration}
                                  {group.roles.length > 1 && (
                                    <span className="ml-2 text-primary-500">
                                      ({group.roles.length} roles)
                                    </span>
                                  )}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Expand/Collapse Indicator */}
                        {group.roles.length > 1 && (
                          <div className="mt-3 flex items-center justify-end">
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-gray-400"
                            >
                              <i className="fas fa-chevron-down"></i>
                            </motion.div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Show achievements for single role or current role when collapsed */}
                    {(group.roles.length === 1 || !isExpanded) && (
                      <div className="mt-4 ml-16">
                        <ul className="space-y-2">
                          {currentRole.achievements.slice(0, 2).map((achievement, i) => (
                            <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                              <span className="text-primary-500 mt-0.5 flex-shrink-0">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                          {!isExpanded && currentRole.achievements.length > 2 && (
                            <li className="text-sm text-primary-500 dark:text-primary-400 ml-4">
                              Click to see more...
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Expanded Content - All Roles */}
                  <AnimatePresence>
                    {isExpanded && group.roles.length > 1 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-100 dark:border-dark-border"
                      >
                        <div className="p-6 pt-0 space-y-6">
                          {group.roles.map((role, roleIndex) => (
                            <div
                              key={roleIndex}
                              className={`${roleIndex > 0 ? 'border-t border-gray-100 dark:border-dark-border pt-6' : 'pt-4'}`}
                            >
                              <div className="ml-16">
                                <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                                  {role.title}
                                </h4>
                                <div className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                                  <i className="far fa-calendar mr-1"></i>
                                  {role.period} · {role.duration}
                                  {role.isCurrent && (
                                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400">
                                      Current
                                    </span>
                                  )}
                                </div>
                                <ul className="space-y-2">
                                  {role.achievements.map((achievement, i) => (
                                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                                      <span className="text-primary-500 mt-0.5 flex-shrink-0">•</span>
                                      <span>{achievement}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>

          {/* Career Timeline Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <i className="fas fa-briefcase text-primary-500"></i>
                <span><strong>6</strong> Companies</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-chart-line text-primary-500"></i>
                <span><strong>8+</strong> Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-award text-primary-500"></i>
                <span><strong>2</strong> Excellence Awards</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;