'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Saksham Arora',
      specialization: 'Expert Tribunals Litigation',
      image: 'https://ui-avatars.com/api/?name=Saksham+Arora&background=f59e0b&color=ffffff&size=300&format=png',
      experience: '12+ Years',
      education: 'LLB, Delhi University',
    },
    {
      name: 'Pragun Jasuja',
      specialization: 'Lawyer – District Courts',
      image: 'https://ui-avatars.com/api/?name=Pragun+Jasuja&background=f59e0b&color=ffffff&size=300&format=png',
      experience: '8+ Years',
      education: 'LLB, Punjab University',
    },
    {
      name: 'Dheeraj Chawla',
      specialization: 'Expert Criminal Litigation',
      image: 'https://ui-avatars.com/api/?name=Dheeraj+Chawla&background=f59e0b&color=ffffff&size=300&format=png',
      experience: '10+ Years',
      education: 'LLB, Chandigarh University',
    },
    {
      name: 'Sateekshan Sood',
      specialization: 'Expert Commercial Cases',
      image: 'https://ui-avatars.com/api/?name=Sateekshan+Sood&background=f59e0b&color=ffffff&size=300&format=png',
      experience: '9+ Years',
      education: 'LLB, Panjab University',
    },
    {
      name: 'Abhinav Punj',
      specialization: 'Expert Taxation Litigation',
      image: 'https://ui-avatars.com/api/?name=Abhinav+Punj&background=f59e0b&color=ffffff&size=300&format=png',
      experience: '7+ Years',
      education: 'LLB, Kurukshetra University',
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
    <section className="py-20 bg-white">
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
            Legal Professionals
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            MEET OUR ATTORNEYS
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white group border-t-4 border-t-amber-500 h-full flex flex-col">
                <motion.div 
                  className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
                
                <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                  {member.name}
                </h3>
                
                <p className="text-slate-600 mb-2 text-sm leading-relaxed font-medium">
                  {member.specialization}
                </p>
                
                <div className="text-xs text-slate-500 mb-4 space-y-1 flex-grow">
                  <p>{member.experience}</p>
                  <p>{member.education}</p>
                </div>
                
                <div className="space-y-2 mt-auto">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500">
                      V-Card
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="gold" size="sm" className="w-full">
                      Email
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
