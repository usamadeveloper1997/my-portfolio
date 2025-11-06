"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard. Built with Next.js, Stripe, and MongoDB.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com/alexrivera/ecommerce",
    demo: "https://ecommerce-demo.rivera.dev",
    highlights: [
      "Processed $100K+ in transactions",
      "5000+ active users",
      "99.9% uptime",
    ],
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description:
      "Real-time analytics dashboard with AI-driven insights and predictive analytics. Features interactive charts, data visualization, and automated reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "Python", "TensorFlow", "D3.js", "FastAPI"],
    github: "https://github.com/alexrivera/analytics-ai",
    demo: "https://analytics.rivera.dev",
    highlights: [
      "95% prediction accuracy",
      "Real-time data processing",
      "Custom AI models",
    ],
  },
  {
    title: "Social Media Management Tool",
    description:
      "Comprehensive social media management platform for scheduling posts, analyzing engagement, and managing multiple accounts across platforms.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Redis", "OAuth"],
    github: "https://github.com/alexrivera/social-manager",
    demo: "https://social.rivera.dev",
    highlights: [
      "10K+ scheduled posts",
      "Multi-platform support",
      "Advanced analytics",
    ],
  },
  {
    title: "Video Streaming Platform",
    description:
      "Netflix-like streaming platform with video upload, transcoding, adaptive bitrate streaming, and user subscriptions.",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop",
    tags: ["React", "AWS S3", "Lambda", "CloudFront", "DynamoDB"],
    github: "https://github.com/alexrivera/video-platform",
    demo: "https://stream.rivera.dev",
    highlights: [
      "1M+ video views",
      "Adaptive streaming",
      "CDN integration",
    ],
  },
  {
    title: "Project Management System",
    description:
      "Agile project management tool with Kanban boards, sprint planning, time tracking, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Node.js", "Socket.io", "MongoDB", "JWT"],
    github: "https://github.com/alexrivera/project-mgmt",
    demo: "https://projects.rivera.dev",
    highlights: [
      "Real-time updates",
      "200+ teams using",
      "Drag-and-drop UI",
    ],
  },
  {
    title: "Healthcare Appointment System",
    description:
      "Medical appointment booking system with patient records, doctor scheduling, telemedicine integration, and automated reminders.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebRTC"],
    github: "https://github.com/alexrivera/healthcare-system",
    demo: "https://health.rivera.dev",
    highlights: [
      "HIPAA compliant",
      "5000+ appointments",
      "Video consultations",
    ],
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="section-container">
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
            Featured Work
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-[family-name:var(--font-orbitron)]">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Showcase of recent work and creative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group glass-card overflow-hidden card-hover"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                
                {/* Overlay Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80 backdrop-blur-sm"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass glass-hover"
                  >
                    <Github className="w-6 h-6 text-primary-400" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass glass-hover"
                  >
                    <ExternalLink className="w-6 h-6 text-primary-400" />
                  </a>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 gradient-text-primary">
                  {project.title}
                </h3>
                <p className="text-foreground-secondary text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-foreground-secondary text-xs"
                      >
                        <ArrowRight className="w-3 h-3 text-primary-400 mt-0.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded text-xs font-medium glass border border-primary-500/20 text-primary-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/alexrivera"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-ghost"
          >
            View More on GitHub
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}