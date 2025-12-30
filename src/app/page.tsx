'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Monitor, Code, Settings, Users, GraduationCap, Building2 } from 'lucide-react';

const services = [
  { 
    icon: Monitor, 
    title: 'Hardware Supply', 
    desc: 'Procurement of premium educational tools, devices, and modern equipment.' 
  },
  { 
    icon: Code, 
    title: 'Software Solutions', 
    desc: 'Custom digital platforms designed specifically for schools and parents.' 
  },
  { 
    icon: Settings, 
    title: 'Management', 
    desc: 'Strategic advisory and consultancy across Education and IT sectors.' 
  },
];

const checklist = [
  'Tailored strategies for educational growth',
  'Expert recruitment and staff training',
  'Innovative technological integration',
  'Proven track record of excellence'
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      
      {/* 2. Hero Section 
          - Two-column layout on desktop, stacked on mobile.
          - Vertical padding: min 120px desktop (pt-32), 64px mobile (pt-24 to clear nav).
      */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start z-10"
          >
            <span className="text-[var(--primary)] font-bold tracking-widest text-sm uppercase mb-6">
              Corporate Education & Consulting
            </span>
            
            {/* Headline: max width 60% relative to container? No, prompt said "Headline max width 60%".
                In a 2-col layout, the column itself is 50%. 60% of that is too small. 
                I assume "Headline max width 60%" refers to full width layouts or the visual width.
                In a 2-col, I will let it fill the column but limit line length if needed.
                Actually, "Headline max width 60%" usually implies the text shouldn't stretch too wide. 
                In 2-col, it's naturally constrained. I'll make it bold and large.
            */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Empowering <br />
              <span className="text-[var(--primary)]">Education</span> with Strategy.
            </h1>
            
            {/* Subtext: max width 55% */}
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10 max-w-lg font-light">
              Gambo Consultancy provides expert solutions, training, and support for schools, parents, and students to achieve sustainable excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-[var(--primary)] text-white font-semibold rounded-lg hover:bg-[var(--primary-dark)] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
              >
                Get Started <ArrowRight size={20} />
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center justify-center w-full sm:w-auto"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Image/Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px] w-full bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100"
          >
             {/* Abstract/Corporate representation */}
             <div className="absolute inset-0 bg-[var(--primary)]/5 flex items-center justify-center">
                {/* Placeholders for the actual illustration */}
                <div className="relative w-full h-full p-12">
                   <div className="w-full h-full bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-200">
                      <Image 
                        src="/hero-consulting.png" 
                        alt="Consulting Strategy"
                        width={600}
                        height={600}
                        className="object-cover opacity-80"
                      />
                      {/* Fallback if no image */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold text-2xl">
                        Strategic Vision
                      </div>
                   </div>
                   {/* Floating Elements for "Dynamic" feel */}
                   <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-20 right-20 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-[180px]"
                   >
                     <div className="flex items-center gap-3 mb-2">
                       <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                         <CheckCircle size={16} />
                       </div>
                       <span className="text-sm font-bold text-gray-800">Verified</span>
                     </div>
                     <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                       <div className="h-full w-[80%] bg-green-500" />
                     </div>
                   </motion.div>
                </div>
             </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Services Preview Section 
          - Grid of 3 (desktop)
          - Cards: Internal padding, Rounded, Soft shadow, Icon at top
      */}
      <section className="py-24 bg-[var(--bg-soft)]">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-gray-500 text-lg">Comprehensive consulting solutions tailored to your unique educational needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[var(--primary-bg)] rounded-xl flex items-center justify-center text-[var(--primary)] mb-8 group-hover:scale-110 transition-transform">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {service.desc}
                </p>
                <Link href="/services" className="text-[var(--primary)] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all text-sm uppercase tracking-wide">
                  Read More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section 
          - Two-column layout
          - Left: Short text
          - Right: Checklist
      */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Block */}
          <div>
             <span className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-4 block">Why Choose Gambo?</span>
             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
               Built on Trust, <br />Driven by Excellence.
             </h2>
             <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
               We don't just advise; we partner with you to implement sustainable systems that improve educational outcomes and operational efficiency.
             </p>
             <Link href="/about" className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors">
               More About Us
             </Link>
          </div>

          {/* Right Checklist */}
          <div className="bg-[var(--bg-soft)] p-8 md:p-12 rounded-3xl">
            <ul className="space-y-6">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 text-[var(--primary)]">
                    <CheckCircle size={24} className="fill-white text-[var(--primary)]" />
                  </div>
                  <span className="text-lg font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Final CTA (Optional but recommended for landing page flow) */}
      <section className="py-24 bg-[var(--primary)] text-white text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to elevate your institution?</h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Book a session with our consultants today.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-[var(--primary)] text-lg font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>

    </main>
  );
}
