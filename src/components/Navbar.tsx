'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold text-lg rounded">G</div>
          <span className="text-xl font-bold tracking-tight group-hover:opacity-70 transition-opacity">
            Gambo<span className="text-gray-400 font-normal">Consultancy</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-gray-500 hover:text-black transition-colors">
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="ml-4 px-5 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all">
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden flex flex-col gap-4"
        >
          {links.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-900">
              {link.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full py-4 bg-black text-white text-center font-semibold rounded-lg mt-2">
            Get Started
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
