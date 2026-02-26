import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? '中文' : 'EN');
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-ihec-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">IHEC</span>
          </div>
          <div className="hidden md:block">
            <h1 className="text-ihec-blue font-bold text-lg leading-tight">IHEC</h1>
            <p className="text-xs text-neutral-gray">International Hydrogen Energy Centre</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/about" className="text-neutral-gray hover:text-ihec-blue font-medium transition">
            About
          </Link>
          <Link to="/services" className="text-neutral-gray hover:text-ihec-blue font-medium transition">
            Services
          </Link>
          <Link to="/projects" className="text-neutral-gray hover:text-ihec-blue font-medium transition">
            Projects
          </Link>
          <Link to="/news" className="text-neutral-gray hover:text-ihec-blue font-medium transition">
            News & Events
          </Link>
          <Link to="/resources" className="text-neutral-gray hover:text-ihec-blue font-medium transition">
            Resources
          </Link>
          <Link to="/contact" className="text-neutral-gray hover:text-ihec-blue font-medium transition">
            Contact
          </Link>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-neutral-gray hover:text-ihec-blue font-medium transition"
          >
            <Globe size={20} />
            <span className="hidden sm:inline text-sm">{language}</span>
          </button>

          {/* CTA Button - Desktop */}
          <a href="#contact" className="hidden md:block btn-primary text-sm">
            Get Involved
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-neutral-gray hover:text-ihec-blue transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-light-gray border-t border-gray-200 animate-slide-in-down">
          <nav className="container-custom py-4 flex flex-col gap-3">
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-neutral-gray hover:text-ihec-blue font-medium py-2 transition"
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className="text-neutral-gray hover:text-ihec-blue font-medium py-2 transition"
            >
              Services
            </Link>
            <Link
              to="/projects"
              onClick={() => setIsMenuOpen(false)}
              className="text-neutral-gray hover:text-ihec-blue font-medium py-2 transition"
            >
              Projects
            </Link>
            <Link
              to="/news"
              onClick={() => setIsMenuOpen(false)}
              className="text-neutral-gray hover:text-ihec-blue font-medium py-2 transition"
            >
              News & Events
            </Link>
            <Link
              to="/resources"
              onClick={() => setIsMenuOpen(false)}
              className="text-neutral-gray hover:text-ihec-blue font-medium py-2 transition"
            >
              Resources
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-neutral-gray hover:text-ihec-blue font-medium py-2 transition"
            >
              Contact
            </Link>
            <a href="#contact" className="btn-primary text-center text-sm mt-2">
              Get Involved
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
