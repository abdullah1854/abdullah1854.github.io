import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'ERP & Enterprise Solutions',
      icon: 'fas fa-cogs',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/10',
      skills: ['Dynamics 365 F&O', 'X++', 'ERP Implementation', 'Business Process Analysis', 'System Integration']
    },
    {
      title: 'AI & Automation',
      icon: 'fas fa-robot',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/10',
      skills: ['Microsoft Copilot Studio', 'Power Platform', 'Power Automate', 'AI Adoption Strategy', 'Process Automation']
    },
    {
      title: 'Data & Analytics',
      icon: 'fas fa-database',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/10',
      skills: ['SQL Server', 'Power BI', 'Data Warehousing', 'ETL/SSIS', 'Business Intelligence']
    },
    {
      title: 'Cloud Technologies',
      icon: 'fas fa-cloud',
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/10',
      skills: ['Microsoft Azure', 'Azure DevOps', 'Cloud Architecture', 'Microsoft 365']
    },
    {
      title: 'Project Management',
      icon: 'fas fa-project-diagram',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/10',
      skills: ['Agile Methodology', 'Team Leadership', 'Stakeholder Management', 'Solution Architecture']
    },
    {
      title: 'Training & Education',
      icon: 'fas fa-chalkboard-teacher',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/10',
      skills: ['Technical Training', 'Workshop Facilitation', 'Knowledge Transfer', 'Mentoring']
    }
  ];

  return (
    <section id="skills" className="section-padding section-bg">
      <div className="container-custom">
        <motion.div ref={ref}>
          <div className="text-center mb-8">
            <h2 className="heading-2 mb-3">Skills & Expertise</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card p-5 card-hover"
              >
                <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-3`}>
                  <i className={`${category.icon} text-xl ${category.color}`}></i>
                </div>
                <h3 className="heading-4 text-lg mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="badge text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
