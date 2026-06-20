import React from "react";
const stats = [
  {
    number: "1000+",
    label: "Consultations",
    sublabel: "Completed Successfully",
  },
  { number: "1000+", label: "Tax Filings", sublabel: "Filed & Processed" },
  { number: "100+", label: "Businesses Assisted", sublabel: "Across India" },
  {
    number: "98%",
    label: "Client Satisfaction",
    sublabel: "Repeat Trust Rate",
  },
];

export default function Stats() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-nav text-[11px] font-semibold tracking-[0.3em] uppercase text-navy mb-4 block">
            Track Record
          </span>
          <h2 className="section-title mb-4">
            Numbers That
            <br />
            Speak for Themselves
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="relative inline-block mb-4">
                <span className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-navy leading-none">
                  {stat.number}
                </span>
              </div>
              <p className="font-nav text-sm font-semibold text-navy tracking-wide uppercase mb-1">
                {stat.label}
              </p>
              <p className="font-body text-xs text-text-body">
                {stat.sublabel}
              </p>
              <div className="w-12 h-[1.5px] bg-navy/15 mx-auto mt-4 group-hover:w-20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
