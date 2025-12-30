'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Monitor, Code, Settings, Users, GraduationCap, Building2, Award } from 'lucide-react';

const services = [
  { 
    icon: Monitor, 
    title: 'Hardware Supply', 
    desc: 'Procurement of premium educational tools, devices, and modern equipment.' 
  },
  { 
    icon: Code, 
    title: 'Software Solutions', 
    desc: 'Custom digital platforms designed specifically for schools and parents.' 
  },
  { 
    icon: Settings, 
    title: 'Management', 
    desc: 'Strategic advisory and consultancy across Education and IT sectors.' 
  },
];

const checklist = [
  'Tailored strategies for educational growth',
  'Expert recruitment and staff training',
  'Innovative technological integration',
  'Proven track record of excellence'
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      
      {/* 2. Hero Section 
          - Two-column layout on desktop, stacked on mobile.
          - Vertical padding: min 120px desktop (pt-32), 64px mobile (pt-24 to clear nav).
      */}
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 bg-gradient-to-br from-white via-gray-50/30 to-[var(--primary)]/5 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary-light)]/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[var(--primary-light)]/8 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"
        />
        
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] font-bold tracking-widest text-sm uppercase mb-6 rounded-full border border-[var(--primary)]/20"
            >
              <span className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse"></span>
              Corporate Education & Consulting
            </motion.span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Empowering <br />
              <span className="relative inline-block">
                <span className="text-[var(--primary)] relative z-10">Education</span>
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-2 left-0 h-3 bg-[var(--primary-light)]/30 -z-10"
                />
              </span> with Strategy.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-lg">
              Gambo Consultancy provides <strong className="text-gray-900 font-semibold">expert solutions, training, and support</strong> for schools, parents, and students to achieve sustainable excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="min-w-[200px] px-8 py-5 bg-[var(--primary)] text-white font-bold rounded-xl hover:bg-[var(--primary-dark)] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto group"
                >
                  Get in Touch <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/services" 
                  className="min-w-[200px] px-8 py-5 bg-white border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all flex items-center justify-center w-full sm:w-auto"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px] w-full"
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50 bg-gradient-to-br from-white to-gray-50 group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent" />
              <div className="relative w-full h-full p-8 md:p-12">
                <div className="w-full h-full bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden relative">
                  <Image 
                    src="/hero-consulting.png" 
                    alt="Consulting Strategy"
                    fill
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-6 right-6 bg-white px-6 py-4 rounded-2xl shadow-xl border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="text-[var(--primary)]" size={24} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">15+</div>
                        <div className="text-sm text-gray-600">Years Experience</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Services Preview Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-[var(--primary)]/5 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--primary-light)]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 max-w-2xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] font-bold text-sm uppercase tracking-wider rounded-full mb-6">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Expertise</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Comprehensive solutions designed to empower schools, parents, and students 
              in achieving educational excellence through innovation and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 group flex flex-col h-full relative overflow-hidden"
              >
                {/* Gradient Accent on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                {/* Icon with Enhanced Animation */}
                <div className="mb-6 text-[var(--primary)] group-hover:scale-110 group-hover:rotate-3 transition-all origin-left duration-500">
                  <service.icon size={48} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[var(--primary)] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-100">
                   <Link 
                     href="/services" 
                     className="inline-flex items-center gap-2 text-[var(--primary)] font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all duration-300 group/link"
                   >
                     <span className="relative">
                       Learn More
                       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--primary)] group-hover/link:w-full transition-all duration-300"></span>
                     </span>
                     <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                   </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Services CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link 
              href="/services"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--primary)] text-white text-lg font-bold rounded-full hover:bg-[var(--primary-dark)] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
            >
              View All Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[var(--primary)]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--primary-light)]/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          
          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {[
              { value: '50+', label: 'Schools Served', icon: Building2 },
              { value: '15+', label: 'Years Experience', icon: Award },
              { value: '98%', label: 'Client Satisfaction', icon: Users },
              { value: '24/7', label: 'Support Available', icon: CheckCircle }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--primary)] transition-colors">
                  <stat.icon className="text-[var(--primary)] group-hover:text-white transition-colors" size={24} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Text Block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
               <span className="inline-block px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-6 rounded-full">Why Choose Gambo?</span>
               <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                 Built on <span className="text-[var(--primary)]">Trust</span>, <br />Driven by Excellence.
               </h2>
               <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
                 We don't just advise; we <strong className="text-gray-900 font-semibold">partner with you</strong> to implement sustainable systems that improve educational outcomes and operational efficiency.
               </p>
               <motion.div
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl group">
                   More About Us
                   <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </Link>
               </motion.div>
            </motion.div>

            {/* Right Checklist */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 p-10 md:p-14 rounded-3xl border border-gray-100 shadow-xl"
            >
              <ul className="space-y-6">
                {checklist.map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-1 flex-shrink-0 w-8 h-8 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors">
                      <CheckCircle size={20} className="text-[var(--primary)] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-lg font-semibold text-gray-800 group-hover:text-[var(--primary)] transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-[var(--primary)] text-white text-center overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--primary-light)] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
        />
        
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-sm text-white font-bold text-sm uppercase tracking-wider rounded-full border border-white/30">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Let's Get Started
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to elevate your institution?
            </h2>
            <p className="text-white/90 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Book a <strong className="text-white font-bold">free consultation</strong> with our experts today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-3 min-w-[240px] px-12 py-6 bg-white text-[var(--primary)] text-lg font-bold rounded-full hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl group"
                >
                  Get in Touch
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/services" 
                  className="inline-flex items-center justify-center gap-2 min-w-[240px] px-12 py-6 bg-transparent border-2 border-white text-white text-lg font-bold rounded-full hover:bg-white/10 transition-all"
                >
                  View Our Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>



    </main>
  );
}
