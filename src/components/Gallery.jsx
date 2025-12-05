import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";

const Gallery = ({ data }) => {
  return (
    <Section
      id="gallery"
      title="Gallery"
      className="bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
              <span className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                {item.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Gallery;
