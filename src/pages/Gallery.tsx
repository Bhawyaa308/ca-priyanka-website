import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import locationImage from "../assets/location.png";
import compliancesImage from "../assets/complainces.jpeg";
const categories = [
  "All",
  "Office",
  "Events",
  "Client Sessions",
  "Professional Activities",
];

const galleryItems = [
  {
    id: 1,
    category: "Office",
    image: locationImage,
    title: "Office Location",
  },
  {
    id: 2,
    category: "Professional Activities",
    image: compliancesImage,
    title: "Compliance Services",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-ivory">
      {/* Gallery Header */}
      <div className="bg-light-blue/40 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-nav text-xs font-medium tracking-wider text-navy/50 hover:text-navy mb-8 transition-colors"
          >
            <i className="fa-solid fa-arrow-left text-xs"></i>
            Back to Home
          </Link>
          <h1 className="section-title mb-4">Gallery</h1>
          <p className="section-subtitle mx-auto">
            A glimpse into our office, events, and professional activities.
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-nav text-xs font-medium tracking-wider uppercase px-5 py-2.5 border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-navy text-ivory border-navy"
                  : "bg-transparent text-navy/60 border-beige/50 hover:border-navy/30 hover:text-navy"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.image)}
              className="relative overflow-hidden rounded-xl border border-beige/30 cursor-pointer group h-[280px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3">
                <p className="text-sm font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body text-sm text-navy/40">
              No photos in this category yet.
            </p>
          </div>
        )}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-8 text-white text-4xl"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-[95vw] max-h-[90vh] rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </div>
  );
}
