"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Check } from "lucide-react";

const departments = [
  {
    title: "Educational Consultancy",
    description:
      "Empowering educators, enriching learning, and developing institutions.",
    services: [
      // Sub-Department: Academic Development & Counselling
      "Academic Programme Development and Review",
      "Curriculum Design and Modernisation",
      "Student Success and Retention Strategy",
      "Faculty Development and Support Programmes",
      "Academic Writing and Research Skills Workshops",
      "Counselling for Academic Stress and Career Development",
      // Sub-Department: Teaching Consultancy
      "Teacher Training and Professional Development",
      "Effective Classroom Management Strategies",
      "Instructional Design and Educational Technology Integration",
      "Assessment, Evaluation, and Feedback Methodologies",
      // Sub-Department: Research Consultancy
      "Research Design and Methodology Planning",
      "Quantitative and Qualitative Data Collection & Analysis",
      "Grant Writing and Funding Proposal Support",
      "Research Paper Writing, Editing, and Publication Guidance",
      // Cross-Departmental Services
      "School Leadership Development: Training for School Heads and Owners",
      "Parenting Support: Workshops and resources for parents",
      "Product & Hardware Supply: Procurement of educational tools and technology",
    ],
  },
  {
    title: "IT Consultancy",
    description: "Transforming your technology to transform your business.",
    services: [
      "IT Strategy Development: Crafting long-term technology roadmaps",
      "Digital Transformation: Adoption of modern digital processes",
      "Cybersecurity Solutions: Security assessments and protocols",
      "Software & App Development: Custom desktop, web, and mobile apps",
      "Cloud Computing Services: Migration, management, and optimisation",
      "Data Analytics & Management: Unlocking insights from data",
      "Product & Hardware Supply: Sourcing and procuring IT equipment",
    ],
  },
  {
    title: "Leadership Consultancy",
    description:
      "Building visionary leaders and high-performance organisations.",
    services: [
      "Executive Coaching & Development: One-on-one coaching for leaders",
      "Management Consultancy: Strategic advisory for organisations",
      "Strategic Planning & Implementation: Developing and executing strategy",
      "Change Management: Guiding teams through transitions",
      "Team Building & Performance Management",
      "Staff Recruitment: Sourcing and hiring qualified personnel",
    ],
  },
  {
    title: "Mentorship Consultancy",
    description: "Guiding you to success, one step at a time.",
    services: [
      "Career Coaching & Professional Development Mentoring",
      "Leadership Mentoring",
      "Entrepreneurial Mentoring",
      "One-on-One and Group Mentoring Programmes",
    ],
  },
  {
    title: "Life Coaching Consultancy",
    description: "Unlocking your potential to live your best life.",
    services: [
      "Personal Growth & Development Coaching",
      "Career Transition Coaching",
      "Mindfulness & Wellness Coaching",
      "Confidence & Self-Esteem Building",
      "Time Management & Productivity Coaching",
    ],
  },
];

export default function ServicesPage() {
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Specialized expertise tailored to meet the unique challenges of your
            organization.
          </motion.p>
        </div>
      </section>

      {/* Video Introduction */}
      <Section background="white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <video className="w-full h-auto" controls preload="metadata">
              <source src="/videos/Services.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </Section>

      {/* Departments */}
      {departments.map((dept, index) => (
        <Section
          key={dept.title}
          background={index % 2 === 0 ? "white" : "accent"}
          className="border-b border-gray-100 last:border-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Dept Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-3xl font-bold text-brand-primary mb-4">
                {dept.title}
              </h2>
              <p className="text-text-muted text-lg leading-relaxed">
                {dept.description}
              </p>
              <div className="h-1 w-20 bg-brand-primary mt-6"></div>
            </motion.div>

            {/* Service List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dept.services.map((service) => (
                  <div
                    key={service}
                    className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-brand-primary/30 transition-colors"
                  >
                    <div className="mt-1 mr-4 text-brand-primary">
                      <Check className="h-5 w-5" />
                    </div>
                    <span className="text-text-main font-medium">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Section>
      ))}
    </div>
  );
}
