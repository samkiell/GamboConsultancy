"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { CheckCircle } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const terms = [
  {
    number: 1,
    title: "Acceptance of Terms",
    content:
      "By accessing or using Gambo Consultancy's website and services, you agree to be bound by these Terms & Conditions. If you do not agree, please refrain from using our services.",
  },
  {
    number: 2,
    title: "Use of Services",
    content:
      "You agree to use our consultancy services only for lawful purposes and in a manner consistent with all applicable laws and regulations. You must not misuse or attempt to disrupt our services.",
  },
  {
    number: 3,
    title: "Intellectual Property",
    content:
      "All content on this website, including text, graphics, logos, and images, is the property of Gambo Consultancy and protected by copyright laws. Unauthorized use is strictly prohibited.",
  },
  {
    number: 4,
    title: "Limitation of Liability",
    content:
      "Gambo Consultancy is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our website or services. Clients use our services at their own risk.",
  },
  {
    number: 5,
    title: "Privacy",
    content:
      "We value your privacy. Any personal information provided will be handled in accordance with our Privacy Policy.",
  },
  {
    number: 6,
    title: "Changes to Terms",
    content:
      "Gambo Consultancy reserves the right to modify these Terms & Conditions at any time. Any changes will be updated on this page with the effective date.",
  },
  {
    number: 7,
    title: "Contact Us",
    content:
      "For questions or clarifications regarding these terms, please contact us at gamboconsultancy@gmail.com.",
  },
];

export default function TermsPage() {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-brand-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl text-white font-bold mb-6"
          >
            Terms & Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Please read these terms and conditions carefully before using our
            website and services.
          </motion.p>
        </div>
      </section>

      {/* Terms Content */}
      <Section background="white">
        <div className="max-w-5xl mx-auto space-y-8">
          {terms.map((term) => (
            <motion.div
              key={term.number}
              {...fadeInUp}
              className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 flex items-center justify-center bg-brand-primary text-white font-bold rounded-full mr-4 text-lg">
                  {term.number}
                </div>
                <h2 className="text-2xl font-bold text-brand-primary">
                  {term.title}
                </h2>
              </div>
              <p className="text-text-muted text-lg">{term.content}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
