"use client";

import { motion } from "framer-motion";
import { Code, Database, Cloud, Wrench, Palette, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript / JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Redux / Zustand", level: 85 },
    ],
  },
  {
    title: "Backend Development",
    icon: Terminal,
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python / Django", level: 80 },
      { name: "REST / GraphQL APIs", level: 90 },
      { name: "Authentication & Security", level: 85 },
      { name: "Microservices", level: 80 },
    ],
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Firebase", level: 85 },
      { name: "Prisma ORM", level: 85 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS (EC2, S3, Lambda)", level: 85 },
      { name: "Docker / Kubernetes", level: 80 },
      { name: "CI/CD (GitHub Actions)", level: 85 },
      { name: "Vercel / Netlify", level: 90 },
      { name: "Nginx", level: 75 },
    ],
  },
  {
    title: "Tools & Methodologies",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Agile / Scrum", level: 90 },
      { name: "Jest / Testing Library", level: 85 },
      { name: "Webpack / Vite", level: 80 },
      { name: "Postman / API Testing", level: 90 },
    ],
  },
  {
    title: "Design & UX",
    icon: Palette,
    skills: [
      { name: "Figma / Adobe XD", level: 80 },
      { name: "Responsive Design", level: 95 },
      { name: "UI/UX Principles", level: 85 },
      { name: "Animation (Framer Motion)", level: 85 },
      { name: "Accessibility (a11y)", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container">
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
            Technical Expertise
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-[family-name:var(--font-orbitron)]">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Comprehensive toolkit for building modern applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20">
                  <category.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-primary-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 1,
                          ease: "easeOut",
                        }}
                        className="skill-progress"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "WebSockets",
              "Socket.io",
              "Stripe",
              "OAuth 2.0",
              "SEO",
              "PWA",
              "WebRTC",
              "Three.js",
              "D3.js",
              "Electron",
              "Flutter",
              "WordPress",
              "Shopify",
              "Sanity CMS",
              "Contentful",
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.03 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full glass border border-primary-500/30 text-sm font-medium text-primary-400 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}