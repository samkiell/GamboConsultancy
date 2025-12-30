'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Monitor, Code, Settings, Users, GraduationCap, Building2 } from 'lucide-react';

const services = [
  { 
    icon: Monitor, 
    title: 'Product and Hardware Supply', 
    desc: 'Procurement of educational tools, devices, and equipments.' 
  },
  { 
    icon: Code, 
    title: 'Software Development', 
    desc: 'Custom digital solution for children, parents, and schools.' 
  },
  { 
    icon: Settings, 
    title: 'Management Consultancy', 
    desc: 'Strategic advisory across sectors: Education, IT, Agriculture, etc.' 
  },
  { 
    icon: GraduationCap, 
    title: 'Training & Capacity Building', 
    desc: 'Workshops for teachers, principals, school owners, and students.' 
  },
  { 
    icon: Users, 
    title: 'Staff Recruitment', 
    desc: 'Hiring of qualified and efficient school personnel.' 
  },
];

const whyChooseUs = [
  {
    title: 'Tailored Solutions',
    desc: 'We solve real problems for schools, parents, and students.'
  },
  {
    title: 'Trusted Expertise',
    desc: 'Backed by experience in training, recruitment, and mentorship.'
  },
  {
    title: 'Smart Innovation',
    desc: 'We build apps and tools that make education better.'
  }
];

export default function Home() {
  return (
    <main className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 bg-[var(--bg-soft)]">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary-light)]/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--primary)]/5 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 relative">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  Consulting & Innovation
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-black leading-[1.1] mb-8 tracking-tight">
                Empowering <span className="text-[var(--primary)]">Education</span> through Innovation.
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-2xl font-light">
                Gambo Consultancy Services provides expert solutions, training, and support for schools, parents, and students to achieve excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/contact" className="px-10 py-5 bg-[var(--primary)] text-white text-lg font-bold rounded-full hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 transform flex items-center justify-center gap-3">
                  Get Started <ArrowRight size={22} />
                </Link>
                <Link href="/services" className="px-10 py-5 bg-white border-2 border-gray-100 text-gray-800 text-lg font-bold rounded-full hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all flex items-center justify-center">
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Green Cards */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">
          <div className="mb-20">
            <span className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Services</h2>
            <p className="text-gray-500 max-w-2xl text-lg">
              We offer comprehensive solutions tailored to your unique educational and organizational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-10 bg-[var(--primary)] rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-white/20 transition-all" />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm text-white flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/80 leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>
                  
                  <div className="flex items-center text-white font-bold text-sm tracking-wide gap-2 group-hover:gap-4 transition-all">
                    LEARN MORE <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & About Combo */}
      <section className="py-24 md:py-32 bg-[var(--bg-soft)]">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-4 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-10">Commitment to Excellence.</h2>
              <div className="space-y-8">
                {whyChooseUs.map((item, i) => (
                  <div key={item.title} className="flex gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[var(--primary)] transition-colors">
                    <div className="shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-[var(--primary-bg)] flex items-center justify-center text-[var(--primary)]">
                        <CheckCircle size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative p-12 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl -mr-20 -mt-20" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[var(--primary-light)]/10 rounded-full blur-2xl -ml-10 -mb-10" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[var(--primary)] text-white flex items-center justify-center rounded-2xl mb-8 rotate-3">
                    <Building2 size={32} />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">About Our Company</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-10">
                    At Gambo Consultancy, we bridge the gap between education and innovation. We offer tailored solutions to educational challenges through training, recruitment, academic support, and custom software development.
                  </p>
                  <Link href="/about" className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-[var(--primary)] transition-all group">
                    Our Story <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[var(--primary)]/10 rounded-full" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[var(--primary)]/20 rounded-full" />
        
        <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-20 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight text-gray-900">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)]">transform</span> your future?
          </h2>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
            Connect with our consultants today for a strategic advisory session tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-12 py-5 bg-[var(--primary)] text-white text-lg font-bold rounded-full hover:bg-black transition-all shadow-xl hover:-translate-y-1">
              Schedule a Session
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
