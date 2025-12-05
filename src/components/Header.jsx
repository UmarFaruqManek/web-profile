import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Linkedin, BookOpen, Globe } from "lucide-react";

const Header = ({ profile }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const getLink = (hash) => {
    return isHome ? hash : `/${hash}`;
  };

  if (!profile) return null;

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-1">
            {profile.title}
          </p>
          <p className="text-blue-200 mb-6">{profile.department}</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
            {profile.linkedin_link && (
              <a
                href={profile.linkedin_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            )}
            {profile.scholar_link && (
              <a
                href={profile.scholar_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition"
              >
                <BookOpen size={18} />
                <span>Scholar</span>
              </a>
            )}
            {profile.sinta_link && (
              <a
                href={profile.sinta_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition"
              >
                <Globe size={18} />
                <span>SINTA</span>
              </a>
            )}
          </div>

          <nav className="flex flex-wrap justify-center md:justify-start gap-6 text-blue-100 font-medium">
            <Link to="/" className="text-white hover:text-blue-200 transition">
              Home
            </Link>
            <a
              href={getLink("#about")}
              className="text-blue-100 hover:text-white transition"
            >
              About
            </a>
            <a
              href={getLink("#education")}
              className="text-blue-100 hover:text-white transition"
            >
              Education
            </a>
            <a
              href={getLink("#skills")}
              className="text-blue-100 hover:text-white transition"
            >
              Skills
            </a>
            <a
              href={getLink("#courses")}
              className="text-blue-100 hover:text-white transition"
            >
              Teaching
            </a>
            <a
              href={getLink("#publications")}
              className="text-blue-100 hover:text-white transition"
            >
              Publications
            </a>
            <a
              href={getLink("#research")}
              className="text-blue-100 hover:text-white transition"
            >
              Research
            </a>
            <a
              href={getLink("#community-service")}
              className="text-blue-100 hover:text-white transition"
            >
              Service
            </a>
            <a
              href={getLink("#certifications")}
              className="text-blue-100 hover:text-white transition"
            >
              Certifications
            </a>
            <a
              href={getLink("#gallery")}
              className="text-blue-100 hover:text-white transition"
            >
              Gallery
            </a>
            <a
              href={getLink("#activities")}
              className="text-blue-100 hover:text-white transition"
            >
              Activities
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
