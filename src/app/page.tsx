'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Monitor, Code, Settings, Users, GraduationCap, Building2 } from 'lucide-react';

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
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start z-10"
          >
            <span className="text-[var(--primary)] font-bold tracking-widest text-sm uppercase mb-6">
              Corporate Education & Consulting
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Empowering <br />
              <span className="text-[var(--primary)]">Education</span> with Strategy.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10 max-w-lg font-light">
              Gambo Consultancy provides expert solutions, training, and support for schools, parents, and students to achieve sustainable excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="/contact" 
                className="min-w-[200px] px-8 py-5 bg-[var(--primary)] text-white font-semibold rounded-lg hover:bg-[var(--primary-dark)] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
              >
                Get in Touch <ArrowRight size={20} />
              </Link>
              <Link 
                href="/services" 
                className="min-w-[200px] px-8 py-5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center justify-center w-full sm:w-auto"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px] w-full bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100"
          >
             <div className="absolute inset-0 bg-[var(--primary)]/5 flex items-center justify-center">
                <div className="relative w-full h-full p-12">
                   <div className="w-full h-full bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-200 overflow-hidden relative">
                      <Image 
                        src="/hero-consulting.png" 
                        alt="Consulting Strategy"
                        fill
                        className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                      />
                   </div>
                </div>
             </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Services Preview Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white" id="expertise">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-[var(--primary-light)]/10 rounded-full blur-3xl opacity-50" />
           <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-[var(--primary)]/5 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-[var(--primary-light)] font-bold tracking-widest text-sm uppercase mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Excellence in <span className="text-[var(--primary)]">Education</span> & Technology.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We bridge the gap between traditional education and modern technology, providing tailored solutions that drive growth and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Hover Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                
                {/* Icon with soft background */}
                <div className="mb-8 relative inline-block">
                   <div className="absolute inset-0 bg-[var(--primary-light)]/20 rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                   <div className="relative bg-[var(--primary-bg)] w-16 h-16 flex items-center justify-center rounded-xl text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300 shadow-sm">
                     <service.icon size={32} strokeWidth={1.5} />
                   </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[var(--primary)] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed mb-8">
                  {service.desc}
                </p>
                
                <div className="mt-auto">
                   <Link href="/services" className="inline-flex items-center gap-2 text-[var(--primary)] font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                     Learn More <ArrowRight size={16} />
                   </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Block */}
          <div>
             <span className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-4 block">Why Choose Gambo?</span>
             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
               Built on Trust, <br />Driven by Excellence.
             </h2>
             <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
               We don't just advise; we partner with you to implement sustainable systems that improve educational outcomes and operational efficiency.
             </p>
             <Link href="/about" className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors">
               More About Us
             </Link>
          </div>

          {/* Right Checklist */}
          <div className="bg-[var(--bg-soft)] p-10 md:p-14 rounded-[2rem]">
            <ul className="space-y-8">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-5">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle size={28} className="fill-[var(--primary)] text-white" />
                  </div>
                  <span className="text-lg md:text-xl font-medium text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[var(--primary)] text-white text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to elevate your institution?</h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Book a session with our consultants today.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center min-w-[200px] px-12 py-5 bg-white text-[var(--primary)] text-lg font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>



    </main>
  );
}
