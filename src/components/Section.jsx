import React from "react";

const Section = ({ title, children, className = "", id = "" }) => {
  return (
    <section id={id} className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-blue-500 inline-block pb-2">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
