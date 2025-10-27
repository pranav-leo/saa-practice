'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="inline-block bg-amber-500 text-slate-800 px-4 py-2 rounded-full text-sm font-semibold mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Trusted Legal Services Since 2008
              </motion.div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Who We Are
            </motion.h1>
            
            <div className="max-w-2xl mx-auto lg:mx-0">
              <motion.p 
                className="text-lg md:text-xl leading-relaxed mb-8 text-slate-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                At <span className="text-amber-400 font-semibold">SAA Counselors</span> (Advocates and Consultants), we have been delivering exceptional legal services for over 15 years, 
                providing a seamless, one-stop solution for all your legal needs.
              </motion.p>
              <motion.p 
                className="text-lg md:text-xl leading-relaxed mb-8 text-slate-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                From corporate and civil disputes to criminal and family matters, we take pride in offering comprehensive, 
                personalized legal support.
              </motion.p>
            </div>
          </div>

          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="SAA Counselors Legal Office"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm border border-amber-500/20 rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-sm text-slate-200">
                    <span className="text-amber-400 font-semibold">Office:</span> Sco. 117-18, 2nd Floor, Sector 17 B Chandigarh – 160017
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Content */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-500/20 rounded-lg p-6">
            <p className="text-lg md:text-xl leading-relaxed text-slate-200 text-center">
              With extensive experience in conducting cases, drafting pleadings and arguing matters, we render legal counsel 
              and regularly appear and plead on behalf of various Corporates, Government Agencies as well as private individuals 
              before the Hon'ble Punjab and Haryana High Court, Consumer Commissions, National Company Law Tribunal, DRT, RERA, 
              MSME, CAT, District Courts as well as other Small Cause Tribunals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;