'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white border-b border-gray-50'} py-3`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center">
            <div className="relative w-44 h-11 md:w-56 md:h-14">
              <Image 
                src="/logo.jpg" 
                alt="Gambo Consultancy Logo" 
                fill 
                className="object-contain" 
                priority
              />
            </div>
          </Link>
        </div>

        {/* Center: Desktop Narvigation Links */}
        <div className="hidden md:flex items-center justify-center gap-12 flex-1">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[15px] font-semibold text-gray-700 hover:text-[var(--primary)] transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right: CTA */}
        <div className="flex-1 flex justify-end items-center gap-6">
          <Link 
            href="/contact" 
            className="hidden md:block px-7 py-3 bg-[var(--primary)] text-white text-sm font-bold rounded-full hover:bg-black transition-all shadow-md transform hover:scale-105 active:scale-95"
          >
            Get in Touch
          </Link>

          {/* Mobile toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-900">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-8 md:hidden flex flex-col gap-6 shadow-xl"
        >
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-lg font-bold text-gray-900 border-b border-gray-50 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)} 
            className="w-full py-4 bg-[var(--primary)] text-white text-center font-bold rounded-lg"
          >
            Get in Touch
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
