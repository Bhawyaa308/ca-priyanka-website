import React from "react";
import heroImage from "../assets/mamiji_pic.png";
export default function About() {
  const highlights = [
    {
      icon: "fa-solid fa-certificate",
      label: "Chartered Accountant",
      desc: "Qualified from ICAI",
    },
    {
      icon: "fa-solid fa-clock",
      label: "10 Years Experience",
      desc: "Decade of expertise",
    },
    {
      icon: "fa-solid fa-receipt",
      label: "Taxation Expert",
      desc: "Direct & Indirect Tax",
    },
    {
      icon: "fa-solid fa-file-shield",
      label: "GST Advisory",
      desc: "Registration to Filing",
    },
    {
      icon: "fa-solid fa-landmark",
      label: "MCA Compliance",
      desc: "Full ROC Support",
    },
    {
      icon: "fa-solid fa-handshake",
      label: "Business Consultancy",
      desc: "Growth-Focused Advisory",
    },
  ];

  return (
    <section id="about" className="bg-ivory py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Image Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-3 border border-beige/40 rounded-xl hidden lg:block" />
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-md">
                <img
                  src={heroImage}
                  alt="CA Priyanka Aggarwal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <span className="font-nav text-[11px] font-semibold tracking-[0.3em] uppercase text-navy mb-4 block">
              About
            </span>
            <h2 className="section-title mb-8">
              CA Priyanka
              <br />
              <span className="text-navy">Aggarwal</span>
            </h2>

            <div className="space-y-5 mb-10">
              <p className="font-body text-base text-text-body leading-relaxed">
                As a dedicated Chartered Accountant, I bring over a decade of
                experience in navigating the complexities of Indian taxation and
                corporate compliance. My practice is built on precision,
                transparency, and a genuine commitment to my clients' financial
                wellbeing.
              </p>
              <p className="font-body text-base text-text-body leading-relaxed">
                From individual income tax filings to comprehensive GST advisory
                and MCA compliance, I provide end-to-end solutions that keep
                your financial operations running smoothly while minimizing
                regulatory burden.
              </p>
              <p className="font-body text-base text-text-body leading-relaxed">
                Based in Noida, I serve startups, SMEs, and established
                enterprises across India, offering personalized attention that
                larger firms cannot match.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {highlights.map((item) => (
                <div key={item.label} className="group">
                  <div className="w-10 h-10 rounded-lg bg-beige/40 flex items-center justify-center mb-3 group-hover:bg-beige/60 transition-colors">
                    <i className={`${item.icon} text-navy text-sm`}></i>
                  </div>
                  <p className="font-nav text-xs font-semibold text-navy tracking-wide">
                    {item.label}
                  </p>
                  <p className="font-body text-[11px] text-text-body mt-0.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
