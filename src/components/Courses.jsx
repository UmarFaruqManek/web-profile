import React from "react";
import Section from "./Section";
import { Book } from "lucide-react";
import { motion } from "framer-motion";

const Courses = ({ data }) => {
  return (
    <Section
      id="courses"
      title="Teaching"
      className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded text-sm font-semibold">
                {item.code}
              </div>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {item.semester}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
              {item.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Courses;
