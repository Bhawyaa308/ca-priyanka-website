import React from "react";
export default function ConsultationCTA() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-[4rem] font-semibold text-ivory leading-tight mb-8">
          Secure Your
          <br />
          Financial Operations
        </h2>
        <p className="font-body text-base md:text-lg text-ivory/70 max-w-2xl mx-auto leading-relaxed mb-10">
          Schedule a consultation to receive practical tax and compliance
          guidance tailored to your business needs. Every engagement begins with
          understanding your unique situation.
        </p>
        <button onClick={scrollToContact} className="btn-beige">
          <i className="fa-regular fa-calendar mr-2"></i>
          Book Consultation
        </button>
      </div>
    </section>
  );
}
