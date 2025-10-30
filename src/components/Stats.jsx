import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    {
      value: 8,
      suffix: '+',
      label: 'Years of Experience',
      description: 'Microsoft Dynamics 365 F&O',
      icon: 'fas fa-calendar-check',
      color: 'text-blue-500'
    },
    {
      value: 50,
      suffix: '%',
      label: 'Efficiency Boost',
      description: 'Through AI & Automation',
      icon: 'fas fa-chart-line',
      color: 'text-green-500'
    },
    {
      value: 20,
      suffix: '+',
      label: 'ERP Projects',
      description: 'Successfully Delivered',
      icon: 'fas fa-project-diagram',
      color: 'text-purple-500'
    },
    {
      value: 15,
      suffix: '+',
      label: 'Certifications',
      description: 'Microsoft & Cloud',
      icon: 'fas fa-certificate',
      color: 'text-orange-500'
    }
  ];

  const CountUpAnimation = ({ end, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      let startTime;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [isInView, end, duration]);

    return (
      <span className="heading-1 text-primary-500">
        {count}{suffix}
      </span>
    );
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-dark-bg dark:via-dark-card/50 dark:to-dark-bg">
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
              Impact & Achievements
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-1 bg-primary-500 mx-auto rounded-full"
            ></motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card p-6 text-center card-hover group"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`${stat.color} text-4xl mb-4 inline-block`}
                >
                  <i className={stat.icon}></i>
                </motion.div>

                {/* Value with Animation */}
                <div className="mb-2">
                  {isInView && (
                    <CountUpAnimation end={stat.value} suffix={stat.suffix} />
                  )}
                </div>

                {/* Label */}
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <div className="flex items-center gap-4 p-4 bg-white dark:bg-dark-card rounded-lg shadow-sm">
              <div className="text-primary-500 text-3xl">
                <i className="fas fa-award"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Sparkling Star Award
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Accenture Recognition
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white dark:bg-dark-card rounded-lg shadow-sm">
              <div className="text-green-500 text-3xl">
                <i className="fas fa-trophy"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  ACE Award Winner
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  High-Impact Solutions
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white dark:bg-dark-card rounded-lg shadow-sm">
              <div className="text-purple-500 text-3xl">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Microsoft Certified Trainer
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Official MCT Status
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;

