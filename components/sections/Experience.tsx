"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Leading development of enterprise-scale applications using React, Next.js, and AWS. Architected microservices infrastructure serving 1M+ users.",
    achievements: [
      "Reduced application load time by 60% through optimization",
      "Led team of 5 developers in agile environment",
      "Implemented CI/CD pipeline improving deployment efficiency by 80%",
    ],
    technologies: ["React", "Next.js", "Node.js", "AWS", "TypeScript", "Docker"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Inc",
    location: "Remote",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple client-facing applications. Collaborated with cross-functional teams to deliver high-quality solutions.",
    achievements: [
      "Built 15+ production-ready applications",
      "Mentored junior developers in best practices",
      "Improved code quality by implementing automated testing",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "GraphQL"],
  },
  {
    title: "Frontend Developer",
    company: "StartUp Ventures",
    location: "New York, NY",
    period: "2019 - 2020",
    description:
      "Focused on creating responsive and accessible user interfaces. Worked closely with designers to implement pixel-perfect designs.",
    achievements: [
      "Developed component library used across 10+ projects",
      "Achieved 95+ Lighthouse scores on all projects",
      "Reduced bundle size by 40% through optimization",
    ],
    technologies: ["React", "JavaScript", "SASS", "Webpack", "REST APIs"],
  },
  {
    title: "Junior Web Developer",
    company: "Web Solutions Pro",
    location: "Austin, TX",
    period: "2018 - 2019",
    description:
      "Started my professional journey building websites and learning modern web development practices. Contributed to various client projects.",
    achievements: [
      "Completed 20+ client websites successfully",
      "Learned and applied Agile/Scrum methodologies",
      "Gained proficiency in responsive design",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "WordPress"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-container">
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
            My Journey
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-[family-name:var(--font-orbitron)]">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Professional journey and achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 via-secondary-500 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 sm:p-8 card-hover"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20">
                          <Briefcase className="w-6 h-6 text-primary-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold gradient-text-primary">
                            {exp.title}
                          </h3>
                          <p className="text-foreground-secondary">{exp.company}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-foreground-secondary mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-foreground-secondary mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
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

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs font-medium glass border border-primary-500/30 text-primary-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex items-center justify-center w-12 flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="w-4 h-4 rounded-full bg-primary-500 shadow-glow-md relative"
                  >
                    <div className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-75" />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}