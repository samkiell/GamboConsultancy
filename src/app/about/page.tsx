"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Target, Lightbulb, ShieldCheck } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-brand-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            About Gambo Consultancy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            A legacy of excellence defined by academic rigor, professional
            integrity, and transformative guidance.
          </motion.p>
        </div>
      </section>

      {/* Main Introduction */}
      <Section background="white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Founder Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-5 lg:col-span-4"
            >
              <div className="relative">
                <Image
                  src="/Dr. Gambo.jpg"
                  alt="Dr. Gambo, Founder & Lead Consultant"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-sm w-full h-auto object-cover"
                  priority
                />
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-brand-primary">Dr. Gambo</h3>
                  <p className="text-sm text-text-muted uppercase tracking-wider mt-1 font-medium">Founder & Lead Consultant</p>
                </div>
              </div>
            </motion.div>

            {/* Narrative Content */}
            <motion.div 
              {...fadeInUp} 
              className="md:col-span-7 lg:col-span-8"
            >
              <h2 className="text-3xl font-bold text-brand-primary mb-6">
                About Gambo Consultancy
              </h2>
              <div className="prose prose-lg text-text-muted">
                <p className="mb-6">
                  Welcome to Gambo Consultancy, a premier management consultancy
                  firm dedicated to empowering organisations, educational
                  institutions, and individuals to achieve unparalleled success. We
                  provide expert analysis, strategic solutions, and transformative
                  capacity-building initiatives across a diverse range of sectors.
                  By partnering with us, our clients gain the insight and tools
                  necessary to improve performance, drive efficiency, and navigate
                  the complexities of the modern world. Whether you are a business
                  aiming for market leadership, an educational institution fostering
                  future generations, or an individual striving for personal growth,
                  we are your trusted partner in achieving excellence.
                </p>
                <p className="mb-6">
                  We combine deep industry knowledge with practical strategies to
                  deliver measurable results. We tailor our services to the unique
                  needs of each client, ensuring that every initiative drives
                  growth, fosters innovation, and strengthens capabilities. With
                  Gambo Consultancy as your partner, you gain not just advice, but
                  actionable solutions that make a lasting impact.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section background="accent">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            {...fadeInUp}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-brand-accent rounded-full flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-brand-primary" />
              </div>
              <h2 className="text-2xl font-bold text-brand-primary">
                Our Mission
              </h2>
            </div>
            <p className="text-text-muted text-lg leading-relaxed">
              At Gambo Consultancy, our mission is to empower individuals,
              organisations, and educational institutions to achieve their full
              potential through expert consultancy services, innovative
              solutions, and capacity-building initiatives. We strive to foster
              academic excellence, promote lifelong learning, and enhance
              organisational performance, ultimately contributing to the
              betterment of society.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-brand-accent rounded-full flex items-center justify-center mr-4">
                <Lightbulb className="h-6 w-6 text-brand-primary" />
              </div>
              <h2 className="text-2xl font-bold text-brand-primary">
                Our Vision
              </h2>
            </div>
            <p className="text-text-muted text-lg leading-relaxed">
              Our vision is to be a leading consultancy firm, recognised for our
              expertise, innovation, and commitment to excellence in education,
              academic development, capacity building, and organisational
              growth. We aim to make a positive impact on the lives of
              individuals, organisations, and communities, helping them navigate
              the complexities of the modern world and achieve their goals.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Core Values */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-primary">
            Our Core Values
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Integrity",
              desc: "We adhere to the highest ethical standards in all our engagements.",
            },
            {
              title: "Excellence",
              desc: "We are committed to delivering work of superior quality and precision.",
            },
            {
              title: "Collaboration",
              desc: "We believe in the power of partnership and shared goals.",
            },
            {
              title: "Innovation",
              desc: "We leverage cutting-edge thinking to solve complex problems.",
            },
            {
              title: "Empathy",
              desc: "We approach every client with understanding and respect for their journey.",
            },
            {
              title: "Sustainability",
              desc: "We create solutions designed to last and evolve over time.",
            },
          ].map((value, idx) => (
            <motion.div
              key={value.title}
              {...fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 border border-gray-100 rounded-lg hover:bg-brand-accent transition-colors"
            >
              <h3 className="text-xl font-bold text-brand-primary mb-2">
                {value.title}
              </h3>
              <p className="text-text-muted">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
