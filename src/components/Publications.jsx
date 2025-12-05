import React from "react";
import Section from "./Section";
import { FileText, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import { useLanguage } from "../context/LanguageContext";

const Publications = ({ data }) => {
  const { t } = useLanguage();
  return (
    <Section
      id="publications"
      title={t("publications.title")}
      className="bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="space-y-4">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition border border-transparent hover:border-gray-100 dark:hover:border-gray-600"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 10 }}
          >
            <div className="mt-1 text-blue-600 dark:text-blue-400 flex-shrink-0">
              <FileText size={20} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white leading-tight mb-1">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center gap-2"
                >
                  {item.title}
                  <ExternalLink
                    size={14}
                    className="text-gray-400 dark:text-gray-500"
                  />
                </a>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                {item.journal}, {item.year}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Publications;
