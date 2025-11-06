"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "alex@rivera.dev",
    href: "mailto:alex@rivera.dev",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "https://maps.google.com/?q=San+Francisco,CA",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/alexrivera",
    color: "hover:text-white",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/alexrivera",
    color: "hover:text-blue-400",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/alexrivera",
    color: "hover:text-sky-400",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/alexrivera",
    color: "hover:text-pink-400",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-container">
      <div className="content-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary-400 border border-primary-500/30 mb-4"
          >
            Get in Touch
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-[family-name:var(--font-orbitron)]">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300 bg-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300 bg-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300 bg-transparent"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300 resize-none bg-transparent"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full btn-primary flex items-center justify-center gap-2 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-center"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-center"
                  >
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-lg glass glass-hover"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20">
                      <item.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground-secondary">{item.label}</p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className={`flex flex-col items-center justify-center gap-3 p-6 rounded-lg glass glass-hover transition-colors duration-300 ${social.color}`}
                  >
                    <social.icon className="w-8 h-8" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6 text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/50 text-green-400 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-semibold">Available for new projects</span>
              </div>
              <p className="text-foreground-secondary text-sm">
                Currently accepting freelance projects and full-time opportunities
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Download CV */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="glass-card p-8 inline-block">
            <h3 className="text-2xl font-bold mb-4">Download My Resume</h3>
            <p className="text-foreground-secondary mb-6">
              Get a detailed overview of my experience and qualifications
            </p>
            <a
              href="/resume.pdf"
              download
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Download CV (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}