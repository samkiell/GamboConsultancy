'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Check } from 'lucide-react';

const departments = [
  {
    title: 'Educational Consultancy',
    description: 'Empowering institutions with strategic frameworks for academic excellence.',
    services: [
      'Institutional Strategic Planning & Visioning',
      'Curriculum Development & Review',
      'Accreditation Readiness & Support',
      'Faculty Development & Training Workshops',
      'Student Retention Strategies'
    ]
  },
  {
    title: 'IT Consultancy',
    description: 'Leveraging technology to drive operational efficiency and innovation.',
    services: [
      'Digital Transformation Strategy',
      'IT Infrastructure Assessment',
      'Cybersecurity Awareness & Best Practices',
      'Software Selection & Implementation Support',
      'Data Management & Analytics Consulting'
    ]
  },
  {
    title: 'Leadership Consultancy',
    description: 'Cultivating visionary leaders and high-performance organizational cultures.',
    services: [
      'Executive Leadership Coaching',
      'Organizational Culture Assessment',
      'Change Management Facilitation',
      'High-Performance Team Building',
      'Conflict Resolution & Negotiation Strategies'
    ]
  },
  {
    title: 'Mentorship Consultancy',
    description: 'Guiding professionals and youth towards their full potential.',
    services: [
      'Structured Professional Mentorship Programs',
      'Career Pathing & Development Planning',
      'Soft Skills Acquisition (Communication, EQ)',
      'Youth Leadership & Empowerment Initiatives',
      'Networking & Professional Branding'
    ]
  },
  {
    title: 'Life Coaching Consultancy',
    description: 'Holistic strategies for personal well-being and life satisfaction.',
    services: [
      'Personal Goal Setting & Accountability',
      'Work-Life Balance Strategies',
      'Stress Management & Resilience Building',
      'Transition & Pivot Coaching',
      'Mindset & Motivation Workshops'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-brand-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Specialized expertise tailored to meet the unique challenges of your organization.
          </motion.p>
        </div>
      </section>

      {/* Departments */}
      {departments.map((dept, index) => (
        <Section 
          key={dept.title} 
          background={index % 2 === 0 ? 'white' : 'accent'}
          className="border-b border-gray-100 last:border-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Dept Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-3xl font-bold text-brand-primary mb-4">{dept.title}</h2>
              <p className="text-text-muted text-lg leading-relaxed">
                {dept.description}
              </p>
              <div className="h-1 w-20 bg-brand-primary mt-6"></div>
            </motion.div>

            {/* Service List */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dept.services.map((service) => (
                  <div key={service} className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-brand-primary/30 transition-colors">
                    <div className="mt-1 mr-4 text-brand-primary">
                      <Check className="h-5 w-5" />
                    </div>
                    <span className="text-text-main font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Section>
      ))}
    </div>
  );
}
