"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/alexrivera", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/alexrivera", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/alexrivera", label: "Twitter" },
  { icon: Mail, href: "mailto:alex@rivera.dev", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 glass mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold font-[family-name:var(--font-orbitron)] gradient-text mb-4">
              Alex Rivera
            </h3>
            <p className="text-foreground-secondary text-sm">
              Crafting exceptional digital experiences with cutting-edge technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Projects", "Experience", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 dark:text-foreground-secondary hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg glass glass-hover transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-primary-400" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10 dark:border-white/10 border-gray-200 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600 dark:text-foreground-secondary"
        >
          <p className="flex items-center">
            © {currentYear} Alex Rivera. Made with{" "}
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" /> and Next.js
          </p>
          <p className="mt-4 sm:mt-0">
            Designed & Developed by Alex Rivera
          </p>
        </motion.div>
      </div>
    </footer>
  );
}