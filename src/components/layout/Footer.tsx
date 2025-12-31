import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white py-12 border-t border-brand-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand & Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold tracking-tight">Gambo Consultancy</h3>
            <p className="text-gray-300 max-w-sm">
              Providing expert educational, IT, leadership, and mentorship consultancy services with integrity and academic excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-100">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-100">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-brand-accent mt-0.5 shrink-0" />
                <span className="text-gray-300">
                  Road 2, ICT Centre, Centre of Excellence in Software Engineering,<br />
                  Obafemi Awolowo University, Ile-Ife, 22028, Osun State.
                </span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-brand-accent mt-0.5 shrink-0" />
                <div className="text-gray-300 flex flex-col">
                  <span>+234 703 496 6376</span>
                  <span>+234 906 921 2785</span>
                  <span>+234 803 657 4935</span>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-brand-accent shrink-0" />
                <span className="text-gray-300">gamboconsultancy@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Gambo Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
