import React from "react";
import Section from "./Section";
import { GraduationCap } from "lucide-react";

const Education = ({ data }) => {
  return (
    <Section id="education" title="Education" className="bg-gray-50">
      <div className="space-y-6 max-w-4xl">
        {data.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="mt-1 text-blue-600">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {item.degree}
              </h3>
              <p className="text-blue-600 font-medium">{item.institution}</p>
              <p className="text-gray-500 text-sm mb-1">{item.year}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
