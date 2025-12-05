import React from "react";
import Section from "./Section";
import { Book } from "lucide-react";

const Courses = ({ data }) => {
  return (
    <Section id="courses" title="Teaching" className="bg-gray-50">
      <div className="grid md:grid-cols-2 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-semibold">
                {item.code}
              </div>
              <span className="text-gray-500 text-sm">{item.semester}</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {item.name}
            </h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Courses;
