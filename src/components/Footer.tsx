import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold text-lg rounded">G</div>
              <span className="text-xl font-bold tracking-tight">Gambo Consultancy</span>
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-8">
              Expert consultancy delivering tailored solutions in education, technology, and leadership. Empowering individuals and organizations to reach their full potential.
            </p>
            <div className="space-y-4">
              <a href="mailto:gamboconsultancy@gmail.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-black transition-colors">
                <Mail size={16} />
                gamboconsultancy@gmail.com
              </a>
              <a href="tel:+2347034966376" className="flex items-center gap-3 text-sm text-gray-400 hover:text-black transition-colors">
                <Phone size={16} />
                +234 703 496 6376
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-900 mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Services', 'About Us', 'Contact', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-gray-500 hover:text-black transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-900 mb-6">Office</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              ICT Centre, Road 2,<br />
              OAU, Ile-Ife,<br />
              Osun State, Nigeria.
            </p>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {currentYear} Gambo Consultancy Services. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-black">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
