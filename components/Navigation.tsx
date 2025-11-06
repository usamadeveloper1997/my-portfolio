"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-lg py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="#home"
                onClick={() => handleNavClick("#home")}
                className="text-2xl font-bold font-[family-name:var(--font-orbitron)]"
              >
                <span className="gradient-text">AR</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hidden md:flex items-center space-x-1"
            >
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? "text-primary-400"
                      : "text-gray-600 dark:text-foreground-secondary hover:text-gray-900 dark:hover:text-foreground"
                  }`}
                >
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 glass rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              ))}

              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="ml-4 p-2 rounded-lg glass glass-hover transition-all duration-300"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-primary-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-primary-400" />
                  )}
                </button>
              )}
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg glass glass-hover"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-primary-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-primary-400" />
                  )}
                </button>
              )}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg glass glass-hover"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 glass rounded-2xl mx-4 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === link.href.substring(1)
                        ? "bg-primary-500/20 text-primary-400"
                        : "hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-foreground-secondary"
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}