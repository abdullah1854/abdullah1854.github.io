import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const articles = [
    {
      title: 'Maximizing ROI with Microsoft Copilot in D365 F&O',
      excerpt: 'Discover how implementing Copilot can boost operational efficiency by 50% through intelligent automation and AI-driven insights in enterprise ERP systems.',
      date: 'January 15, 2025',
      readTime: '8 min read',
      category: 'AI & Automation',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
      tags: ['Microsoft Copilot', 'D365', 'AI', 'ROI'],
      featured: true
    },
    {
      title: 'Best Practices for D365 F&O Integration Architecture',
      excerpt: 'Learn proven integration patterns using Logic Apps, OData, and Data Entities for seamless connectivity in modern ERP landscapes.',
      date: 'December 10, 2024',
      readTime: '12 min read',
      category: 'Integration',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop',
      tags: ['D365 F&O', 'Integration', 'Logic Apps', 'OData']
    },
    {
      title: 'Successful AX 2012 to D365 Migration: Lessons Learned',
      excerpt: 'Key insights and strategies from leading enterprise migrations from legacy AX systems to modern cloud-based D365 Finance & Operations.',
      date: 'November 20, 2024',
      readTime: '10 min read',
      category: 'ERP Transformation',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
      tags: ['Migration', 'AX 2012', 'D365 F&O', 'Cloud']
    },
    {
      title: 'Intelligent Automation: Reducing Process Times with Power Platform',
      excerpt: 'Explore how Power Platform tools combined with D365 can dramatically reduce manual processes and improve data accuracy across the enterprise.',
      date: 'October 5, 2024',
      readTime: '7 min read',
      category: 'Automation',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop',
      tags: ['Power Platform', 'Automation', 'Process Optimization']
    },
    {
      title: 'Building a Future-Ready ERP Strategy for Singapore Enterprises',
      excerpt: 'Strategic considerations for organizations in Singapore looking to modernize their ERP systems with cloud-first, AI-enabled solutions.',
      date: 'September 15, 2024',
      readTime: '9 min read',
      category: 'Strategy',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
      tags: ['Strategy', 'Cloud', 'Digital Transformation']
    },
    {
      title: 'Microsoft Copilot Studio: Building Custom AI Assistants',
      excerpt: 'Hands-on guide to creating tailored AI assistants using Copilot Studio to enhance D365 user experience and productivity.',
      date: 'August 22, 2024',
      readTime: '11 min read',
      category: 'AI Development',
      image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800&auto=format&fit=crop',
      tags: ['Copilot Studio', 'AI Development', 'Custom AI']
    }
  ];

  return (
    <section id="blog" className="section-padding">
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
              Insights & Articles
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
              className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Sharing knowledge on ERP transformation, AI adoption, and digital innovation
            </motion.p>
          </div>

          {/* Featured Article */}
          {articles.filter(a => a.featured).map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="card overflow-hidden mb-8 card-hover group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden h-64 md:h-auto">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <i className="far fa-clock"></i>
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="heading-3 mb-4 group-hover:text-primary-500 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-dark-border text-gray-700 dark:text-gray-300 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <button className="btn-primary w-fit">
                    Read Article <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.filter(a => !a.featured).map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card overflow-hidden card-hover group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-dark-card/90 text-xs font-semibold rounded-full text-gray-900 dark:text-white">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <i className="far fa-clock"></i>
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="heading-4 mb-3 group-hover:text-primary-500 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-dark-border text-gray-700 dark:text-gray-300 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-primary-500 font-medium text-sm hover:underline flex items-center gap-2">
                    Read More <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Want to stay updated with the latest insights?
            </p>
            <button className="btn-secondary">
              <i className="fas fa-bell mr-2"></i>
              Subscribe to Newsletter
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;

