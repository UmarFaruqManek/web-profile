import React from "react";
import Section from "./Section";

const Skills = ({ data }) => {
  return (
    <Section
      id="skills"
      title="Skills"
      className="bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="flex flex-wrap gap-3">
        {data.map((item) => (
          <span
            key={item.id}
            className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg font-medium border border-blue-100 dark:border-blue-800"
          >
            {item.name}
          </span>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
