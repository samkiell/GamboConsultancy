'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Cpu, Users, GraduationCap, Heart, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/layout/Section';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-brand-primary text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6 leading-tight text-white">
              Gambo Consultancy
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light leading-relaxed">
              Empowering organizations and individuals through expert guidance in education, leadership, and technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="font-semibold">
                  Book a Consultation
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Summary */}
      <Section background="white">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-brand-primary">Strategic Guidance for a Complex World</h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Gambo Consultancy is a premier firm dedicated to bridging the gap between potential and performance. 
            With a foundation built on academic rigor and professional integrity, we provide tailored solutions 
            that drive meaningful growth. Whether you are an educational institution, a business leader, or 
            an individual seeking direction, our multidisciplinary team is here to guide you.
          </p>
        </motion.div>
      </Section>

      {/* Core Departments */}
      <Section background="accent">
        <motion.div {...fadeInUp} className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-brand-primary mb-4">Our Core Departments</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Comprehensive expertise across five specialized pillars of consultancy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Educational Consultancy',
              icon: GraduationCap,
              desc: 'Curriculum development, institutional accreditation support, and strategic academic planning.'
            },
            {
              title: 'IT Consultancy',
              icon: Cpu,
              desc: 'Digital transformation strategies, systems integration, and technology infrastructure optimization.'
            },
            {
              title: 'Leadership Consultancy',
              icon: Users,
              desc: 'Executive coaching, organizational culture development, and high-performance team building.'
            },
            {
              title: 'Mentorship Consultancy',
              icon: BookOpen,
              desc: 'Structured mentorship programs for career advancement and professional skill acquisition.'
            },
            {
              title: 'Life Coaching Consultancy',
              icon: Heart,
              desc: 'Holistic personal development strategies to achieve work-life balance and personal fulfillment.'
            }
          ].map((dept, index) => (
            <motion.div 
              key={dept.title}
              {...fadeInUp}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col p-8">
                <div className="h-12 w-12 bg-brand-accent rounded-lg flex items-center justify-center mb-6 text-brand-primary">
                  <dept.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-3">{dept.title}</h3>
                <p className="text-text-muted mb-6 flex-grow">{dept.desc}</p>
                <div className="mt-auto pt-4 border-t border-gray-50">
                   <Link href="/services" className="inline-flex items-center text-brand-primary font-medium hover:underline">
                    Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                   </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-brand-primary mb-6">Why Choose Gambo Consultancy?</h2>
            <p className="text-text-muted mb-8 text-lg">
              We define success by the measurable impact we create for our clients. Our approach is rooted in:
            </p>
            <ul className="space-y-4">
              {[
                'Evidence-based methodologies and academic credibility',
                'A holistic approach to organizational and personal growth',
                'Unwavering commitment to professional ethics and integrity',
                'Tailored strategies that address your unique challenges'
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-brand-primary mr-3 flex-shrink-0" />
                  <span className="text-text-main font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/about">
                <Button variant="primary">Read Our Mission</Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-accent p-10 rounded-2xl border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-brand-primary mb-4">Our Promise</h3>
            <blockquote className="text-lg italic text-text-muted border-l-4 border-brand-primary pl-4 my-6">
              "To serve as a trusted partner in your journey towards excellence, providing the clarity and expertise needed to navigate change."
            </blockquote>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" className="text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Future?</h2>
          <p className="text-xl text-gray-200 mb-10">
            Schedule a consultation today and take the first step towards achieving your strategic goals.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="min-w-[200px]">
              Book a Consultation
            </Button>
          </Link>
        </motion.div>
      </Section>
    </div>
  );
}
