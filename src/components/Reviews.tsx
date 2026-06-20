import React from "react";
const reviews = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "CA Priyanka Aggarwal has been handling our company's GST filings and income tax returns for the past three years. Her attention to detail and proactive approach to compliance has saved us from several potential issues. Highly recommended for any business looking for reliable tax advisory.",
    designation: "Business Owner, Noida",
  },
  {
    name: "Anita Sharma",
    rating: 5,
    text: "I approached CA Priyanka for my individual ITR filing and was impressed by her thoroughness. She not only filed my returns accurately but also provided valuable tax-saving suggestions that I hadn't considered. Her fees are very reasonable for the quality of service.",
    designation: "Salaried Professional",
  },
  {
    name: "Vikram Singh",
    rating: 5,
    text: "When we were setting up our startup, CA Priyanka guided us through the entire company incorporation process. From MCA registration to GST setup, everything was handled seamlessly. Her startup advisory services are truly comprehensive.",
    designation: "Co-Founder, Tech Startup",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-light-blue py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-nav text-[11px] font-semibold tracking-[0.3em] uppercase text-navy mb-4 block">
            Client Testimonials
          </span>
          <h2 className="section-title mb-6">What Our Clients Say</h2>
          <p className="section-subtitle mx-auto">
            Trusted by individuals, startups, and established businesses for
            reliable tax and compliance advisory.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-ivory/80 border border-beige/40 p-8 transition-all duration-300 hover:border-beige/60 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <i
                    key={i}
                    className="fa-solid fa-star text-navy/40 text-sm"
                  ></i>
                ))}
              </div>

              {/* Review Text */}
              <p className="font-body text-sm text-text-body leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="pt-5 border-t border-beige/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                    <span className="font-heading text-sm font-semibold text-navy">
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-nav text-sm font-semibold text-navy">
                      {review.name}
                    </p>
                    <p className="font-body text-xs text-text-body">
                      {review.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=ca+priyanka+aggarwal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-nav text-sm text-text-body hover:text-navy transition-colors"
          >
            <i className="fa-brands fa-google text-lg"></i>
            View all reviews on Google
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
