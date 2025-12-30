import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-8">
              <div className="relative w-48 h-12">
                <Image 
                  src="/logo.jpg" 
                  alt="Gambo Consultancy" 
                  fill 
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-10 text-sm">
              At Gambo Consultancy Services, we offer tailored solutions to educational challenges through training, recruitment, academic support, and custom software development.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <Mail size={18} className="text-[var(--primary)] mt-0.5 shrink-0" />
                <a href="mailto:gamboconsultancy@gmail.com" className="hover:text-[var(--primary)] transition-colors">
                  gamboconsultancy@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <Phone size={18} className="text-[var(--primary)] mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+2347034966376" className="hover:text-[var(--primary)]">+234 703 496 6376</a>
                  <a href="tel:+2348036574935" className="hover:text-[var(--primary)]">+234 803 657 4935</a>
                  <a href="tel:+2349069212785" className="hover:text-[var(--primary)]">+234 906 921 2785</a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-900 mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Services', 'About Us', 'Contact', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-gray-500 hover:text-[var(--primary)] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-900 mb-8">Location</h4>
            <div className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed">
              <MapPin size={18} className="text-[var(--primary)] mt-1 shrink-0" />
              <p>
                Road 2, ICT Center,<br />
                Center of Excellence in Software Engineering,<br />
                Obafemi Awolowo University (OAU),<br />
                Ile-Ife, 22028, Osun State.
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-semibold text-gray-400 uppercase tracking-widest">
          <p>© {currentYear} Gambo Consultancy Services. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-[var(--primary)] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[var(--primary)] transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
