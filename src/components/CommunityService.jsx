import React from "react";
import Section from "./Section";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

const CommunityService = ({ data }) => {
  return (
    <Section
      id="community-service"
      title="Community Service"
      className="bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="space-y-4">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.01,
              backgroundColor: "rgba(59, 130, 246, 0.1)",
            }}
          >
            <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-full text-blue-600 dark:text-blue-400">
              <Users size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                {item.activity}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.location} • {item.year}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default CommunityService;
