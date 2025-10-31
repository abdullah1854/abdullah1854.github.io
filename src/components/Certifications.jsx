import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    {
      title: 'Microsoft Certified Trainer (MCT)',
      issuer: 'Microsoft',
      date: 'Since 2020',
      icon: 'fas fa-certificate',
      color: 'text-blue-500',
      description: 'Authorized to deliver official Microsoft training courses and workshops'
    },
    {
      title: 'MCSA: SQL 2016 BI Development',
      issuer: 'Microsoft',
      date: 'Certified',
      icon: 'fas fa-database',
      color: 'text-green-500',
      description: 'Expertise in SQL Server 2016 Business Intelligence development and analytics'
    },
    {
      title: 'Copilot Studio Expert',
      issuer: 'Microsoft',
      date: 'Subject Matter Expert',
      icon: 'fas fa-robot',
      color: 'text-purple-500',
      description: 'Specialized in building intelligent conversational AI solutions'
    },
    {
      title: 'Excellence Awards',
      issuer: 'Accenture',
      date: '2021-2022',
      icon: 'fas fa-trophy',
      color: 'text-yellow-500',
      description: 'Sparkling Star and ACE awards for delivering high-impact solutions'
    }
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        <motion.div ref={ref}>
          <div className="text-center mb-8">
            <h2 className="heading-2 mb-3">Certifications & Awards</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card p-5 card-hover"
              >
                <div className="flex items-start gap-3">
                  <div className={`text-3xl ${cert.color} flex-shrink-0`}>
                    <i className={cert.icon}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-4 text-lg mb-2">{cert.title}</h3>
                    <div className="text-primary-500 font-semibold mb-1 text-sm">
                      {cert.issuer}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <i className="far fa-calendar mr-2"></i>
                      {cert.date}
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
