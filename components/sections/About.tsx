"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users, Zap, Coffee, MapPin, Mail, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code following best practices.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Agile methodology ensuring rapid development and deployment cycles.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborative approach with excellent communication and leadership skills.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed, efficiency, and exceptional user experience.",
    color: "from-yellow-500 to-orange-500",
  },
];

const quickInfo = [
  { icon: Briefcase, label: "Name", value: "Alex Rivera" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA" },
  { icon: Code2, label: "Experience", value: "5+ Years" },
  { icon: Mail, label: "Email", value: "alex@rivera.dev" },
];

export default function About() {
  return (
    <section id="about" className="section-container bg-gray-50/50 dark:bg-transparent">
      <div className="content-wrapper">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 text-sm font-medium text-primary-600 dark:text-primary-400 backdrop-blur-sm"
          >
            Get to know me
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-orbitron)] text-gray-900 dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer crafting digital excellence
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main Bio Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="glass-card p-6 sm:p-8 border border-gray-200 dark:border-white/10 hover:shadow-xl dark:hover:shadow-primary-500/10 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 dark:from-primary-500/10 dark:to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <h3 className="text-2xl sm:text-3xl font-bold gradient-text-primary mb-4 relative z-10">
                Full Stack Developer & Solution Architect
              </h3>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
                <p>
                  With over 5 years of experience in web development, I specialize in
                  building scalable, high-performance applications using modern
                  technologies. My journey in tech started with a curiosity about how
                  things work, which evolved into a passion for creating innovative
                  solutions.
                </p>
                <p>
                  I thrive in dynamic environments where I can leverage my expertise in
                  React, Next.js, Node.js, and cloud platforms to deliver exceptional
                  digital experiences. My approach combines technical excellence with a
                  deep understanding of user needs and business goals.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies,
                  contributing to open-source projects, or sharing knowledge through
                  technical blogs and mentoring aspiring developers.
                </p>
              </div>
            </motion.div>

            {/* Quick Info Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {quickInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-4 border border-gray-200 dark:border-white/10 group hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 group-hover:from-primary-500/20 group-hover:to-secondary-500/20 dark:group-hover:from-primary-500/30 dark:group-hover:to-secondary-500/30 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide">{item.label}</p>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm truncate">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card p-6 border border-gray-200 dark:border-white/10 group hover:shadow-xl dark:hover:shadow-primary-500/10 transition-all duration-300 cursor-pointer"
              >
                {/* Icon with gradient background */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} p-0.5 mb-4 group-hover:shadow-lg transition-all duration-300`}
                >
                  <div className="w-full h-full rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-gray-900 dark:text-white" />
                  </div>
                </motion.div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 flex items-center gap-2 text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium">Learn more</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Fun Fact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card p-6 sm:p-8 border border-gray-200 dark:border-white/10 overflow-hidden group"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center sm:text-left">
              <motion.div
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-5xl"
              >
                <Coffee className="w-16 h-16 text-primary-600 dark:text-primary-400" />
              </motion.div>
              
              <div className="flex-1">
                <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                  <span className="font-bold text-primary-600 dark:text-primary-400">Fun Fact:</span>{" "}
                  I've written over{" "}
                  <span className="font-bold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">
                    100,000 lines
                  </span>{" "}
                  of code and consumed approximately{" "}
                  <span className="font-bold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">
                    2,000 cups
                  </span>{" "}
                  of coffee in the process!
                </p>
              </div>

              {/* Animated coffee steam */}
              <div className="hidden lg:block">
                <motion.div
                  animate={{ y: [-5, -15, -5], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-4xl"
                >
                  ☕
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}