import React from "react";
import heroImage from "../assets/mamiji_pic.png";
export default function Hero() {
  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative bg-ivory pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="lg:order-1">
            <div className="mb-6">
              <span className="inline-block font-nav text-[11px] font-semibold tracking-[0.3em] uppercase text-navy border border-navy/15 px-4 py-2 rounded-full">
                Chartered Accountant
              </span>
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-semibold text-navy leading-[1.05] mb-6">
              CA Priyanka
              <br />
              <span className="text-navy">Aggarwal</span>
            </h1>

            <p className="font-nav text-xs md:text-sm tracking-[0.2em] uppercase text-text-body mb-8">
              Taxation &nbsp;·&nbsp; GST &nbsp;·&nbsp; MCA Compliance
              &nbsp;·&nbsp; Business Advisory
            </p>

            <p className="font-body text-base md:text-lg text-text-body leading-relaxed mb-10 max-w-xl">
              I am CA Priyanka Aggarwal, a Chartered Accountant with 10 years of
              experience in taxation, GST, MCA, and compliance advisory. I help
              individuals and businesses simplify complex financial processes
              with clear, practical solutions.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button onClick={scrollToContact} className="btn-primary">
                <i className="fa-regular fa-calendar mr-2"></i>
                Schedule Consultation
              </button>
              <button onClick={scrollToServices} className="btn-secondary">
                View Services
              </button>
            </div>

            {/* Trust Strip */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8 border-t border-beige/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-beige/40 flex items-center justify-center">
                  <i className="fa-solid fa-award text-navy text-xs"></i>
                </div>
                <div>
                  <p className="font-nav text-xs font-semibold text-navy tracking-wide">
                    10+ Years
                  </p>
                  <p className="font-body text-[11px] text-text-body">
                    Experience
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-beige/40 flex items-center justify-center">
                  <i className="fa-solid fa-file-invoice-dollar text-navy text-xs"></i>
                </div>
                <div>
                  <p className="font-nav text-xs font-semibold text-navy tracking-wide">
                    GST & Tax
                  </p>
                  <p className="font-body text-[11px] text-text-body">
                    Advisory
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-beige/40 flex items-center justify-center">
                  <i className="fa-solid fa-building text-navy text-xs"></i>
                </div>
                <div>
                  <p className="font-nav text-xs font-semibold text-navy tracking-wide">
                    Business
                  </p>
                  <p className="font-body text-[11px] text-text-body">
                    Compliance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Portrait */}
          <div className="lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-4 border border-beige/40 rounded-2xl hidden lg:block" />
              <div className="w-80 md:w-96 lg:w-[26rem] aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                <img
                  src={heroImage}
                  alt="CA Priyanka Aggarwal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
