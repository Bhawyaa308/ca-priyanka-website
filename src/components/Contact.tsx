import { useState } from "react";
import React from "react";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message}
  `;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(`https://wa.me/919671518785?text=${encodedMessage}`, "_blank");

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-ivory py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-nav text-[11px] font-semibold tracking-[0.3em] uppercase text-navy mb-4 block">
            Get in Touch
          </span>
          <h2 className="section-title mb-6">Schedule a Consultation</h2>
          <p className="section-subtitle mx-auto">
            Reach out for professional tax and compliance guidance. We respond
            to all inquiries within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form - 3 cols */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-nav text-xs font-semibold text-navy tracking-wider uppercase mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="w-full bg-transparent border border-beige/60 px-5 py-3.5 font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-navy/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-nav text-xs font-semibold text-navy tracking-wider uppercase mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+91 9671518785"
                    className="w-full bg-transparent border border-beige/60 px-5 py-3.5 font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-navy/40 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-nav text-xs font-semibold text-navy tracking-wider uppercase mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="priya2u.garg@gmail.com"
                  className="w-full bg-transparent border border-beige/60 px-5 py-3.5 font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-navy/40 transition-colors"
                />
              </div>

              <div>
                <label className="block font-nav text-xs font-semibold text-navy tracking-wider uppercase mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-transparent border border-beige/60 px-5 py-3.5 font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-navy/40 transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full sm:w-auto">
                <i className="fa-regular fa-paper-plane mr-2"></i>
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>

          {/* Office Details - 2 cols */}
          <div className="lg:col-span-2">
            <div className="bg-light-blue/30 p-8">
              <h3 className="font-heading text-2xl font-semibold text-navy mb-6">
                Office Details
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-beige/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-location-dot text-navy text-xs"></i>
                  </div>
                  <div>
                    <p className="font-nav text-xs font-semibold text-text-body tracking-wide uppercase mb-1">
                      Office
                    </p>
                    <p className="font-body text-sm text-text-body">
                      Gardenia Glory,Sector 46, Noida, UP, India
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
                      Working Hours
                    </p>
                    <p className="font-body text-sm text-text-body">
                      Mon — Sun: 9:00 AM — 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-navy/10">
                <p className="font-nav text-xs font-semibold text-text-body tracking-wide uppercase mb-4">
                  Connect
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/ca-priyanka-garg-1263b59a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-navy/10 flex items-center justify-center text-navy hover:bg-navy hover:text-ivory transition-all duration-300"
                  >
                    <i className="fa-brands fa-linkedin-in text-sm"></i>
                  </a>
                  <a
                    href="https://www.google.com/search?q=ca+priyanka+aggarwal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-navy/10 flex items-center justify-center text-navy hover:bg-navy hover:text-ivory transition-all duration-300"
                  >
                    <i className="fa-brands fa-google text-sm"></i>
                  </a>
                  <a
                    href="https://wa.me/919671518785"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-navy/10 flex items-center justify-center text-navy hover:bg-navy hover:text-ivory transition-all duration-300"
                  >
                    <i className="fa-brands fa-whatsapp text-sm"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
