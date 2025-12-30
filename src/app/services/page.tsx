'use client';

import { motion } from 'framer-motion';
import { Monitor, Code, Settings, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const detailedServices = [
  {
    icon: Monitor,
    title: 'Hardware Supply & Infrastructure',
    description: 'We provide state-of-the-art educational hardware, from interactive whiteboards to computer labs, ensuring your institution is equipped for the future.',
    features: ['Interactive Displays', 'Computer Labs Setup', 'Network Infrastructure', 'Device Procurement']
  },
  {
    icon: Code,
    title: 'Software Solutions',
    description: 'Custom-built software platforms that streamline school management, learning management systems (LMS), and parent-teacher communication portals.',
    features: ['Custom LMS Development', 'School Management Systems', 'Parent Portals', 'Mobile Apps for Education']
  },
  {
    icon: Settings,
    title: 'Management Consultancy',
    description: 'Strategic guidance for school administrators and boards. We help optimize operations, improve curriculum delivery, and enhance staff performance.',
    features: ['Operational Audits', 'Staff Training & Development', 'Curriculum Strategy', 'Financial Planning']
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[var(--bg-soft)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--primary-light)]/5 skew-x-12 transform origin-top-right" />
        
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
             <span className="text-[var(--primary)] font-bold tracking-widest text-sm uppercase mb-4 block">
                What We Do
             </span>
             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
               Comprehensive Solutions for <span className="text-[var(--primary)]">Modern Education</span>.
             </h1>
             <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
               From hardware infrastructure to strategic management, we provide the tools and expertise needed to build world-class educational institutions.
             </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="space-y-24">
            {detailedServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-1/2">
                   <div className={`relative h-[400px] w-full bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 group`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-bg)] to-white flex items-center justify-center">
                         <service.icon size={120} className="text-[var(--primary)] opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center text-[var(--primary)]">
                        <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
                           <service.icon size={40} />
                        </div>
                      </div>
                   </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                   <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h2>
                   <p className="text-gray-500 text-lg leading-relaxed mb-8">
                     {service.description}
                   </p>
                   
                   <ul className="space-y-4 mb-8">
                     {service.features.map((feature, i) => (
                       <li key={i} className="flex items-center gap-3">
                         <CheckCircle size={20} className="text-[var(--primary-light)]" />
                         <span className="text-gray-700 font-medium">{feature}</span>
                       </li>
                     ))}
                   </ul>

                   <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--primary)] font-bold uppercase tracking-wider hover:gap-4 transition-all">
                      Get a Quote <ArrowRight size={16} />
                   </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 bg-[var(--primary)] text-white text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to transform your institution?</h2>
             <Link 
              href="/contact" 
              className="inline-block px-12 py-4 bg-white text-[var(--primary)] font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl"
            >
              Contact Us Today
            </Link>
         </div>
      </section>
    </main>
  );
}
