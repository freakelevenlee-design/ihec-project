import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Globe, Users, Award, Leaf } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const services = [
    {
      icon: <Zap size={32} className="text-ihec-green" />,
      title: "Technology R&D",
      description: "Pioneering hydrogen production, storage, and fuel cell technologies",
    },
    {
      icon: <TrendingUp size={32} className="text-ihec-green" />,
      title: "Application Demonstration",
      description: "Real-world hydrogen energy deployment across multiple sectors",
    },
    {
      icon: <Users size={32} className="text-ihec-green" />,
      title: "Capacity Building",
      description: "Training and support for developing hydrogen energy ecosystems",
    },
    {
      icon: <Globe size={32} className="text-ihec-green" />,
      title: "International Cooperation",
      description: "Building global partnerships and cross-border networks",
    },
    {
      icon: <Award size={32} className="text-ihec-green" />,
      title: "Policy & Research",
      description: "Strategic insights and consulting on hydrogen energy policy",
    },
    {
      icon: <Leaf size={32} className="text-ihec-green" />,
      title: "Knowledge Dissemination",
      description: "Industry reports, research papers, and educational resources",
    },
  ];

  const stats = [
    { number: "3+", label: "Test Platforms", link: "/projects" },
    { number: "20+", label: "Key Technologies", link: "/services" },
    { number: "10+", label: "Demonstration Projects", link: "/projects" },
    { number: "300+", label: "Global Partners", link: "/resources" },
  ];

  const news = [
    {
      date: "Mar 15, 2026",
      category: "Innovation",
      title: "IHEC Innovation Competition Opens Global Submissions",
      image: "🌍",
    },
    {
      date: "Mar 8, 2026",
      category: "Project",
      title: "Baotou Green Hydrogen Project Reaches Major Milestone",
      image: "🏗️",
    },
    {
      date: "Mar 1, 2026",
      category: "Event",
      title: "2025 International Hydrogen Energy Forum Concludes",
      image: "🎤",
    },
    {
      date: "Feb 22, 2026",
      category: "Partnership",
      title: "IHEC Partners with European Green Hydrogen Initiative",
      image: "🤝",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Stats Section */}
      <section className="bg-light-gray section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-2 text-center mb-12 text-ihec-blue"
          >
            Our Impact at a Glance
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Link to={stat.link}>
                  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer text-center">
                    <div className="text-4xl font-bold text-ihec-blue mb-2">{stat.number}</div>
                    <p className="text-neutral-gray font-medium">{stat.label}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center mb-12"
          >
            <h2 className="heading-2 text-ihec-blue">Latest Updates</h2>
            <Link to="/news" className="btn-ghost text-sm">
              View All News →
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {news.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <div className="bg-light-gray rounded-lg overflow-hidden hover:shadow-lg transition card-hover">
                  <div className="h-32 bg-gradient-to-br from-ihec-blue/10 to-ihec-green/10 flex items-center justify-center text-4xl">
                    {item.image}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-ihec-green uppercase">{item.category}</span>
                      <span className="text-xs text-neutral-gray">{item.date}</span>
                    </div>
                    <h3 className="heading-4 text-neutral-gray mb-3 line-clamp-2">{item.title}</h3>
                    <a href="/news" className="text-ihec-blue font-medium text-sm hover:text-ihec-blue-dark">
                      Read More →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-light-gray section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-ihec-blue mb-4">Our Core Services</h2>
            <p className="text-neutral-gray max-w-2xl mx-auto">
              Comprehensive solutions for hydrogen energy innovation, development, and commercialization
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition card-hover">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="heading-4 text-neutral-gray mb-3">{service.title}</h3>
                  <p className="text-neutral-gray mb-6">{service.description}</p>
                  <Link to="/services" className="text-ihec-blue font-medium hover:text-ihec-blue-dark">
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ihec-blue section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 text-white mb-4">Ready to Partner With Us?</h2>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
              Join our global network of hydrogen energy innovators and organizations
            </p>
            <Link to="/contact" className="inline-block bg-white text-ihec-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
