import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Footer = ({ profile }) => {
  const { t } = useLanguage();
  if (!profile) return null;

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-white text-xl font-bold mb-4">{profile.name}</h3>
        <p className="mb-8">{profile.department}</p>
        <div className="flex justify-center gap-6 mb-8">
          {/* Social Links could go here again or just copyright */}
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} {profile.name}. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
