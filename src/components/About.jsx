import React from "react";
import Section from "./Section";

const About = ({ bio }) => {
  return (
    <Section
      id="about"
      title="About Me"
      className="bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
        {bio}
      </p>
    </Section>
  );
};

export default About;
