import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      name: 'AI Savvy Tech',
      description: 'Modern web application starter template with cutting-edge technologies. A foundation for rapid development of scalable web solutions with best practices built-in.',
      githubUrl: 'https://github.com/abdullah1854/temp-nascent-web-start',
      techStack: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      name: 'Town Bill Buddy',
      description: 'Smart utility bill management system designed to help residents track, manage, and optimize their municipal bills. Streamlining community financial management.',
      githubUrl: 'https://github.com/abdullah1854/town-bill-buddy',
      techStack: ['Python', 'Flask', 'PostgreSQL', 'Bootstrap']
    },
    {
      name: 'SmartShopper',
      description: 'Intelligent shopping companion application that helps users make informed purchasing decisions. Features price comparison, deal alerts, and smart recommendations.',
      githubUrl: 'https://github.com/abdullah1854/SmartShopper',
      techStack: ['JavaScript', 'Express', 'MongoDB', 'REST API']
    }
  ];

  return (
    <section id="projects" className="section-padding section-bg">
      <div className="container-custom">
        <motion.div ref={ref}>
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Featured Projects</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card p-6 card-hover flex flex-col"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-code-branch text-primary-500"></i>
                  </div>
                  <h3 className="heading-4 text-lg flex-1">{project.name}</h3>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-2"
                >
                  <i className="fab fa-github"></i>
                  View on GitHub
                </a>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
