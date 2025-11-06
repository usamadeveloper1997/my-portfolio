"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2016 - 2018",
    gpa: "3.9/4.0",
    description:
      "Specialized in Artificial Intelligence and Machine Learning. Thesis on 'Optimizing Neural Network Architectures for Real-time Applications'.",
    achievements: [
      "Dean's List for Academic Excellence",
      "Graduate Research Assistant",
      "Published 2 papers in IEEE conferences",
    ],
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "University of California, Berkeley",
    location: "Berkeley, CA",
    period: "2012 - 2016",
    gpa: "3.8/4.0",
    description:
      "Comprehensive study of software development, algorithms, and computer systems. Active member of computer science club.",
    achievements: [
      "Summa Cum Laude",
      "Outstanding Student Award 2016",
      "Captain of Programming Competition Team",
    ],
  },
];

const certifications = [
  {
    title: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    date: "2023",
    icon: Trophy,
  },
  {
    title: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2023",
    icon: Award,
  },
  {
    title: "Meta Frontend Developer Professional Certificate",
    issuer: "Meta (Facebook)",
    date: "2022",
    icon: Award,
  },
  {
    title: "MongoDB Certified Developer Associate",
    issuer: "MongoDB University",
    date: "2022",
    icon: Award,
  },
];

const courses = [
  "Advanced React Patterns",
  "System Design & Architecture",
  "Kubernetes Mastery",
  "Machine Learning Specialization",
  "Blockchain Fundamentals",
  "Cybersecurity Essentials",
];

export default function Education() {
  return (
    <section id="education" className="section-container">
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
            Academic Background
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-[family-name:var(--font-orbitron)]">
            Education & <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        {/* Formal Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary-400" />
            Formal Education
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 sm:p-8 card-hover"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold gradient-text-primary mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-lg font-semibold text-foreground-secondary">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-foreground-secondary">
                      {edu.location} • {edu.period}
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <span className="px-4 py-2 rounded-full glass border border-primary-500/30 text-sm font-bold text-primary-400">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>

                <p className="text-foreground-secondary mb-4">{edu.description}</p>

                <div>
                  <h5 className="font-semibold mb-2">Achievements:</h5>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-foreground-secondary text-sm"
                      >
                        <span className="text-primary-400 mt-1">▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Award className="w-6 h-6 text-primary-400" />
            Professional Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="glass-card p-6 card-hover text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-8 h-8 text-primary-400" />
                </div>
                <h4 className="font-semibold mb-2 text-sm">{cert.title}</h4>
                <p className="text-xs text-foreground-secondary mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-primary-400 font-semibold">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Online Courses & Training */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary-400" />
            Continuous Learning
          </h3>
          <div className="glass-card p-8">
            <p className="text-foreground-secondary mb-6">
              Completed specialized online courses and training programs from platforms
              like Coursera, Udemy, and Pluralsight:
            </p>
            <div className="flex flex-wrap gap-3">
              {courses.map((course, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 rounded-full glass border border-primary-500/30 text-sm font-medium text-primary-400"
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}