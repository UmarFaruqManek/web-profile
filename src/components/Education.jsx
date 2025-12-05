import React from "react";
import Section from "./Section";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const Education = ({ data }) => {
  return (
    <Section
      id="education"
      title="Education"
      className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="space-y-6 max-w-4xl">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300 border border-transparent hover:border-gray-100 dark:hover:border-gray-700 hover:shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="mt-1 text-blue-600 dark:text-blue-400">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {item.degree}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                {item.institution}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                {item.year}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
