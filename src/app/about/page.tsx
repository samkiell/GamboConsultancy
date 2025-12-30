'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Target, Eye, Award, Users, Heart, Lightbulb, CheckCircle } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients to achieve shared goals.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We maintain honesty and ethical practices in all our dealings.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace new ideas and approaches to deliver better results.',
  },
];

const milestones = [
  { year: '2009', title: 'Foundation', description: 'Gambo Consultancy was established with a vision to empower excellence.' },
  { year: '2012', title: 'Expansion', description: 'Extended services to include IT consultancy and digital transformation.' },
  { year: '2016', title: 'Leadership', description: 'Launched comprehensive leadership and executive coaching programs.' },
  { year: '2020', title: 'Innovation', description: 'Introduced virtual consulting and online mentorship platforms.' },
  { year: '2024', title: 'Growth', description: 'Serving over 500 clients across multiple industries and sectors.' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#007BFF]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#28A745]/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Empowering Excellence Since{' '}
                <span className="text-[#007BFF]">2009</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                For over 15 years, Gambo Consultancy has been at the forefront of transforming 
                individuals and organizations, helping them achieve their full potential through 
                expert guidance and innovative solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-4 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/draft/photo_5_2025-12-30_20-13-12.jpg"
                    alt="About Gambo Consultancy"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#28A745] to-[#17A2B8] rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-xs">Years</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#007BFF]"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#007BFF] to-[#17A2B8] flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#212529] mb-4">Our Mission</h2>
              <p className="text-[#6c757d] text-lg leading-relaxed">
                Empowering individuals, organizations, and educational institutions to achieve 
                their full potential through expert consultancy, innovative solutions, and 
                unwavering commitment to excellence.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#28A745]"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#28A745] to-[#17A2B8] flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#212529] mb-4">Our Vision</h2>
              <p className="text-[#6c757d] text-lg leading-relaxed">
                To be a leading consultancy firm recognized globally for our expertise, innovation, 
                and transformative impact on individuals and organizations seeking to excel in 
                their respective fields.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-[#007BFF]/10 text-[#007BFF] rounded-full text-sm font-semibold mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mb-6">
                A Journey of Impact
              </h2>
              <p className="text-[#6c757d] mb-6 leading-relaxed">
                Gambo Consultancy was founded with a simple yet powerful vision: to help 
                individuals and organizations unlock their true potential. What started as 
                a small educational consultancy has grown into a comprehensive professional 
                services firm.
              </p>
              <p className="text-[#6c757d] mb-6 leading-relaxed">
                Today, we serve clients across education, technology, government, and private 
                sectors, providing expert guidance in education, IT, leadership, mentorship, 
                and life coaching. Our holistic approach ensures that our clients receive 
                well-rounded support for their personal and professional development.
              </p>
              <div className="space-y-3">
                {['500+ Clients Served', 'Multiple Industries', 'National & International Reach', 'Proven Track Record'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#28A745]" />
                    <span className="text-[#212529] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/draft/photo_8_2025-12-30_20-13-12.jpg"
                alt="Our Story"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our core values guide everything we do and define how we serve our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-white/15 transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#007BFF] to-[#17A2B8] flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#007BFF]/10 text-[#007BFF] rounded-full text-sm font-semibold mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mb-4">
              Milestones & Achievements
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#007BFF] to-[#28A745]" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-2xl font-bold text-[#007BFF] mb-2">{milestone.year}</div>
                    <h3 className="text-lg font-semibold text-[#212529] mb-2">{milestone.title}</h3>
                    <p className="text-[#6c757d]">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-[#007BFF] rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#007BFF] to-[#17A2B8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of clients who have achieved excellence with our guidance.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#007BFF] rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
              >
                Get in Touch
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
