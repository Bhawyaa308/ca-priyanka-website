import React from "react";
const serviceDetails = [
  {
    icon: "fa-solid fa-receipt",
    title: "GST Services",
    description:
      "Complete GST lifecycle management including registration, monthly/quarterly return filing, input tax credit reconciliation, and GST audit support. We ensure your business stays compliant with evolving GST regulations.",
  },
  {
    icon: "fa-solid fa-file-invoice-dollar",
    title: "Income Tax Services",
    description:
      "Comprehensive income tax solutions for individuals and businesses — from ITR filing and tax planning to handling notices, assessments, and appeals before Income Tax Authorities.",
  },
  {
    icon: "fa-solid fa-building-columns",
    title: "Company Registration",
    description:
      "End-to-end company incorporation services including Pvt Ltd, LLP, OPC, and partnership firm registration with MCA, PAN, TAN, GST, and bank account opening assistance.",
  },
  {
    icon: "fa-solid fa-landmark",
    title: "MCA Filing",
    description:
      "Timely and accurate filings with the Ministry of Corporate Affairs including annual returns, financial statements, director appointments, and charge creation/modification.",
  },
  {
    icon: "fa-solid fa-magnifying-glass-chart",
    title: "Audit Support",
    description:
      "Professional audit services covering statutory audits, tax audits, internal audits, and special purpose audits. We ensure your financial statements are accurate and audit-ready.",
  },
  {
    icon: "fa-solid fa-rocket",
    title: "Startup Compliance",
    description:
      "Dedicated compliance packages for early-stage startups covering incorporation, GST setup, PF/ESI registration, MSME registration, trademark filing, and ongoing regulatory support.",
  },
  {
    icon: "fa-solid fa-diagram-project",
    title: "Business Advisory",
    description:
      "Strategic business advisory covering corporate structuring, tax-efficient planning, due diligence, and compliance consulting for businesses at every stage of growth.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-nav text-[11px] font-semibold tracking-[0.3em] uppercase text-navy mb-4 block">
            Detailed Services
          </span>
          <h2 className="section-title mb-6">
            Comprehensive Financial Solutions
          </h2>
          <p className="section-subtitle mx-auto">
            Every service is delivered with meticulous attention to detail,
            ensuring complete compliance and optimized financial outcomes for
            your business.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {serviceDetails.map((service, index) => (
            <div
              key={service.title}
              className={`group flex flex-col md:flex-row gap-6 md:gap-10 py-8 ${
                index < serviceDetails.length - 1
                  ? "border-b border-beige/40"
                  : ""
              }`}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-light-blue/60 flex items-center justify-center group-hover:bg-light-blue transition-colors duration-300">
                  <i className={`${service.icon} text-navy text-xl`}></i>
                </div>
              </div>
              {/* Content */}
              <div className="flex-1">
                <h3 className="font-heading text-2xl md:text-[1.65rem] font-semibold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-base text-text-body leading-relaxed max-w-3xl">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a href="#contact" className="btn-primary">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}
