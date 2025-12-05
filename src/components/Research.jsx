import React from "react";
import Section from "./Section";
import { Microscope } from "lucide-react";
import { motion } from "framer-motion";

import { useLanguage } from "../context/LanguageContext";

const Research = ({ data }) => {
  const { t } = useLanguage();
  return (
    <Section
      id="research"
      title={t("research.title")}
      className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border-l-4 border-blue-500 dark:border-blue-400 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-2 mb-3 text-blue-600 dark:text-blue-400">
              <Microscope size={20} />
              <span className="text-sm font-semibold uppercase tracking-wider">
                {item.role}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
              {item.title}
            </h3>
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
              <span>{item.funding}</span>
              <span>{item.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Research;
