'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 block">Our Expertise</span>
          <h1 className="mb-8">Tailored for <span className="text-gray-300">impact.</span></h1>
          <p className="text-xl text-gray-500 leading-relaxed mb-12">
            Detailed insights into our five core consultancy pillars—Education, Technology, Leadership, Mentorship, and Coaching—are being meticulously prepared. Stay tuned for a deep dive into our methodologies.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black hover:gap-4 transition-all">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
