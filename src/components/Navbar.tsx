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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white border-b border-gray-50'} py-4`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between h-auto min-h-[80px]">
        
        {/* Left: Logo - Fixed width to help centering */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <div className="relative w-40 h-10 md:w-56 md:h-14">
              <Image 
                src="/logo.jpg" 
                alt="Gambo Consultancy Logo" 
                fill 
                className="object-contain object-left" 
                priority
              />
            </div>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[15px] font-medium text-gray-600 hover:text-[var(--primary)] transition-all relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right: CTA - Fixed width for symmetry */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            className="hidden md:flex items-center justify-center min-w-[180px] px-8 py-4 bg-[var(--primary)] text-white text-sm font-bold rounded-full hover:bg-[var(--primary-dark)] hover:shadow-lg transition-all duration-300 transform active:scale-95 whitespace-nowrap"
          >
            Get in Touch
          </Link>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
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
