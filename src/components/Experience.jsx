import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCompanies, setExpandedCompanies] = useState({});

  const toggleCompany = (company) => {
    setExpandedCompanies(prev => ({
      ...prev,
      [company]: !prev[company]
    }));
  };

  const experiences = [
    {
      title: 'Manager, IT System',
      company: 'Goldbell Group',
      location: 'Singapore',
      period: 'Jul 2025 - Present',
      duration: '4 mos',
      achievements: [
        'Spearheaded ERP and AI initiatives, aligning D365F&O customization with business strategy',
        'Led cross-functional teams to implement Copilot, boosting operational efficiency by 50%',
        'Drove adoption of intelligent automation tools, reducing process times and improving data accuracy'
      ]
    },
    {
      title: 'Assistant Manager, IT System',
      company: 'Goldbell Group',
      location: 'Singapore',
      period: 'Oct 2022 - Jul 2025',
      duration: '2 yrs 10 mos',
      achievements: [
        'Managed D365F&O customizations and system integrations',
        'Led AI adoption strategies and digital transformation initiatives',
        'Collaborated with stakeholders to optimize business processes'
      ]
    },
    {
      title: 'Application Development Senior Analyst',
      company: 'Accenture',
      location: 'Noida, India',
      period: 'Sep 2021 - Oct 2022',
      duration: '1 yr 2 mos',
      achievements: [
        'Led D365 FnO integration projects as Integration Lead',
        'Designed integrations using Web Services, Logic Apps, Data Entities, and OData',
        'Recognized with Sparkling Star and ACE awards for high-impact solutions'
      ]
    },
    {
      title: 'Senior Consultant - D365',
      company: 'OnActuate',
      location: 'Gurugram, India',
      period: 'May 2021 - Sep 2021',
      duration: '5 mos',
      achievements: [
        'Led upgrade from AX 2012 to Dynamics 365 F&O',
        'Provided optimization support for existing D365FO implementations'
      ]
    },
    {
      title: 'Senior Consultant',
      company: 'Microsenze Dynamics',
      location: 'Noida, India',
      period: 'Dec 2019 - May 2021',
      duration: '1 yr 6 mos',
      achievements: [
        'Delivered D365 F&O implementation projects',
        'Provided technical consulting for enterprise clients'
      ]
    },
    {
      title: 'D365 Technical Consultant',
      company: 'PwC',
      location: 'Gurugram, India',
      period: 'Sep 2019 - Nov 2019',
      duration: '3 mos',
      achievements: [
        'Provided D365 technical consulting services',
        'Supported client implementations and customizations'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'CGI',
      location: 'Bangalore, India',
      period: 'Sep 2018 - Jul 2019',
      duration: '11 mos',
      achievements: [
        'Developed software solutions for enterprise clients',
        'Worked on D365 and ERP projects'
      ]
    },
    {
      title: 'Associate Software Engineer',
      company: 'CGI',
      location: 'Bengaluru, India',
      period: 'Dec 2016 - Sep 2018',
      duration: '1 yr 10 mos',
      achievements: [
        'Started career in software development',
        'Gained expertise in Microsoft technologies'
      ]
    }
  ];

  // Group experiences by company
  const groupedExperiences = experiences.reduce((acc, exp) => {
    const key = `${exp.company}-${exp.location}`;
    if (!acc[key]) {
      acc[key] = {
        company: exp.company,
        location: exp.location,
        roles: []
      };
    }
    acc[key].roles.push(exp);
    return acc;
  }, {});

  // Sort roles within each company by date (most recent first)
  Object.values(groupedExperiences).forEach(group => {
    group.roles.sort((a, b) => {
      // Parse dates for comparison (format: "MMM YYYY")
      const parseDate = (dateStr) => {
        const [month, year] = dateStr.trim().split(' ');
        const monthMap = {
          'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
          'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
        };
        return new Date(parseInt(year), monthMap[month] || 0);
      };
      
      const dateA = parseDate(a.period.split(' - ')[0]);
      const dateB = parseDate(b.period.split(' - ')[0]);
      return dateB - dateA; // Most recent first
    });
  });

  const groupedArray = Object.values(groupedExperiences);

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div ref={ref}>
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Professional Experience</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
            {groupedArray.map((group, groupIndex) => {
              const isExpanded = expandedCompanies[group.company];
              const firstRole = group.roles[0];
              const hasMultipleRoles = group.roles.length > 1;

              return (
                <motion.article
                  key={groupIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: groupIndex * 0.05, duration: 0.5 }}
                  className="card p-6 card-hover relative"
                >
                  <div className="absolute left-0 top-6 w-1 h-16 bg-primary-500 rounded-r"></div>
                  <div className="pl-6">
                    {/* Main Role (always visible) */}
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="heading-4 text-lg">{firstRole.title}</h3>
                      {hasMultipleRoles && (
                        <button
                          onClick={() => toggleCompany(group.company)}
                          className="ml-4 p-2 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          aria-label={isExpanded ? 'Collapse roles' : 'Expand roles'}
                          aria-expanded={isExpanded}
                        >
                          <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'} text-sm`}></i>
                        </button>
                      )}
                    </div>
                    <div className="text-primary-500 font-semibold mb-1 flex items-center gap-2">
                      <i className="fas fa-building text-sm"></i>
                      {group.company}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      {group.location}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                      <i className="far fa-calendar mr-2"></i>
                      {firstRole.period} · {firstRole.duration}
                    </div>
                    <ul className="space-y-2">
                      {firstRole.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                          <span className="text-primary-500 mt-1 flex-shrink-0">▪</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Additional Roles (dropdown) */}
                    {hasMultipleRoles && isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-gray-200 dark:border-dark-border space-y-6"
                      >
                        {group.roles.slice(1).map((role, roleIndex) => (
                          <div key={roleIndex} className="space-y-2">
                            <h4 className="font-semibold text-gray-900 dark:text-white text-base">
                              {role.title}
                            </h4>
                            <div className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                              <i className="far fa-calendar mr-2"></i>
                              {role.period} · {role.duration}
                            </div>
                            <ul className="space-y-2">
                              {role.achievements.map((achievement, i) => (
                                <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                                  <span className="text-primary-500 mt-1 flex-shrink-0">▪</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {/* Show indicator if not expanded */}
                    {hasMultipleRoles && !isExpanded && (
                      <div className="mt-4 text-sm text-primary-500 dark:text-primary-400 cursor-pointer hover:underline"
                           onClick={() => toggleCompany(group.company)}>
                        <i className="fas fa-chevron-down mr-1"></i>
                        View {group.roles.length - 1} more role{group.roles.length - 1 > 1 ? 's' : ''}
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
