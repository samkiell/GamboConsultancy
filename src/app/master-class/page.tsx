"use client";

import { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";

type Inputs = {
  fullName: string;
  organization: string;
  state: string;
  county: string;
  phone: string;
  email: string;
  age: string;
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function MasterClassPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openModal = () => {
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setIsSubmitted(false);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setSubmissionError(null);
    try {
      const response = await fetch("/api/masterclass-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to register. Please try again.");
      }

      reset();
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      setSubmissionError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
              Gambo Consultancy Master Class 2026
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              A 4-Day Masterclass for Education Stakeholders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Details Section */}
      <Section background="accent">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-primary mb-6">
              About the Masterclass
            </h2>
            <p className="text-lg text-text-muted leading-relaxed max-w-3xl mx-auto">
              The G-Consultancy&apos;s 4-Days Masterclass for Education
              stakeholders is here. It is for students at all levels, teachers,
              parents, school leaders and government officials.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10 mb-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start">
                <div className="h-10 w-10 bg-brand-accent rounded-lg flex items-center justify-center text-brand-primary shrink-0 mr-4">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-main mb-1">
                    Date
                  </h3>
                  <p className="text-text-muted">
                    Monday 7th to Thursday 10th September, 2026
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-10 w-10 bg-brand-accent rounded-lg flex items-center justify-center text-brand-primary shrink-0 mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-main mb-1">
                    Venue
                  </h3>
                  <p className="text-text-muted">Online</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-10 w-10 bg-brand-accent rounded-lg flex items-center justify-center text-brand-primary shrink-0 mr-4">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-main mb-1">
                    Time
                  </h3>
                  <p className="text-text-muted">8pm daily</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="text-center">
            <Button variant="primary" size="lg" onClick={scrollToForm}>
              Register Now
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Registration Form Section */}
      <Section background="white" id="register">
        <div className="max-w-2xl mx-auto">
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
              Register for the Masterclass
            </h2>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name (surname first)
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary border px-4 py-2"
                      placeholder="e.g. Adekunle Isaac"
                      {...register("fullName", {
                        required: "Full name is required",
                      })}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Organization */}
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name of Organization
                    </label>
                    <input
                      id="organization"
                      type="text"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary border px-4 py-2"
                      placeholder="e.g. Gambo Consultancy"
                      {...register("organization", {
                        required: "Organization name is required",
                      })}
                    />
                    {errors.organization && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.organization.message}
                      </p>
                    )}
                  </div>

                  {/* State & County */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        State
                      </label>
                      <input
                        id="state"
                        type="text"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary border px-4 py-2"
                        placeholder="e.g. Osun"
                        {...register("state", {
                          required: "State is required",
                        })}
                      />
                      {errors.state && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.state.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="county"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        County
                      </label>
                      <input
                        id="county"
                        type="text"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary border px-4 py-2"
                        placeholder="e.g. Ife"
                        {...register("county", {
                          required: "County is required",
                        })}
                      />
                      {errors.county && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.county.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary border px-4 py-2"
                        placeholder="you@example.com"
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
                  </div>

                  {/* Age */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Age
                    </label>
                    <div className="flex flex-col space-y-3">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          value="5-20"
                          className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300"
                          {...register("age", {
                            required: "Please select an age range",
                          })}
                        />
                        <span className="ml-3 text-text-main">5 - 20</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          value="20 and above"
                          className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300"
                          {...register("age", {
                            required: "Please select an age range",
                          })}
                        />
                        <span className="ml-3 text-text-main">
                          20 and above
                        </span>
                      </label>
                    </div>
                    {errors.age && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.age.message}
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
                    {isSubmitting ? "Registering..." : "Register"}
                  </Button>
                </form>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Success Modal */}
      {isSubmitted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Registration successful"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 max-w-md w-full text-center relative"
          >
            <button
              onClick={closeModal}
              aria-label="Close"
              className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 mx-auto">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Registration Successful
            </h3>
            <p className="text-gray-500 mb-6 max-w-sm mx-auto">
              Thank you for registering for the Gambo Consultancy Master Class
              2026. We look forward to seeing you!
            </p>
            <Button variant="primary" className="w-full" onClick={closeModal}>
              Done
            </Button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
