import React from "react";
import Section from "./Section";
import { Users } from "lucide-react";

const CommunityService = ({ data }) => {
  return (
    <Section
      id="community-service"
      title="Community Service"
      className="bg-white"
    >
      <div className="space-y-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
          >
            <div className="bg-blue-100 p-2 rounded-full text-blue-600">
              <Users size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{item.activity}</h3>
              <p className="text-sm text-gray-600">
                {item.location} • {item.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CommunityService;
