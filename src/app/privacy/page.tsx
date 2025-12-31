"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function PrivacyPage() {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-brand-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Please read our privacy policy carefully to understand how we handle
            your personal information.
          </motion.p>
        </div>
      </section>

      {/* Privacy Content */}
      <Section background="white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="prose prose-lg text-text-muted">
            <h2 className="text-2xl font-bold text-brand-primary mb-4">
              Information Collection
            </h2>
            <p className="mb-6">
              We collect personal information you provide when using our
              services, such as your name, email address, phone number, and any
              other details submitted through forms or communications.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary mb-4">
              Use of Information
            </h2>
            <p className="mb-6">
              We use the information to provide, maintain, and improve our
              services, respond to inquiries, and deliver relevant content and
              updates to our clients.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary mb-4">
              Information Sharing
            </h2>
            <p className="mb-6">
              We do not share your personal data with third parties except as
              required by law, for legal compliance, or to protect our rights
              and services.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary mb-4">
              Cookies & Tracking
            </h2>
            <p className="mb-6">
              We use cookies and similar technologies to enhance your experience
              on our website, analyze traffic, and understand user preferences.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary mb-4">
              Data Security
            </h2>
            <p className="mb-6">
              We implement reasonable technical and organizational measures to
              protect your personal data from unauthorized access, disclosure,
              or alteration.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary mb-4">
              Changes to Policy
            </h2>
            <p className="mb-6">
              We may update this Privacy Policy periodically. All changes will
              be posted on this page with the effective date.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary mb-4">
              Contact Us
            </h2>
            <p className="mb-6">
              For questions regarding this policy, please{" "}
              <Link href="/contact" className="text-brand-primary underline">
                contact us
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
