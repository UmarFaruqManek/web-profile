import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils"; // Assuming you have a utils file for class merging, if not I'll use template literals or install clsx/tailwind-merge if not present.
// Wait, I saw clsx and tailwind-merge in package.json. I should check if lib/utils exists or just use them directly.
// To be safe and self-contained, I'll just use template literals or standard className prop.

const Section = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-6 scroll-mt-20 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white relative">
              {title}
              <span className="absolute -bottom-3 left-0 w-1/2 h-1.5 bg-blue-500 rounded-full"></span>
            </h2>
            <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1 mt-2"></div>
          </div>

          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
