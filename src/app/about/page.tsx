'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 block">About Us</span>
          <h1 className="mb-8">Our journey of <span className="text-gray-300">excellence.</span></h1>
          <p className="text-xl text-gray-500 leading-relaxed mb-12">
            We are currently refining our story to better reflect our vision for the future of consultancy. This page is under construction and will be back soon with a full overview of our team and ethos.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black hover:gap-4 transition-all">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
