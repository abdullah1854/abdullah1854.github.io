import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div ref={ref}>
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Professional Experience</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="card p-6 card-hover relative"
              >
                <div className="absolute left-0 top-6 w-1 h-16 bg-primary-500 rounded-r"></div>
                <div className="pl-6">
                  <h3 className="heading-4 text-lg mb-2">{exp.title}</h3>
                  <div className="text-primary-500 font-semibold mb-1 flex items-center gap-2">
                    <i className="fas fa-building text-sm"></i>
                    {exp.company}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    {exp.location}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                    <i className="far fa-calendar mr-2"></i>
                    {exp.period} · {exp.duration}
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-primary-500 mt-1 flex-shrink-0">▪</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
