'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const PracticeAreasSection = () => {
  const practiceAreas = [
    {
      title: 'Civil Litigation',
      description: 'Our Team is proficient in managing civil matters and disputes inter alia breach of contracts, specific performance, injunctions, damages, injury to person and property, enforcement of wills and trust, professional negligence, defamation, etc.',
    },
    {
      title: 'Criminal Litigation',
      description: 'Our dedicated team provides robust defence and guidance in Criminal Law, prioritizing your rights and seeking justice.',
    },
    {
      title: 'Matrimonial Litigation',
      description: 'We offer compassionate and comprehensive legal services in Family Law, focusing on resolution and support for personal matters.',
    },
    {
      title: 'Contracts (Now Corporate)',
      description: 'Consulting on company formation, mergers and acquisitions, contract negotiation and drafting, corporate restructuring and others.',
    },
    {
      title: 'Arbitration and Conciliation',
      description: 'Guidance on disputes, crafting agreements, representing in proceedings and managing arbitration awards enforcement.',
    },
    {
      title: 'Real Estate',
      description: 'The Firm provides legal advice and assistance to real estate business entities and stakeholders regarding property takeover/acquisitions, tenancy and leases, resolution of disputes, etc.',
    },
    {
      title: 'Intellectual Property Rights',
      description: 'Guidance on patent and trademark registration, copyright protection, IP litigation, licensing agreements and trade secret management.',
    },
    {
      title: 'Banking and Finance',
      description: 'Banking and finance is our core and highly recognised areas of expertise.',
    },
    {
      title: 'Mediation',
      description: 'Pre-litigation and dispute advisory, Mediation in matrimonial disputes',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-20 bg-slate-50">
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
            Legal Expertise
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Practice Areas
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
              {practiceAreas.map((area, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-amber-500 bg-white group h-full flex flex-col">
                    <motion.div 
                      className="flex items-start justify-between mb-4"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h3 className="text-xl font-semibold text-slate-800 group-hover:text-amber-600 transition-colors">
                        {area.title}
                      </h3>
                      <motion.div 
                        className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className="text-amber-600 text-sm">⚖️</span>
                      </motion.div>
                    </motion.div>
                    <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                      {area.description}
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="outline" size="sm" className="group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 w-full">
                        Read More
                      </Button>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
