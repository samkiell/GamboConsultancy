'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Construction, Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#6f42c1] to-[#17A2B8] flex items-center justify-center mx-auto">
            <Construction className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-gray-300 mb-2">
          Coming Soon
        </p>
        <p className="text-gray-400 mb-8">
          Our full contact form is under development. In the meantime, reach out to us directly:
        </p>

        {/* Quick Contact Info */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="mailto:gamboconsultancy@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
          >
            <Mail size={20} />
            <span>gamboconsultancy@gmail.com</span>
          </a>
          <a
            href="tel:+2347034966376"
            className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
          >
            <Phone size={20} />
            <span>+234 703 496 6376</span>
          </a>
        </div>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#6f42c1] to-[#17A2B8] rounded-full font-semibold text-white shadow-lg flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={20} />
            Back to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
