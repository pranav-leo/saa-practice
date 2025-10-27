'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Image from 'next/image';

const NewsCoverageSection = () => {
  const newsItems = [
    {
      title: 'SAA Counselors Featured in Legal Times',
      excerpt: 'Our firm\'s expertise in corporate litigation was highlighted in the latest Legal Times publication, showcasing our successful track record in high-profile cases.',
      date: 'December 2024',
      source: 'Legal Times',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Corporate Law',
    },
    {
      title: 'Supreme Court Victory Coverage',
      excerpt: 'Our landmark victory in the Supreme Court case was covered extensively by leading legal publications, establishing our reputation in constitutional law.',
      date: 'November 2024',
      source: 'Law Today',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Constitutional Law',
    },
    {
      title: 'Corporate Law Excellence Recognition',
      excerpt: 'SAA Counselors was recognized for outstanding performance in corporate law by the Bar Association, featured in their annual excellence report.',
      date: 'October 2024',
      source: 'Bar Association Journal',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Recognition',
    },
    {
      title: 'Client Success Story Featured',
      excerpt: 'Our successful resolution of a complex commercial dispute was featured as a case study in Commercial Law Review, highlighting our innovative approach.',
      date: 'September 2024',
      source: 'Commercial Law Review',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      category: 'Case Study',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Media Recognition
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            News Coverage
          </h2>
          <motion.div 
            className="w-24 h-1 bg-amber-500 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="text-slate-600 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Our legal expertise and successful case outcomes have been recognized and featured in leading legal publications and media outlets.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {newsItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="p-0 hover:shadow-xl transition-all duration-300 bg-white group border-l-4 border-l-amber-500 hover:border-l-amber-600 overflow-hidden h-full flex flex-col">
                {/* Image */}
                <motion.div 
                  className="relative h-48 w-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-slate-800 px-2 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="text-xs text-white font-semibold bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                      {item.source}
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-slate-500">{item.date}</span>
                    <motion.div 
                      className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-amber-600 group-hover:text-white text-xs">📰</span>
                    </motion.div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm flex-grow">
                    {item.excerpt}
                  </p>
                  
                  <motion.div 
                    className="flex items-center justify-between mt-auto"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-xs text-slate-500 font-medium">Read More</span>
                    <motion.div 
                      className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-colors"
                      whileHover={{ scale: 1.2 }}
                    >
                      <span className="text-amber-600 group-hover:text-white text-xs">→</span>
                    </motion.div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Media Partners */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-slate-800 mb-8">Featured In</h3>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {['Legal Times', 'Law Today', 'Bar Journal', 'Legal Review'].map((partner, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-slate-200 h-16 rounded-lg flex items-center justify-center hover:bg-amber-100 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-slate-600 font-semibold">{partner}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsCoverageSection;