"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Phone, Mail, Award, CheckCircle2, Download, MessageSquare } from "lucide-react";

export default function Portfolio() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium mb-6 border border-blue-800/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for New Opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Mohammed Sadek
          </h1>
          <p className="text-xl md:text-3xl font-medium text-blue-400 mb-6">
            Senior Pharmacist & Healthcare Manager
          </p>
          <p className="max-w-2xl text-gray-400 text-lg mx-auto mb-10 leading-relaxed">
            Highly experienced pharmacy professional with over 25 years of expertise in pharmacy operations, preventive medicine, cold chain management, and clinical pharmacy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              Contact Me
            </a>
            <a href="/cv.pdf" download="Mohammed_Sadek_CV.pdf" className="px-8 py-3 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-700 border border-gray-700 transition-colors flex items-center justify-center gap-2">
              <Download size={18} />
              Download CV
            </a>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-10 border-y border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "25+", label: "Years Experience" },
              { number: "16", label: "Years Community Pharmacy" },
              { number: "10", label: "Years Pharmacy Management" },
              { number: "9", label: "Years Ministry of Health" }
            ].map((stat, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 lg:px-8 max-w-4xl mx-auto" id="experience">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-blue-500" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Professional Experience</h2>
          </div>

          <div className="space-y-12 border-l-2 border-gray-800 ml-4 pl-8 relative">
            
            <div className="relative">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[41px] top-1 border-4 border-gray-950"></div>
              <h3 className="text-xl font-bold text-white">Community Pharmacies</h3>
              <p className="text-blue-400 font-medium mb-3">Various Locations • 16 Years Experience</p>
              <p className="text-gray-400 leading-relaxed">
                Extensive experience in community pharmacy practice across major pharmacies including: 
                <strong className="text-gray-300"> Dr. Khaled Abdel Moneim, Yasser Ibrahim, Dr. Hassan Abdel Wahab, and 24 Pharmacies.</strong> 
                Responsible for patient counseling, dispensing medications, and inventory control.
              </p>
            </div>

            <div className="relative">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[41px] top-1 border-4 border-gray-950"></div>
              <h3 className="text-xl font-bold text-white">Preventive Department - Ministry of Health</h3>
              <p className="text-blue-400 font-medium mb-3">Egyptian Ministry of Health • 9 Years Experience</p>
              <p className="text-gray-400 leading-relaxed">
                Specialized in Cold Chain Management, preservation and sustainability of vaccines and serums. Ensured strict compliance with national health protocols for vaccination storage and distribution.
              </p>
            </div>

            <div className="relative">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[41px] top-1 border-4 border-gray-950"></div>
              <h3 className="text-xl font-bold text-white">Pharmacy Owner & Manager</h3>
              <p className="text-blue-400 font-medium mb-3">Private Business • 10 Years Experience</p>
              <p className="text-gray-400 leading-relaxed">
                Full ownership and complete management of two pharmacies. Handled all aspects of the business including operations, financial management, staff leadership, and patient care.
              </p>
            </div>

            <div className="relative">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[41px] top-1 border-4 border-gray-950"></div>
              <h3 className="text-xl font-bold text-white">Economic Pharmacy</h3>
              <p className="text-blue-400 font-medium mb-3">Fever Hospital • 2 Years Experience</p>
              <p className="text-gray-400 leading-relaxed">
                Managed pharmaceutical needs within a specialized hospital setting, coordinating with medical staff to provide specialized treatments for infectious diseases.
              </p>
            </div>

          </div>
        </motion.div>
      </section>

      {/* Education & Courses */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto bg-gray-900/30 rounded-3xl mb-24" id="education">
        <div className="grid md:grid-cols-2 gap-16">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap className="text-blue-500" size={32} />
              <h2 className="text-3xl font-bold text-white">Education & Courses</h2>
            </div>
            <ul className="space-y-6">
              <li className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                <h4 className="text-lg font-bold text-white">Bachelor of Pharmacy</h4>
                <p className="text-blue-400 text-sm mt-1">Cairo University</p>
              </li>
              <li className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                <h4 className="text-lg font-bold text-white">Clinical Pharmacy Course</h4>
                <p className="text-blue-400 text-sm mt-1">Cairo University</p>
              </li>
              <li className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                <h4 className="text-lg font-bold text-white">Cold Chain & Vaccine Management</h4>
                <p className="text-blue-400 text-sm mt-1">Egyptian Ministry of Health</p>
              </li>
              <li className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                <h4 className="text-lg font-bold text-white">English Language Program</h4>
                <p className="text-blue-400 text-sm mt-1">American University in Cairo (AUC)</p>
              </li>
            </ul>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <div className="flex items-center gap-3 mb-10">
              <Award className="text-blue-500" size={32} />
              <h2 className="text-3xl font-bold text-white">Core Skills</h2>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-12">
              {["Clinical Pharmacy", "Pharmacy Management", "Cold Chain Management", "Vaccines & Serums", "Patient Counseling", "Inventory Control", "Healthcare Operations", "Business Ownership"].map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-blue-900/20 text-blue-300 rounded-full border border-blue-800/30 flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 size={16} className="text-blue-500" />
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mb-6">Languages</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1"><span className="text-gray-300">Arabic</span><span className="text-blue-400 text-sm">Native</span></div>
                <div className="w-full bg-gray-800 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-1"><span className="text-gray-300">English</span><span className="text-blue-400 text-sm">Fluent (AUC Certified)</span></div>
                <div className="w-full bg-gray-800 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between mb-1"><span className="text-gray-300">French</span><span className="text-blue-400 text-sm">Basic</span></div>
                <div className="w-full bg-gray-800 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div></div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 lg:px-8 max-w-5xl mx-auto text-center" id="contact">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Currently open for new opportunities in pharmacy management, clinical roles, and healthcare consultancy. Let's connect.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="tel:+201032725374" className="flex flex-col items-center p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors group">
              <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <h4 className="text-white font-bold mb-1">Phone</h4>
              <p className="text-gray-400 text-sm">+20 10 32725374</p>
            </a>
            
            <a href="https://wa.me/201032725374" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors group">
              <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare size={24} />
              </div>
              <h4 className="text-white font-bold mb-1">WhatsApp</h4>
              <p className="text-gray-400 text-sm">+20 10 32725374</p>
            </a>

            <a href="mailto:mseddiq404@gmail.com" className="flex flex-col items-center p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors group">
              <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <h4 className="text-white font-bold mb-1">Email</h4>
              <p className="text-gray-400 text-sm">mseddiq404@gmail.com</p>
            </a>

            <div className="flex flex-col items-center p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors group">
              <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <h4 className="text-white font-bold mb-1">Location</h4>
              <p className="text-gray-400 text-sm">Zahraa El Maadi, Cairo</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800 mt-12">
        <p>© {new Date().getFullYear()} Mohammed Sadek. All rights reserved.</p>
      </footer>
    </div>
  );
}
