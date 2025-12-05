import React from "react";
import Section from "./Section";

import { useLanguage } from "../context/LanguageContext";

const About = ({ profile }) => {
  const { t } = useLanguage();

  if (!profile) return null;

  return (
    <Section
      id="about"
      title={t("about.title")}
      className="bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="flex flex-col gap-8">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
          {profile.bio}
        </p>

        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl">
          <div className="text-center p-4 bg-blue-50 dark:bg-gray-700 rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
              {profile.citations || 0}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Citations
            </div>
          </div>
          <div className="text-center p-4 bg-green-50 dark:bg-gray-700 rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400">
              {profile.h_index || 0}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              H-Index
            </div>
          </div>
          <div className="text-center p-4 bg-purple-50 dark:bg-gray-700 rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">
              {profile.i10_index || 0}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              i10-Index
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
