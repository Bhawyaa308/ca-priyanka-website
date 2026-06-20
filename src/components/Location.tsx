import React from "react";
export default function Location() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-nav text-[11px] font-semibold tracking-[0.3em] uppercase text-navy mb-4 block">
            Office Location
          </span>
          <h2 className="section-title mb-6">Visit Our Office</h2>
          <p className="section-subtitle mx-auto">
            Consultations are available by appointment. Reach out to schedule a
            visit to our office in Noida.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Office Details */}
          <div>
            <div className="bg-light-blue/40 p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
                  <i className="fa-solid fa-location-dot text-ivory text-sm"></i>
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-navy">
                  Noida Office
                </h3>
              </div>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-beige/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-map-pin text-navy text-xs"></i>
                  </div>
                  <div>
                    <p className="font-nav text-xs font-semibold text-text-body tracking-wide uppercase mb-1">
                      Address
                    </p>
                    <p className="font-body text-sm text-text-body">
                      Gardenia Glory,Sector 46, Noida
                      <br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-beige/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-phone text-navy text-xs"></i>
                  </div>
                  <div>
                    <p className="font-nav text-xs font-semibold text-text-body tracking-wide uppercase mb-1">
                      Phone
                    </p>
                    <p className="font-body text-sm text-text-body">
                      +91 9671518785
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-beige/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-envelope text-navy text-xs"></i>
                  </div>
                  <div>
                    <p className="font-nav text-xs font-semibold text-text-body tracking-wide uppercase mb-1">
                      Email
                    </p>
                    <p className="font-body text-sm text-text-body">
                      priya2u.garg@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-beige/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-clock text-navy text-xs"></i>
                  </div>
                  <div>
                    <p className="font-nav text-xs font-semibold text-text-body tracking-wide uppercase mb-1">
                      Hours
                    </p>
                    <p className="font-body text-sm text-text-body">
                      Mon — Sun: 9:00 AM — 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="flex items-stretch">
            <div className="w-full border border-beige/40 rounded-xl overflow-hidden min-h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.666479598227!2d77.35998807495375!3d28.5497428878364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce52fb4af56b9%3A0x7fc313f19b3b94d3!2sPriyanka%20Aggarwal!5e0!3m2!1sen!2sin!4v1781941051342!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[450px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
