import React from "react";
import Section from "./Section";
import { Award } from "lucide-react";
import { motion } from "framer-motion";

const Certifications = ({ data }) => {
  return (
    <Section
      id="certifications"
      title="Certifications"
      className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="grid md:grid-cols-2 gap-4">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(59, 130, 246, 0.05)",
            }}
          >
            <div className="text-yellow-500">
              <Award size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.issuer} • {item.year}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
