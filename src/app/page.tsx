'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  GraduationCap, 
  Laptop, 
  Users, 
  Heart, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  MapPin,
  Award,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Quote
} from 'lucide-react';

// Services data
const services = [
  {
    icon: GraduationCap,
    title: 'Educational Consultancy',
    description: 'Academic development, teaching consultancy, research guidance, and institutional capacity building.',
    color: 'from-[#007BFF] to-[#4da3ff]',
    href: '/services/educational',
  },
  {
    icon: Laptop,
    title: 'IT Consultancy',
    description: 'IT strategy development, digital transformation, cybersecurity solutions, and technology integration.',
    color: 'from-[#28A745] to-[#48c664]',
    href: '/services/it',
  },
  {
    icon: Users,
    title: 'Leadership Consultancy',
    description: 'Executive coaching, management consultancy, strategic planning, and organizational development.',
    color: 'from-[#17A2B8] to-[#3fc3d8]',
    href: '/services/leadership',
  },
  {
    icon: Target,
    title: 'Mentorship Consultancy',
    description: 'Career coaching, leadership mentoring, entrepreneurial guidance, and professional development.',
    color: 'from-[#6f42c1] to-[#9b6dd3]',
    href: '/services/mentorship',
  },
  {
    icon: Heart,
    title: 'Life Coaching',
    description: 'Personal growth, career transition support, work-life balance, and time management coaching.',
    color: 'from-[#fd7e14] to-[#ffa94d]',
    href: '/services/life-coaching',
  },
];

// Stats data
const stats = [
  { number: '500+', label: 'Clients Served', icon: Users },
  { number: '15+', label: 'Years Experience', icon: Award },
  { number: '50+', label: 'Projects Completed', icon: BookOpen },
  { number: '98%', label: 'Client Satisfaction', icon: Star },
];

// Testimonials data
const testimonials = [
  {
    name: 'Dr. Aisha Bello',
    role: 'University Professor',
    content: 'Gambo Consultancy transformed our department\'s approach to academic excellence. Their educational consultancy services are world-class.',
    rating: 5,
  },
  {
    name: 'Engr. Chukwudi Okonkwo',
    role: 'Tech Startup Founder',
    content: 'The IT consultancy services helped us navigate digital transformation seamlessly. Highly recommended for any organization seeking tech solutions.',
    rating: 5,
  },
  {
    name: 'Mrs. Folake Adeyemi',
    role: 'Corporate Executive',
    content: 'The leadership coaching I received was transformative. It helped me become a more effective leader and communicator.',
    rating: 5,
  },
];

