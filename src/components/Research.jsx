import React from "react";
import Section from "./Section";
import { Microscope } from "lucide-react";

const Research = ({ data }) => {
  return (
    <Section id="research" title="Research Grants" className="bg-gray-50">
      <div className="grid md:grid-cols-2 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500"
          >
            <div className="flex items-center gap-2 mb-3 text-blue-600">
              <Microscope size={20} />
              <span className="text-sm font-semibold uppercase tracking-wider">
                {item.role}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {item.title}
            </h3>
            <div className="flex justify-between text-sm text-gray-500 mt-4 pt-4 border-t border-gray-100">
              <span>{item.funding}</span>
              <span>{item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Research;
