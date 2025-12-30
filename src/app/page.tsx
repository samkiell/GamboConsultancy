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
    title: 'Software and App Development', 
    desc: 'Custom digital solution for children, parents, and schools.' 
  },
  { 
    icon: Settings, 
    title: 'Management Consultancy', 
    desc: 'Strategic advisory across sectors: Education, IT, Agriculture, E-commerce, etc.' 
  },
  { 
    icon: GraduationCap, 
    title: 'Training & Capacity Building', 
    desc: 'Workshops for teachers, principals, school owners, parents, and students.' 
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
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-[var(--primary-bg)]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--primary)] opacity-[0.03] skew-x-12 transform origin-top-right transition-all" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-[var(--primary)] text-white text-[10px] uppercase font-bold tracking-widest rounded-sm mb-8">
                Consulting & Innovation for Better Education
              </span>
              <h1 className="mb-8 text-black">
                Gambo <span className="text-[var(--primary)]">Consultancy</span> Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
                We provide expert solutions, training, and support for schools, parents, and students to achieve excellence and drive innovation.
              </p>
              <div className="flex flex-wrap gap-5">
                <Link href="/contact" className="px-8 py-4 bg-[var(--primary)] text-white font-bold rounded hover:bg-black transition-all shadow-lg flex items-center gap-3">
                  Our Services <ArrowRight size={20} />
                </Link>
                <Link href="/about" className="px-8 py-4 bg-white border border-gray-200 text-black font-bold rounded hover:bg-gray-50 transition-all flex items-center gap-3">
                  About Our Company
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-[var(--primary)] font-bold uppercase tracking-widest text-xs mb-4 block">Our Expertise</span>
              <h2 className="text-3xl md:text-5xl">Professional Solutions.</h2>
            </div>
            <p className="text-gray-500 max-w-sm text-lg">
              Comprehensive consultancy tailored to your educational and technological needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 bg-white border border-gray-100 rounded-lg hover:border-[var(--primary)] hover:shadow-2xl hover:shadow-[var(--primary)]/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[var(--primary-bg)] text-[var(--primary)] flex items-center justify-center rounded mb-8 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-[var(--primary)] transition-colors">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & About Combo */}
      <section className="py-24 border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[var(--primary)] font-bold uppercase tracking-widest text-xs mb-4 block">Why Us</span>
            <h2 className="mb-12">Commitment to Excellence.</h2>
            <div className="space-y-10">
              {whyChooseUs.map((item, i) => (
                <div key={item.title} className="flex gap-6">
                  <div className="shrink-0 mt-1">
                    <CheckCircle className="text-[var(--primary)]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-12 bg-gray-50 rounded-2xl border border-gray-100 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--primary-light)] opacity-10 rounded-full blur-3xl -mr-12 -mt-12" />
            <Building2 className="text-[var(--primary)] mb-8" size={48} />
            <h3 className="text-2xl font-bold mb-6">About Our Company</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              At Gambo Consultancy Services, we offer tailored solutions to educational challenges through training, recruitment, academic support, and custom software development for schools, parents, and students.
            </p>
            <Link href="/about" className="inline-flex items-center gap-3 text-[var(--primary)] font-bold hover:gap-5 transition-all">
              Learn more about us <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[var(--primary)] text-white">
        <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-20 text-center">
          <h2 className="text-white mb-6 text-4xl font-extrabold tracking-tight">Ready to elevate your school or career?</h2>
          <p className="text-white/80 text-xl mb-12">Connect with our consultants today for a strategic advisory session.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-10 py-5 bg-white text-[var(--primary)] font-bold rounded hover:bg-gray-100 transition-all shadow-xl">
              Schedule a Session
            </Link>
            <a href="tel:+2347034966376" className="px-10 py-5 bg-[var(--primary)] border border-white/30 text-white font-bold rounded hover:bg-white/10 transition-all">
              Call Support
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