// Features data
const features = [
  {
    icon: Lightbulb,
    title: 'Expert Guidance',
    description: 'Benefit from years of professional experience and academic excellence.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Track record of successful transformations across industries.',
  },
  {
    icon: Target,
    title: 'Tailored Solutions',
    description: 'Customized approaches to meet your unique challenges and goals.',
  },
  {
    icon: Heart,
    title: 'Dedicated Support',
    description: 'Ongoing support and follow-up to ensure lasting success.',
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-[#007BFF]/20 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-[#28A745]/20 to-transparent rounded-full blur-3xl"
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
              >
                <span className="w-2 h-2 bg-[#28A745] rounded-full animate-pulse" />
                <span className="text-sm font-medium">Your Partner in Excellence</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Empowering{' '}
                <span className="bg-gradient-to-r from-[#007BFF] to-[#17A2B8] bg-clip-text text-transparent">
                  Individuals
                </span>{' '}
                &{' '}
                <span className="bg-gradient-to-r from-[#28A745] to-[#17A2B8] bg-clip-text text-transparent">
                  Organizations
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Transform your potential into excellence with our comprehensive consultancy services 
                in Education, IT, Leadership, Mentorship, and Life Coaching.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-[#007BFF] to-[#17A2B8] rounded-full font-semibold text-white shadow-lg shadow-[#007BFF]/30 flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    Get Started
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-white/30 hover:border-white/60 rounded-full font-semibold text-white backdrop-blur-sm flex items-center justify-center gap-2 w-full sm:w-auto transition-colors"
                  >
                    Explore Services
                  </motion.button>
                </Link>
              </div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 flex items-center gap-6 flex-wrap"
              >
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle size={20} className="text-[#28A745]" />
                  <span>Verified Expert</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle size={20} className="text-[#28A745]" />
                  <span>15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle size={20} className="text-[#28A745]" />
                  <span>500+ Clients</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative w-full aspect-square max-w-lg mx-auto"
                >
                  {/* Decorative Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#007BFF]/30 animate-spin-slow" style={{ animationDuration: '30s' }} />
                  
                  {/* Main Image Container */}
                  <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                    <Image
                      src="/draft/photo_4_2025-12-30_20-13-12.jpg"
                      alt="Dr. Muhammad Gambo"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Floating Cards */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    className="absolute -left-4 top-1/4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#007BFF] to-[#17A2B8] flex items-center justify-center">
                        <GraduationCap size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">Education</div>
                        <div className="text-gray-400 text-xs">Expert</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="absolute -right-4 bottom-1/4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#28A745] to-[#17A2B8] flex items-center justify-center">
                        <Laptop size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">IT</div>
                        <div className="text-gray-400 text-xs">Consultant</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-white">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#24243e] to-transparent" />
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 -mt-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="relative bg-white rounded-2xl p-6 shadow-xl border border-gray-100 text-center group hover:shadow-2xl transition-shadow"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/5 to-[#17A2B8]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <stat.icon className="w-8 h-8 text-[#007BFF] mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-[#212529] mb-2">{stat.number}</div>
                  <div className="text-[#6c757d]">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#007BFF]/10 text-[#007BFF] rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mb-4">
              Comprehensive Consultancy Solutions
            </h2>
            <p className="text-lg text-[#6c757d] max-w-2xl mx-auto">
              We offer a wide range of expert consultancy services tailored to meet your unique needs and aspirations.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#212529] mb-3">{service.title}</h3>
                <p className="text-[#6c757d] mb-6 leading-relaxed">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-[#007BFF] font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <Image
                  src="/draft/photo_7_2025-12-30_20-13-12.jpg"
                  alt="About Gambo Consultancy"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                
                {/* Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#007BFF] to-[#17A2B8] text-white p-6 rounded-2xl shadow-xl"
                >
                  <div className="text-4xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Years of Excellence</div>
                </motion.div>

                {/* Decorative Element */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#28A745]/20 to-[#17A2B8]/20 rounded-full blur-2xl" />
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-[#007BFF]/10 text-[#007BFF] rounded-full text-sm font-semibold mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mb-6">
                Your Trusted Partner for{' '}
                <span className="text-[#007BFF]">Professional Growth</span>
              </h2>
              <p className="text-lg text-[#6c757d] mb-6 leading-relaxed">
                Gambo Consultancy is a premier consultancy firm dedicated to empowering individuals, 
                organizations, and educational institutions to achieve their full potential.
              </p>
              <p className="text-[#6c757d] mb-8 leading-relaxed">
                With over 15 years of experience, we provide expert guidance across multiple domains 
                including education, technology, leadership, and personal development. Our approach 
                combines academic rigor with practical insights to deliver transformative results.
              </p>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#007BFF]/10 to-[#17A2B8]/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-[#007BFF]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#212529]">{feature.title}</div>
                      <div className="text-sm text-[#6c757d]">{feature.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#007BFF] to-[#17A2B8] rounded-full font-semibold text-white shadow-lg shadow-[#007BFF]/30 flex items-center gap-2"
                >
                  Learn More About Us
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#007BFF]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#28A745]/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional consultancy services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Proven Expertise',
                description: 'Our team brings decades of combined experience in education, technology, and leadership.',
              },
              {
                icon: Users,
                title: 'Client-Centric Approach',
                description: 'We prioritize understanding your unique needs and delivering tailored solutions.',
              },
              {
                icon: TrendingUp,
                title: 'Measurable Results',
                description: 'We focus on delivering tangible outcomes that drive real impact for our clients.',
              },
              {
                icon: Lightbulb,
                title: 'Innovative Solutions',
                description: 'We stay ahead of industry trends to provide cutting-edge consultancy services.',
              },
              {
                icon: Heart,
                title: 'Commitment to Excellence',
                description: 'We are dedicated to maintaining the highest standards in everything we do.',
              },
              {
                icon: Target,
                title: 'Holistic Approach',
                description: 'Our integrated services address multiple dimensions of personal and professional growth.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#007BFF] to-[#17A2B8] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#007BFF]/10 text-[#007BFF] rounded-full text-sm font-semibold mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-[#6c757d] max-w-2xl mx-auto">
              Hear from professionals and organizations who have transformed their potential through our services.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-[#007BFF]/10" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#ffc107] text-[#ffc107]" />
                  ))}
                </div>
                <p className="text-[#6c757d] mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#007BFF] to-[#17A2B8] flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-[#212529]">{testimonial.name}</div>
                    <div className="text-sm text-[#6c757d]">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#007BFF] to-[#17A2B8] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Potential?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards excellence. Schedule a consultation with our expert team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-[#007BFF] rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Schedule Consultation
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link href="tel:+2347034966376">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Call Us Now
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 bg-[#F8F9FA] rounded-2xl"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#007BFF] to-[#17A2B8] flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-[#6c757d] mb-1">Call Us</div>
                <a href="tel:+2347034966376" className="font-semibold text-[#212529] hover:text-[#007BFF] transition-colors">
                  +234 703 496 6376
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4 p-6 bg-[#F8F9FA] rounded-2xl"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#28A745] to-[#17A2B8] flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-[#6c757d] mb-1">Email Us</div>
                <a href="mailto:gamboconsultancy@gmail.com" className="font-semibold text-[#212529] hover:text-[#007BFF] transition-colors">
                  gamboconsultancy@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 p-6 bg-[#F8F9FA] rounded-2xl"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6f42c1] to-[#17A2B8] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-[#6c757d] mb-1">Visit Us</div>
                <span className="font-semibold text-[#212529]">
                  OAU, Ile-Ife, Osun State
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
