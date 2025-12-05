import React from "react";
import Section from "./Section";

const Skills = ({ data }) => {
  return (
    <Section id="skills" title="Skills" className="bg-white">
      <div className="flex flex-wrap gap-3">
        {data.map((item) => (
          <span
            key={item.id}
            className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium border border-blue-100"
          >
            {item.name}
          </span>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
