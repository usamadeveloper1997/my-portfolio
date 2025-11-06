"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "15+", label: "Happy Clients" },
  ];

  return (
    <section id="home" className="section-container min-h-screen relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary-500/20 dark:bg-primary-500/20 bg-primary-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary-500/20 dark:bg-secondary-500/20 bg-secondary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="content-wrapper relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="flex-1 text-center lg:text-left space-y-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 text-sm font-medium text-primary-500 dark:text-primary-400 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Welcome to my portfolio</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-orbitron)] text-gray-900 dark:text-white leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text inline-block">
                  Alex Rivera
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300"
            >
              Full Stack Developer
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Crafting exceptional digital experiences with modern technologies.
              Specialized in React, Next.js, Node.js, and cloud architecture.
              Turning ideas into scalable, high-performance applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Mail className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Get in Touch</span>
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 glass hover:bg-white/10 dark:hover:bg-white/10 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 lg:pt-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="glass-card p-4 sm:p-6 text-center hover:shadow-glow-md transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text-primary mb-1 sm:mb-2 relative z-10">
                      {stat.number}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 relative z-10">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex-shrink-0 lg:order-last order-first"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Outer glow rings */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-0 bg-primary-500/30 dark:bg-primary-500/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute inset-0 bg-secondary-500/20 dark:bg-secondary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
              </div>
              
              {/* Image container with gradient border */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-500 rounded-full animate-spin-slow" />
                <div className="absolute inset-1 rounded-full overflow-hidden glass border-4 border-white/10 dark:border-white/10 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 backdrop-blur-xl">
                  <Image
                    src="https://ui-avatars.com/api/?name=Alex+Rivera&size=512&background=06b6d4&color=fff&bold=true"
                    alt="Alex Rivera"
                    fill
                    className="object-cover scale-110"
                    priority
                  />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-4 -right-4 z-20"
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="px-4 py-2 glass-card border border-green-500/50 bg-green-500/10 text-xs sm:text-sm font-semibold text-green-600 dark:text-green-400 shadow-lg shadow-green-500/20 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Available for hire
                </motion.div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-primary-500/30 dark:border-primary-500/20 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-6 -right-6 w-20 h-20 border-4 border-secondary-500/30 dark:border-secondary-500/20 rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 cursor-pointer group"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 group-hover:border-primary-500 dark:group-hover:border-primary-400 flex items-start justify-center p-2 transition-colors duration-300">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-gray-600 dark:bg-gray-400 group-hover:bg-primary-500 dark:group-hover:bg-primary-400 transition-colors duration-300"
              />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}