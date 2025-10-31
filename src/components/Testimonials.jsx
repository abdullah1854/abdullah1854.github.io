import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'Senior Executive',
      role: 'Director of Operations',
      company: 'Goldbell Group',
      image: 'https://ui-avatars.com/api/?name=Director&background=0078D7&color=fff&size=128',
      quote: 'Abdullah\'s leadership in implementing Microsoft Copilot resulted in a 50% boost in operational efficiency. His strategic approach to ERP transformation has been instrumental in our digital journey.',
      rating: 5
    },
    {
      name: 'Project Manager',
      role: 'Integration Lead',
      company: 'Accenture',
      image: 'https://ui-avatars.com/api/?name=PM&background=0078D7&color=fff&size=128',
      quote: 'Outstanding technical expertise in D365 integrations. Abdullah delivered high-impact solutions using Logic Apps and OData, earning recognition with our Sparkling Star award.',
      rating: 5
    },
    {
      name: 'Technology Director',
      role: 'Head of Digital Transformation',
      company: 'Enterprise Client',
      image: 'https://ui-avatars.com/api/?name=TD&background=0078D7&color=fff&size=128',
      quote: 'Abdullah\'s AI adoption strategies and automation tools significantly reduced our process times while improving data accuracy. A true innovation leader.',
      rating: 5
    },
    {
      name: 'Senior Consultant',
      role: 'D365 Architect',
      company: 'OnActuate',
      image: 'https://ui-avatars.com/api/?name=SC&background=0078D7&color=fff&size=128',
      quote: 'Led our critical AX 2012 to D365 F&O upgrade with exceptional skill. His optimization support for existing implementations was invaluable.',
      rating: 5
    }
  ];

  const companyLogos = [
    { name: 'Goldbell Group', logo: 'https://img.shields.io/badge/Goldbell-Group-0078D7?style=for-the-badge' },
    { name: 'Accenture', logo: 'https://img.shields.io/badge/Accenture-A100FF?style=for-the-badge&logo=accenture&logoColor=white' },
    { name: 'Microsoft', logo: 'https://img.shields.io/badge/Microsoft-0078D7?style=for-the-badge&logo=microsoft&logoColor=white' },
    { name: 'PwC', logo: 'https://img.shields.io/badge/PwC-D04A02?style=for-the-badge' },
    { name: 'CGI', logo: 'https://img.shields.io/badge/CGI-ED1C24?style=for-the-badge' },
    { name: 'OnActuate', logo: 'https://img.shields.io/badge/OnActuate-003D7A?style=for-the-badge' }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gray-50 dark:bg-dark-card/30">
      <div className="container-custom">
        <motion.div ref={ref}>
          {/* Section Header */}
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="heading-2 mb-3"
            >
              Client Testimonials & Recognition
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-1 bg-primary-500 mx-auto rounded-full"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Trusted by leading organizations for ERP transformation and AI innovation
            </motion.p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card p-5 card-hover"
              >
                {/* Quote Icon */}
                <div className="text-primary-500 mb-3">
                  <i className="fas fa-quote-left text-2xl opacity-20"></i>
                </div>

                {/* Quote */}
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {testimonial.quote}
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400 text-sm"></i>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-primary-500 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Company Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              Trusted by Industry Leaders
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {companyLogos.map((company, index) => (
                <motion.img
                  key={index}
                  src={company.logo}
                  alt={company.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                  className="h-8 opacity-70 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

