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
  phone: string;
  department: string;
  message: string;
};

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setSubmissionError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      setSubmissionError("Something went wrong. Please try again later.");
    }
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
                    href="https://maps.google.com/?q=Opposite+Obafemi+Awolowo+University+Campus+Gate,+Ile-Ife,+Osun+State"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-brand-primary transition-colors"
                  >
                    Opposite Obafemi Awolowo University Campus Gate, Ile-Ife,
                    Osun State.
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
                    <div className="flex items-center gap-2">
                      <a href="tel:+2347034966376" className="text-text-muted hover:text-brand-primary transition-colors">+234 703 496 6376</a>
                      <a
                        href="https://wa.me/2347034966376"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat on WhatsApp"
                        className="opacity-80 hover:opacity-100 transition-opacity"
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </a>
                    </div>
                    <a href="tel:+2349069212785" className="text-text-muted hover:text-brand-primary transition-colors">+234 906 921 2785</a>
                    <div className="flex items-center gap-2">
                      <a href="tel:+2348036574935" className="text-text-muted hover:text-brand-primary transition-colors">+234 803 657 4935</a>
                      <a
                        href="https://wa.me/2348036574935"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat on WhatsApp"
                        className="opacity-80 hover:opacity-100 transition-opacity"
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </a>
                    </div>
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
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary border px-4 py-2"
                    placeholder="+234 800 000 0000"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
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

                {submissionError && (
                  <p className="text-red-500 text-center text-sm mb-4">
                    {submissionError}
                  </p>
                )}

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
