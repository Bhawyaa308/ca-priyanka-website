import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import React from "react";
const navLinks = [
  { name: "Home", href: "/#home", isHash: true },
  { name: "Services", href: "/#services", isHash: true },
  { name: "Reviews", href: "/#reviews", isHash: true },
  { name: "Contact", href: "/#contact", isHash: true },
  { name: "Gallery", href: "/gallery", isHash: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (href: string, isHash: boolean) => {
    setMobileOpen(false);
    if (isHash && isHome) {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D4F5E] shadow-[0_1px_3px_rgba(0,0,0,0.15)]"
          : "bg-[#0D4F5E]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
              <span className="text-white font-heading text-lg font-bold">
                PA
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-lg font-semibold text-white tracking-wide">
                CA Priyanka
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.isHash ? (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href, link.isHash)}
                  className="font-nav text-[13px] font-medium tracking-widest uppercase text-white/80 hover:text-white px-4 py-2 transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-3/4" />
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-nav text-[13px] font-medium tracking-widest uppercase text-white/80 hover:text-white px-4 py-2 transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-3/4" />
                </Link>
              ),
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""
              }`}
            />
            <span
              className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0D4F5E] backdrop-blur-sm px-6 py-6 space-y-1">
          {navLinks.map((link) =>
            link.isHash ? (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href, link.isHash)}
                className="block w-full text-left font-nav text-sm font-medium tracking-wider uppercase text-white/80 hover:text-white py-3 border-b border-white/15 transition-colors"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="block font-nav text-sm font-medium tracking-wider uppercase text-white/80 hover:text-white py-3 border-b border-white/15 transition-colors"
              >
                {link.name}
              </Link>
            ),
          )}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("/#contact", true);
            }}
            className="inline-block mt-4 btn-primary text-center w-full"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </nav>
  );
}
