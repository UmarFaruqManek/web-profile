import React from "react";
import Section from "./Section";

const Gallery = ({ data }) => {
  return (
    <Section id="gallery" title="Gallery" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
              <span className="text-white font-medium">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Gallery;
