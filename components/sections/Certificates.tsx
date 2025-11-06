"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ExternalLink, Calendar, Building } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const certificates = [
  {
    title: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    date: "March 2023",
    credentialId: "AWS-PSA-12345",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    verifyUrl: "https://aws.amazon.com/verify",
    description: "Advanced knowledge of AWS services and architecture design patterns.",
  },
  {
    title: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "January 2023",
    credentialId: "GCP-PCA-67890",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
    verifyUrl: "https://cloud.google.com/verify",
    description: "Expertise in designing and managing Google Cloud solutions.",
  },
  {
    title: "Meta Frontend Developer Professional Certificate",
    issuer: "Meta (Facebook)",
    date: "November 2022",
    credentialId: "META-FE-11223",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    verifyUrl: "https://coursera.org/verify",
    description: "Comprehensive training in modern frontend development practices.",
  },
  {
    title: "MongoDB Certified Developer Associate",
    issuer: "MongoDB University",
    date: "September 2022",
    credentialId: "MDB-DEV-44556",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop",
    verifyUrl: "https://university.mongodb.com/verify",
    description: "Proficiency in MongoDB database design and development.",
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "July 2022",
    credentialId: "CKA-77889",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
    verifyUrl: "https://cncf.io/verify",
    description: "Demonstrated ability to design, deploy, and manage Kubernetes clusters.",
  },
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "May 2022",
    credentialId: "CEH-99001",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop",
    verifyUrl: "https://eccouncil.org/verify",
    description: "Knowledge of security vulnerabilities and penetration testing.",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="section-container">
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
            Professional Recognition
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-[family-name:var(--font-orbitron)]">
            Certificates & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Industry-recognized certifications and achievements
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCert(cert)}
              className="glass-card overflow-hidden cursor-pointer card-hover group"
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
                <div className="absolute top-4 right-4">
                  <div className="p-2 rounded-full glass">
                    <Award className="w-6 h-6 text-primary-400" />
                  </div>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-foreground-secondary mb-2 flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  {cert.issuer}
                </p>
                <p className="text-sm text-primary-400 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20">
                      <Award className="w-8 h-8 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold gradient-text-primary">
                        {selectedCert.title}
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-lg glass glass-hover"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Certificate Image */}
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Certificate Details */}
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-foreground-secondary mb-1">Issuer</p>
                    <p className="font-semibold">{selectedCert.issuer}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground-secondary mb-1">Issue Date</p>
                    <p className="font-semibold">{selectedCert.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground-secondary mb-1">
                      Credential ID
                    </p>
                    <p className="font-semibold font-mono text-primary-400">
                      {selectedCert.credentialId}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground-secondary mb-1">Description</p>
                    <p className="text-foreground-secondary">
                      {selectedCert.description}
                    </p>
                  </div>
                </div>

                {/* Verify Button */}
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center gap-2 mt-6"
                >
                  Verify Certificate
                  <ExternalLink className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}