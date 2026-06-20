import { Link } from "react-router-dom";
import React from "react";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center">
                <span className="font-heading text-ivory text-lg font-bold">
                  PA
                </span>
              </div>
              <div>
                <span className="font-heading text-lg font-semibold tracking-wide text-ivory block">
                  CA Priyanka Aggarwal
                </span>
              </div>
            </div>
            <p className="font-body text-sm text-ivory/50 leading-relaxed mb-6 max-w-xs">
              Taxation, Compliance & Business Advisory — providing clear,
              practical financial solutions for individuals and businesses.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/ca-priyanka-garg-1263b59a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-ivory/10 flex items-center justify-center text-ivory/60 hover:bg-ivory/20 hover:text-ivory transition-all duration-300"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in text-sm"></i>
              </a>
              <a
                href="https://www.google.com/search?q=ca+priyanka+aggarwal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-ivory/10 flex items-center justify-center text-ivory/60 hover:bg-ivory/20 hover:text-ivory transition-all duration-300"
                aria-label="Google"
              >
                <i className="fa-brands fa-google text-sm"></i>
              </a>
              <a
                href="https://wa.me/919671518785"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-ivory/10 flex items-center justify-center text-ivory/60 hover:bg-ivory/20 hover:text-ivory transition-all duration-300"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp text-sm"></i>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-nav text-xs font-semibold tracking-[0.2em] uppercase text-ivory/40 mb-6">
              Navigation
            </h4>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block font-body text-sm text-ivory/60 hover:text-ivory transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block font-body text-sm text-ivory/60 hover:text-ivory transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="block font-body text-sm text-ivory/60 hover:text-ivory transition-colors"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block font-body text-sm text-ivory/60 hover:text-ivory transition-colors"
              >
                Contact
              </button>
              <Link
                to="/gallery"
                className="block font-body text-sm text-ivory/60 hover:text-ivory transition-colors"
              >
                Gallery
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-nav text-xs font-semibold tracking-[0.2em] uppercase text-ivory/40 mb-6">
              Office
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <i className="fa-solid fa-location-dot text-ivory/40 text-xs mt-1"></i>
                <p className="font-body text-sm text-ivory/60">
                  Gardenia Glory, Sector 46, Noida
                  <br />
                  Uttar Pradesh, India
                </p>
              </div>
              <div className="flex gap-3">
                <i className="fa-solid fa-phone text-ivory/40 text-xs mt-1"></i>
                <p className="font-body text-sm text-ivory/60">
                  +91 9671518785
                </p>
              </div>
              <div className="flex gap-3">
                <i className="fa-solid fa-envelope text-ivory/40 text-xs mt-1"></i>
                <p className="font-body text-sm text-ivory/60">
                  priya2u.garg@gmail.com
                </p>
              </div>
              <div className="flex gap-3">
                <i className="fa-solid fa-clock text-ivory/40 text-xs mt-1"></i>
                <p className="font-body text-sm text-ivory/60">
                  Mon — Sun: 9:00 AM — 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-ivory/30">
            &copy; {currentYear} CA Priyanka Aggarwal. All rights reserved.
          </p>
          <p className="font-nav text-[10px] tracking-[0.2em] uppercase text-ivory/20">
            Growth-Focused Compliance
          </p>
        </div>
      </div>
    </footer>
  );
}
