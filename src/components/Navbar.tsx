"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Educational Consultancy", href: "/services/educational" },
      { name: "IT Consultancy", href: "/services/it" },
      { name: "Leadership Consultancy", href: "/services/leadership" },
      { name: "Mentorship Consultancy", href: "/services/mentorship" },
      { name: "Life Coaching", href: "/services/life-coaching" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-[#007BFF] to-[#17A2B8] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href="mailto:gamboconsultancy@gmail.com"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail size={14} />
              <span>gamboconsultancy@gmail.com</span>
            </a>
            <a
              href="tel:+2347034966376"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone size={14} />
              <span>+234 703 496 6376</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Empowering Excellence in Every Consultation</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#007BFF] to-[#28A745] flex items-center justify-center text-white font-bold text-xl"
              >
                GC
              </motion.div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-[#212529]">Gambo</span>
                <span className="text-xl font-bold text-[#007BFF]">
                  {" "}
                  Consultancy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() =>
                    link.dropdown && setActiveDropdown(link.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-[#212529] hover:text-[#007BFF] font-medium transition-colors py-2"
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown size={16} />}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                      >
                        {link.dropdown.map((item, index) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-3 text-[#212529] hover:bg-gradient-to-r hover:from-[#007BFF]/10 hover:to-[#17A2B8]/10 hover:text-[#007BFF] transition-all border-b border-gray-50 last:border-0"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#007BFF] to-[#17A2B8] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Book Consultation
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() =>
                        !link.dropdown && setIsMobileMenuOpen(false)
                      }
                      className="block text-lg font-medium text-[#212529] hover:text-[#007BFF] transition-colors"
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-[#6c757d] hover:text-[#007BFF] transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <button className="w-full bg-gradient-to-r from-[#007BFF] to-[#17A2B8] text-white px-6 py-3 rounded-full font-semibold mt-4">
                    Book Consultation
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
