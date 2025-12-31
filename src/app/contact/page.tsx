"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";

type Inputs = {
  name: string;
  email: string;
  department: string;
  message: string;
};

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // Simulate API call
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-brand-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Ready to start the conversation? We look forward to hearing from
            you.
          </p>
        </div>
      </section>

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-brand-primary mb-8">
              Get in Touch
            </h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="h-10 w-10 bg-brand-accent rounded-lg flex items-center justify-center text-brand-primary shrink-0 mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-main mb-1">
                    Office Location
                  </h3>
                  <a
                    href="https://maps.google.com/?q=Road+2,+ICT+Centre,+Centre+of+Excellence+in+Software+Engineering,+Obafemi+Awolowo+University,+Ile-Ife,+22028,+Osun+State"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-brand-primary transition-colors"
                  >
                    Road 2, ICT Centre, Centre of Excellence in Software
                    Engineering,
                    <br />
                    Obafemi Awolowo University, Ile-Ife, 22028, Osun State.
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-10 w-10 bg-brand-accent rounded-lg flex items-center justify-center text-brand-primary shrink-0 mr-4">
                  <EmailIcon />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-main mb-1">
                    Email Support
                  </h3>
                  <a
                    href="mailto:gamboconsultancy@gmail.com"
                    className="text-text-muted hover:text-brand-primary transition-colors"
                  >
                    gamboconsultancy@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-10 w-10 bg-brand-accent rounded-lg flex items-center justify-center text-brand-primary shrink-0 mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-main mb-1">
                    Phone / WhatsApp
                  </h3>
                  <div className="flex flex-col space-y-1">
                    <a
                      href="tel:+2347034966376"
                      className="text-text-muted hover:text-brand-primary transition-colors"
                    >
                      +234 703 496 6376
                    </a>
                    <a
                      href="tel:+2349069212785"
                      className="text-text-muted hover:text-brand-primary transition-colors"
                    >
                      +234 906 921 2785
                    </a>
                    <a
                      href="tel:+2348036574935"
                      className="text-text-muted hover:text-brand-primary transition-colors"
                    >
                      +234 803 657 4935
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-brand-accent rounded-xl border border-gray-200">
              <h4 className="font-semibold text-brand-primary mb-2 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Consultation Hours
              </h4>
              <p className="text-text-muted">
                Our consultants are available by appointment. Please use the
                form to request a specific time slot.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                  <CheckIcon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Message Sent
                </h3>
                <p className="text-gray-500 mb-8 max-w-sm">
                  Thank you for reaching out to Gambo Consultancy. A member of
                  our team will get back to you shortly.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary border px-4 py-2"
                    placeholder="Zabdiel Anyaogu"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary border px-4 py-2"
                    placeholder="zabdielanyaogu@gmail.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="department"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Interested Department
                  </label>
                  <select
                    id="department"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary border px-4 py-2"
                    {...register("department", {
                      required: "Please select a department",
                    })}
                  >
                    <option value="">Select a department...</option>
                    <option value="education">Educational Consultancy</option>
                    <option value="it">IT Consultancy</option>
                    <option value="leadership">Leadership Consultancy</option>
                    <option value="mentorship">Mentorship Consultancy</option>
                    <option value="lifecoach">Life Coaching Consultancy</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  {errors.department && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.department.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary border px-4 py-2"
                    placeholder="How can we help you?"
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

function EmailIcon() {
  return <Mail className="h-5 w-5" />;
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}
