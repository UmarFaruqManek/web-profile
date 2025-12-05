import React from "react";
import Section from "./Section";
import { Award } from "lucide-react";

const Certifications = ({ data }) => {
  return (
    <Section id="certifications" title="Certifications" className="bg-gray-50">
      <div className="grid md:grid-cols-2 gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
          >
            <div className="text-yellow-500">
              <Award size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500">
                {item.issuer} • {item.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
