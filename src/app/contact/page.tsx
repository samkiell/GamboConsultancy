'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 block">Contact</span>
          <h1 className="mb-8">Let's start the <span className="text-gray-300">conversation.</span></h1>
          <p className="text-xl text-gray-500 leading-relaxed mb-12">
            Our full contact experience is coming soon. In the meantime, please reach out to us via the channels below.
          </p>
          
          <div className="space-y-6 mb-12">
              <a href="mailto:gamboconsultancy@gmail.com" className="flex items-center gap-4 text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">
                <div className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-full"><Mail size={18} /></div>
                gamboconsultancy@gmail.com
              </a>
              <a href="tel:+2347034966376" className="flex items-center gap-4 text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">
              <div className="w-10 h-10 bg-gray-50 flex items-center justify-center rounded-full"><Phone size={18} /></div>
                +234 703 496 6376
              </a>
          </div>

          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black hover:gap-4 transition-all">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
