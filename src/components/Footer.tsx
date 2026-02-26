import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-gray text-white mt-20">
      <div className="container-custom section-padding-sm py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About IHEC */}
          <div>
            <h3 className="heading-4 text-white mb-4">About IHEC</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition">
                  Our Mission & Vision
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Leadership Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="heading-4 text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white transition">
                  News & Events
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="heading-4 text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Mail size={18} className="text-ihec-green mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">IHEC@hycentre.org.cn</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={18} className="text-ihec-green mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+86 10-82355885</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-ihec-green mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    1st Floor, Building 7, DongSheng International Science Park
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Guiding Organizations */}
          <div>
            <h3 className="heading-4 text-white mb-4">Guiding Organizations</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">UNIDO</li>
              <li className="text-gray-300">CICETE</li>
              <li className="text-gray-300">BEIT</li>
              <li className="text-gray-300">TIDRI</li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              <p>&copy; {currentYear} International Hydrogen Energy Centre. All rights reserved.</p>
            </div>

            {/* Links */}
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                Terms of Use
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition">
                中文版本
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-300 hover:text-ihec-green transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-ihec-green transition"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 md:hidden">
        <Link
          to="/contact"
          className="btn-primary rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
          title="Get in touch"
        >
          <Mail size={24} />
        </Link>
      </div>
    </footer>
  );
}
