import React from "react";
import Section from "./Section";

const About = ({ bio }) => {
  return (
    <Section id="about" title="About Me" className="bg-white">
      <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">{bio}</p>
    </Section>
  );
};

export default About;
