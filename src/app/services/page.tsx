'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { 
  ArrowRight, 
  Monitor, 
  Code, 
  Settings, 
  CheckCircle2, 
  Users, 
  Target, 
  Lightbulb,
  Award,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

const services = [
  {
    id: 'hardware-supply',
    icon: Monitor,
    title: 'Hardware Supply',
    tagline: 'Equipping Education with Premium Technology',
    description: 'We provide comprehensive procurement services for educational institutions, delivering cutting-edge hardware and equipment that transforms learning environments.',
    image: '/hardware-supply.png',
    features: [
      'Interactive whiteboards and smart displays',
      'Student laptops and tablets',
      'Classroom audio-visual systems',
      'Network infrastructure equipment',
      'Educational robotics and STEM kits',
      'Secure storage and charging solutions'
    ],
    benefits: [
      { icon: Shield, text: 'Warranty & Support Included' },
      { icon: Award, text: 'Premium Quality Brands' },
      { icon: TrendingUp, text: 'Scalable Solutions' }
    ],
    color: 'from-green-50 to-emerald-50'
  },
  {
    id: 'software-solutions',
    icon: Code,
    title: 'Software Solutions',
    tagline: 'Digital Platforms Built for Education',
    description: 'Custom-designed software platforms that streamline school operations, enhance parent engagement, and create seamless digital learning experiences.',
    image: '/software-solutions.png',
    features: [
      'School management systems (SMS)',
      'Parent-teacher communication portals',
      'Student performance tracking dashboards',
      'Online learning platforms (LMS)',
      'Attendance and scheduling automation',
      'Mobile apps for parents and students'
    ],
    benefits: [
      { icon: Zap, text: 'Cloud-Based & Secure' },
      { icon: Users, text: 'User-Friendly Interface' },
      { icon: Target, text: 'Tailored to Your Needs' }
    ],
    color: 'from-blue-50 to-cyan-50'
  },
  {
    id: 'management-consulting',
    icon: Settings,
    title: 'Management & Consulting',
    tagline: 'Strategic Guidance for Educational Excellence',
    description: 'Expert advisory services that help educational institutions optimize operations, implement best practices, and achieve sustainable growth.',
    image: '/management-consulting.png',
    features: [
      'Strategic planning and goal setting',
      'Staff recruitment and training programs',
      'Curriculum development support',
      'Operational efficiency audits',
      'Technology integration consulting',
      'Compliance and accreditation guidance'
    ],
    benefits: [
      { icon: Lightbulb, text: 'Expert Insights' },
      { icon: TrendingUp, text: 'Proven Results' },
      { icon: Users, text: 'Personalized Support' }
    ],
    color: 'from-purple-50 to-pink-50'
  }
];

const stats = [
  { value: '50+', label: 'Schools Served' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' }
];

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden bg-white">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-[var(--primary)]/5 via-white to-[var(--primary-light)]/5">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] font-bold text-sm uppercase tracking-wider rounded-full mb-6">
              Our Expertise
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive Solutions for <br />
              <span className="text-[var(--primary)]">Educational Excellence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              From cutting-edge hardware to custom software and strategic consulting, 
              we provide end-to-end solutions that empower schools, parents, and students to thrive.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Partner with Gambo Consultancy?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We don't just deliver services—we build lasting partnerships focused on your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Tailored Solutions',
                description: 'Every institution is unique. We customize our approach to meet your specific needs and goals.'
              },
              {
                icon: Award,
                title: 'Proven Track Record',
                description: 'Over 15 years of excellence serving schools across the region with measurable results.'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Our consultants bring deep expertise in education, technology, and management.'
              },
              {
                icon: Zap,
                title: 'Fast Implementation',
                description: 'We work efficiently to get your solutions up and running with minimal disruption.'
              },
              {
                icon: Shield,
                title: 'Ongoing Support',
                description: '24/7 technical support and continuous training to ensure long-term success.'
              },
              {
                icon: TrendingUp,
                title: 'Future-Ready',
                description: 'We stay ahead of trends to ensure your institution remains competitive and innovative.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--primary)] transition-colors">
                  <item.icon className="text-[var(--primary)] group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you achieve your educational goals. 
              Schedule a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-[var(--primary)] text-lg font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 gap-2"
              >
                Get in Touch <ArrowRight size={20} />
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-white text-white text-lg font-bold rounded-full hover:bg-white/10 transition-all"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

// Service Section Component
function ServiceSection({ service, index }: { service: typeof services[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <section 
      ref={ref}
      className={`py-24 ${isEven ? 'bg-white' : 'bg-gradient-to-br ' + service.color}`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl border border-gray-100 group">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover p-8 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-[var(--primary)] text-white px-6 py-4 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <service.icon size={32} />
                <div>
                  <div className="text-sm font-medium opacity-90">Service</div>
                  <div className="text-lg font-bold">#{index + 1}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}
          >
            <span className="inline-block px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] font-bold text-xs uppercase tracking-wider rounded-full mb-4">
              {service.tagline}
            </span>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {service.title}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {service.description}
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap gap-4 mb-8">
              {service.benefits.map((benefit, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm"
                >
                  <benefit.icon size={18} className="text-[var(--primary)]" />
                  <span className="text-sm font-semibold text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">What's Included:</h4>
              {service.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-[var(--primary)] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-full hover:bg-[var(--primary-dark)] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
            >
              Request a Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
