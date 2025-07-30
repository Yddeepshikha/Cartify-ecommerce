// src/components/Section.jsx
import React, { useRef } from "react";
import ProductCard from "./ProductCard";

const Section = ({ title, items }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -400, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-8 relative">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      {/* Scroll Buttons */}
      <button
        className="absolute left-0 top-16 z-10 bg-white border shadow rounded-full p-2 hidden md:block"
        onClick={() => scroll("left")}
      >
        ◀
      </button>
      <button
        className="absolute right-0 top-16 z-10 bg-white border shadow rounded-full p-2 hidden md:block"
        onClick={() => scroll("right")}
      >
        ▶
      </button>

      {/* Scrollable Product List */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {items.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Section;
