import React from "react";
import Section from "./Section";
import { FileText, ExternalLink } from "lucide-react";

const Publications = ({ data }) => {
  return (
    <Section id="publications" title="Publications" className="bg-white">
      <div className="space-y-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition border border-transparent hover:border-gray-100"
          >
            <div className="mt-1 text-blue-600">
              <FileText size={20} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                <a
                  href={item.link}
                  className="hover:text-blue-600 transition flex items-center gap-2"
                >
                  {item.title}
                  <ExternalLink size={14} className="text-gray-400" />
                </a>
              </h3>
              <p className="text-gray-600 italic">
                {item.journal}, {item.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Publications;
