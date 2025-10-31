import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      name: 'D365 F&O Intelligent Automation Framework',
      description: 'Custom automation framework for Microsoft Dynamics 365 F&O using Power Platform and Azure services. Reduced process times by 60% through intelligent workflows and AI-powered decision making.',
      demoUrl: null,
      githubUrl: null,
      techStack: ['D365 F&O', 'Power Platform', 'Azure', 'Logic Apps'],
      impact: '60% faster processing',
      category: 'Enterprise ERP',
      featured: true
    },
    {
      name: 'Microsoft Copilot Integration Accelerator',
      description: 'Pre-built integration package for implementing Microsoft Copilot across D365 environments. Achieved 50% operational efficiency boost with AI-powered insights and automation.',
      demoUrl: null,
      githubUrl: null,
      techStack: ['Copilot Studio', 'D365', 'AI Services', 'Power Automate'],
      impact: '50% efficiency gain',
      category: 'AI & Automation',
      featured: true
    },
    {
      name: 'ERP Migration Toolkit (AX 2012 → D365)',
      description: 'Comprehensive migration framework for seamless upgrade from AX 2012 to D365 F&O. Includes data migration scripts, customization templates, and testing automation.',
      demoUrl: null,
      githubUrl: null,
      techStack: ['AX 2012', 'D365 F&O', 'Azure DevOps', 'X++'],
      impact: '40% reduced migration time',
      category: 'Migration',
      featured: false
    },
    {
      name: 'AI Savvy Tech',
      description: 'Modern web application starter template with cutting-edge technologies. A foundation for rapid development of scalable web solutions with best practices built-in.',
      demoUrl: null,
      githubUrl: 'https://github.com/abdullah1854/temp-nascent-web-start',
      techStack: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS'],
      impact: 'Open Source',
      category: 'Web Development',
      featured: false
    },
    {
      name: 'Town Bill Buddy',
      description: 'Smart utility bill management system designed to help residents track, manage, and optimize their municipal bills. Streamlining community financial management.',
      demoUrl: null,
      githubUrl: 'https://github.com/abdullah1854/town-bill-buddy',
      techStack: ['Python', 'Flask', 'PostgreSQL', 'Bootstrap'],
      impact: 'Community Tool',
      category: 'Utility',
      featured: false
    },
    {
      name: 'SmartShopper',
      description: 'Intelligent shopping companion application that helps users make informed purchasing decisions. Features price comparison, deal alerts, and smart recommendations.',
      demoUrl: null,
      githubUrl: 'https://github.com/abdullah1854/SmartShopper',
      techStack: ['JavaScript', 'Express', 'MongoDB', 'REST API'],
      impact: 'Consumer App',
      category: 'E-Commerce',
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding section-bg">
      <div className="container-custom">
        <motion.div ref={ref}>
          <div className="text-center mb-8">
            <h2 className="heading-2 mb-3">Featured Projects & Solutions</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full"></div>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Real-world implementations delivering measurable business impact
            </p>
          </div>

          {/* Featured Projects */}
          <div className="max-w-6xl mx-auto space-y-4 mb-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card p-6 card-hover group"
              >
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-2 space-y-3">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <i className="fas fa-rocket text-white text-xl"></i>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="heading-3">{project.name}</h3>
                          <span className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-xs font-semibold">
                            Featured
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{project.category}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-center space-y-3">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                        {project.impact}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Measurable Impact
                      </div>
                    </div>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm py-2"
                      >
                        <i className="fab fa-github mr-2"></i>
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                className="card p-5 card-hover flex flex-col group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <i className="fas fa-code-branch text-primary-500"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-4 text-lg mb-1">{project.name}</h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{project.category}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.impact && (
                  <div className="mb-4 text-sm font-medium text-primary-500">
                    <i className="fas fa-chart-line mr-2"></i>
                    {project.impact}
                  </div>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm py-2"
                  >
                    <i className="fab fa-github mr-2"></i>
                    View on GitHub
                  </a>
                )}

                {!project.githubUrl && (
                  <div className="text-sm text-gray-500 dark:text-gray-400 italic">
                    <i className="fas fa-lock mr-2"></i>
                    Enterprise Project - NDA
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
