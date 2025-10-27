'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const StatisticsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [counts, setCounts] = useState({
    cases: 0,
    clients: 0,
    experience: 0,
    solved: 0,
  });

  const stats = [
    {
      number: counts.cases,
      label: 'Successful cases',
      icon: '🏆',
      color: 'text-amber-400',
      max: 500,
    },
    {
      number: counts.clients,
      label: 'Trusted clients',
      icon: '👥',
      color: 'text-amber-400',
      max: 200,
    },
    {
      number: counts.experience,
      label: 'Year of Experience',
      icon: '📅',
      color: 'text-amber-400',
      max: 15,
    },
    {
      number: counts.solved,
      label: 'Solved cases',
      icon: '✅',
      color: 'text-amber-400',
      max: 400,
    },
  ];

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      const animateCount = (key: keyof typeof counts, max: number) => {
        let current = 0;
        const increment = max / steps;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= max) {
            current = max;
            clearInterval(timer);
          }
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, stepDuration);
      };

      animateCount('cases', 500);
      animateCount('clients', 200);
      animateCount('experience', 15);
      animateCount('solved', 400);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-block bg-amber-500 text-slate-800 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Achievements
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            INTERESTING FACTS
          </h2>
          <motion.div 
            className="w-24 h-1 bg-amber-500 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center group">
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 border border-amber-500/20"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-4xl md:text-5xl font-bold mb-2 text-amber-400"
                  key={stat.number}
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.number}+
                </motion.div>
                <div className="text-lg text-slate-200 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticsSection;
