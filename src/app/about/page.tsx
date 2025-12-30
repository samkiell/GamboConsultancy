'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Target, Lightbulb, ShieldCheck } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function AboutPage() {
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
            About Gambo Consultancy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            A legacy of excellence defined by academic rigor, professional integrity, and transformative guidance.
          </motion.p>
        </div>
      </section>

      {/* Main Introduction */}
      <Section background="white">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-primary mb-6">Our Narrative</h2>
          <div className="prose prose-lg text-text-muted">
            <p className="mb-6">
              Gambo Consultancy was established with a singular purpose: to provide high-level strategic guidance that bridges the gap between ambition and achievement. In an era of rapid technological and social change, clarity is the most valuable asset. We provide that clarity.
            </p>
            <p className="mb-6">
              Our firm operates at the intersection of five critical disciplines: Education, Technology, Leadership, Mentorship, and Life Coaching. This multidisciplinary approach allows us to see the holistic picture, ensuring that our solutions are not just effective in isolation but synergetic in practice.
            </p>
            <p>
              We pride ourselves on an academic approach to consultancy—meaning every strategy we recommend is backed by research, experience, and a deep understanding of underlying principles. We do not offer quick fixes; we offer sustainable paths to excellence.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* Mission & Vision */}
      <Section background="accent">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div 
            {...fadeInUp}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-brand-accent rounded-full flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-brand-primary" />
              </div>
              <h2 className="text-2xl font-bold text-brand-primary">Our Mission</h2>
            </div>
            <p className="text-text-muted text-lg leading-relaxed">
              To empower institutions, organizations, and individuals with the expert knowledge, strategic frameworks, and mentorship necessary to navigate challenges and achieve sustainable, high-impact growth.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-brand-accent rounded-full flex items-center justify-center mr-4">
                <Lightbulb className="h-6 w-6 text-brand-primary" />
              </div>
              <h2 className="text-2xl font-bold text-brand-primary">Our Vision</h2>
            </div>
            <p className="text-text-muted text-lg leading-relaxed">
              To be the premier global consultancy firm recognized for integrating academic excellence with practical application, fostering a world where leadership is ethical, education is transformative, and technology is human-centric.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Core Values */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-primary">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Integrity', desc: 'We adhere to the highest ethical standards in all our engagements.' },
            { title: 'Excellence', desc: 'We are committed to delivering work of superior quality and precision.' },
            { title: 'Collaboration', desc: 'We believe in the power of partnership and shared goals.' },
            { title: 'Innovation', desc: 'We leverage cutting-edge thinking to solve complex problems.' },
            { title: 'Empathy', desc: 'We approach every client with understanding and respect for their journey.' },
            { title: 'Sustainability', desc: 'We create solutions designed to last and evolve over time.' },
          ].map((value, idx) => (
            <motion.div 
              key={value.title}
              {...fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 border border-gray-100 rounded-lg hover:bg-brand-accent transition-colors"
            >
              <h3 className="text-xl font-bold text-brand-primary mb-2">{value.title}</h3>
              <p className="text-text-muted">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
