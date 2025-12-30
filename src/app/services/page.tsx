'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { GraduationCap, Laptop, Users, Heart, Target, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    title: 'Educational Consultancy',
    description: 'Academic development, teaching consultancy, research guidance, and institutional capacity building for educational excellence.',
    color: 'from-[#007BFF] to-[#4da3ff]',
    href: '/services/educational',
    features: ['Academic Development', 'Teaching Consultancy', 'Research Consultancy', 'Institutional Capacity Building'],
  },
  {
    icon: Laptop,
    title: 'IT Consultancy',
    description: 'Strategic IT solutions including digital transformation, cybersecurity, and technology integration for modern organizations.',
    color: 'from-[#28A745] to-[#48c664]',
    href: '/services/it',
    features: ['IT Strategy Development', 'Digital Transformation', 'Cybersecurity Solutions', 'Technology Integration'],
  },
  {
    icon: Users,
    title: 'Leadership Consultancy',
    description: 'Executive coaching and strategic planning to develop exceptional leaders and high-performing organizations.',
    color: 'from-[#17A2B8] to-[#3fc3d8]',
    href: '/services/leadership',
    features: ['Executive Coaching', 'Management Consultancy', 'Strategic Planning', 'Organizational Development'],
  },
  {
    icon: Target,
    title: 'Mentorship Consultancy',
    description: 'Personalized mentoring programs for career advancement, leadership development, and entrepreneurial success.',
    color: 'from-[#6f42c1] to-[#9b6dd3]',
    href: '/services/mentorship',
    features: ['Career Coaching', 'Leadership Mentoring', 'Entrepreneurial Mentoring', 'Professional Development'],
  },
  {
    icon: Heart,
    title: 'Life Coaching',
    description: 'Holistic coaching for personal growth, work-life balance, and achieving your full potential in all aspects of life.',
    color: 'from-[#fd7e14] to-[#ffa94d]',
    href: '/services/life-coaching',
    features: ['Personal Growth', 'Career Transition', 'Work-Life Balance', 'Time Management'],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#007BFF]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#28A745]/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
              Our Expertise
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Consultancy Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions tailored to transform your potential into excellence. 
              Discover how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Service Icon & Title */}
                  <div className={`bg-gradient-to-br ${service.color} p-8 md:p-12 flex flex-col justify-center`}>
                    <service.icon className="w-16 h-16 text-white mb-6" />
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-white/90 text-lg">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="p-8 md:p-12 md:col-span-2">
                    <h3 className="text-lg font-semibold text-[#212529] mb-6">What We Offer:</h3>
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, i) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 p-4 bg-[#F8F9FA] rounded-xl"
                        >
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                            <span className="text-white font-bold text-sm">{i + 1}</span>
                          </div>
                          <span className="font-medium text-[#212529]">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={service.href}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`px-6 py-3 bg-gradient-to-r ${service.color} rounded-full font-semibold text-white shadow-lg flex items-center gap-2`}
                      >
                        Learn More
                        <ArrowRight size={18} />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to discuss how we can help you achieve your goals.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#007BFF] rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
              >
                Schedule a Consultation
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
