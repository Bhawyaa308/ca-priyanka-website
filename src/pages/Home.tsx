import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CoreAdvisory from "../components/CoreAdvisory";
import Stats from "../components/Stats";
import Reviews from "../components/Reviews";
import Location from "../components/Location";
import ConsultationCTA from "../components/ConsultationCTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import React from "react";
export default function Home() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <Hero />
      <CoreAdvisory />
      <Stats />
      <Reviews />
      <Location />
      <ConsultationCTA />
      <Contact />
      <Footer />
    </div>
  );
}
