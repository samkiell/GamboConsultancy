"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { ChevronDown, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const faqs = [
  {
    question: "What does Gambo Consultancy do?",
    answer: "We provide expert management consultancy across education, technology, leadership, mentorship, and life coaching. Our mission is to bridge the gap between potential and performance through academic rigor and practical strategy.",
  },
  {
    question: "Who are your services for?",
    answer: "Our services are designed for educational institutions, corporate organizations, and individuals seeking professional growth. Whether you are a university seeking accreditation support or a business leader aiming for organizational efficiency, we have tailored solutions for you.",
  },
  {
    question: "How do your consultations work?",
    answer: "Our process begins with an initial needs assessment to understand your specific challenges. We then develop a strategic roadmap, implement targeted interventions, and provide ongoing support to ensure sustainable results.",
  },
  {
    question: "Are your services tailored or fixed?",
    answer: "We believe in a bespoke approach. While we have proven frameworks, every strategy is customized to align with your unique goals, culture, and operational context.",
  },
  {
    question: "How are services delivered?",
    answer: "We offer flexible delivery models including on-site workshops, remote digital consultations, and hybrid arrangements to suit your location and preferences.",
  },
  {
    question: "What is your stance on confidentiality?",
    answer: "Integrity is one of our core values. We adhere to strict confidentiality protocols and professional ethical standards in all client engagements to ensure your data and strategic interests are protected.",
  },
  {
    question: "How do I get started?",
    answer: "You can schedule an initial consultation by visiting our Contact page or reaching out directly via email or phone. We will respond promptly to discuss how we can assist you.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-brand-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto font-light"
          >
            Clear answers to common questions about our services and approach.
          </motion.p>
        </div>
      </section>

      {/* FAQ Content */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-text-muted mb-6">
              Still have questions? We are here to help.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={false}
      className={`border rounded-lg overflow-hidden transition-colors ${
        isOpen ? "border-brand-primary bg-brand-accent/10" : "border-gray-200 bg-white"
      }`}
    >
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
      >
        <span
          className={`text-lg font-semibold ${
            isOpen ? "text-brand-primary" : "text-text-main"
          }`}
        >
          {question}
        </span>
        <span
          className={`ml-4 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? (
            <Minus className="h-5 w-5 text-brand-primary" />
          ) : (
            <Plus className="h-5 w-5 text-text-muted" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-text-muted leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
