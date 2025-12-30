'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Laptop, Users, Target, Heart } from 'lucide-react';

const services = [
  { icon: GraduationCap, title: 'Education', desc: 'Curriculum development and academic strategy.' },
  { icon: Laptop, title: 'Technology', desc: 'Digital transformation and IT integration.' },
  { icon: Users, title: 'Leadership', desc: 'Executive coaching and team development.' },
  { icon: Target, title: 'Mentorship', desc: 'Career guidance and professional growth.' },
  { icon: Heart, title: 'Coaching', desc: 'Personal development and life coaching.' },
];

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <span className="inline-block px-4 py-1.5 bg-gray-50 text-xs font-bold uppercase tracking-widest text-gray-500 rounded-full mb-8">
              Expert Consultancy
            </span>
            <h1 className="mb-8">
              Building the future of <span className="text-gray-400">excellence.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-xl">
              We provide tailored consultancy services for individuals, educational institutions, and organizations seeking transformative growth and digital innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Consultation <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="btn-secondary">
                Our Services
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/draft/photo_4_2025-12-30_20-13-12.jpg" 
                alt="Expert Consultancy" 
                fill 
                className="object-cover" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Minimalist Floating Card */}
            <div className="absolute -bottom-8 -left-12 p-8 bg-white border border-gray-100 rounded-2xl shadow-xl hidden md:block">
              <div className="text-4xl font-extrabold mb-1">15+</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years of Impact</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Very Clean */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-20 text-center mx-auto">
            <h2 className="mb-6">Tailored Solutions.</h2>
            <p className="text-lg text-gray-500">
              Our multidisciplinary approach ensures we cover every aspect of your professional and organizational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white border border-gray-100 rounded-2xl hover:border-black transition-colors group text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-gray-50 text-gray-400 flex items-center justify-center rounded-xl mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple About Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1 relative aspect-[4/3] rounded-3xl overflow-hidden">
            <Image 
              src="/draft/photo_7_2025-12-30_20-13-12.jpg" 
              alt="About Us" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="mb-8">Driven by Expertise.</h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              At Gambo Consultancy, we believe in the power of tailored advice. Whether you are navigating the complexities of digital transformation or seeking personal growth through life coaching, our team brings a wealth of academic and industry knowledge to every project.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed mb-10">
              We work closely with schools, parents, professionals, and corporate leaders to deliver measurable outcomes that matter.
            </p>
            <Link href="/about" className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
              Learn More About Our Story <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Minimalist CTA */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="mb-10 text-4xl">Ready to transform?</h2>
          <Link href="/contact" className="px-10 py-5 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all inline-block">
            Get in touch today
          </Link>
        </div>
      </section>
    </main>
  );
}
