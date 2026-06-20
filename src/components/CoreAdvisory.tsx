import React from "react";
const services = [
  {
    icon: "fa-solid fa-file-invoice-dollar",
    title: "Income Tax Advisory",
    description:
      "Strategic tax planning, ITR filing, and optimization structured to maximize savings while ensuring full compliance with Indian tax regulations.",
  },
  {
    icon: "fa-solid fa-receipt",
    title: "GST Registration & Filing",
    description:
      "End-to-end GST registration, return filing, input tax credit management, and advisory to keep your business tax-compliant.",
  },
  {
    icon: "fa-solid fa-landmark",
    title: "MCA Compliance",
    description:
      "Comprehensive Ministry of Corporate Affairs compliance including annual filings, board resolutions, and regulatory submissions.",
  },
  {
    icon: "fa-solid fa-building-columns",
    title: "Company Incorporation",
    description:
      "Seamless company registration, LLP formation, and partnership firm setup with complete documentation and legal support.",
  },
  {
    icon: "fa-solid fa-magnifying-glass-chart",
    title: "Audit & Assurance",
    description:
      "Statutory audit, internal audit, and tax audit services conducted with precision to ensure financial accuracy and regulatory adherence.",
  },
  {
    icon: "fa-solid fa-rocket",
    title: "Startup Advisory",
    description:
      "Tailored compliance packages for startups including incorporation, GST setup, trademark filing, and ongoing regulatory support.",
  },
  {
    icon: "fa-solid fa-folder-open",
    title: "ROC Compliance",
    description:
      "Complete Registrar of Companies filings, annual returns, director changes, and registered office management.",
  },
  {
    icon: "fa-solid fa-diagram-project",
    title: "Business Structuring",
    description:
      "Strategic business structuring, corporate reorganization, and entity planning to optimize tax efficiency and operational flexibility.",
  },
];

export default function CoreAdvisory() {
  return (
    <section id="services" className="bg-light-blue py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-nav text-[11px] font-semibold tracking-[0.3em] uppercase text-navy mb-4 block">
            What We Offer
          </span>
          <h2 className="section-title mb-6">Core Advisory Services</h2>
          <p className="section-subtitle mx-auto">
            Strategic tax planning and structured compliance designed to
            eliminate regulatory friction and secure your corporate operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-ivory/80 border border-beige/50 p-7 transition-all duration-300 hover:border-navy/15 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
            >
              <div className="w-12 h-12 rounded-lg bg-beige/40 flex items-center justify-center mb-5 group-hover:bg-beige/60 transition-colors duration-300">
                <i className={`${service.icon} text-navy text-lg`}></i>
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-text-body leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
