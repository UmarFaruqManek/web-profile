import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Linkedin, BookOpen, Globe } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

const Header = ({ profile }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const getLink = (hash) => {
    return isHome ? hash : `/${hash}`;
  };

  if (!profile) return null;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-24">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 animate-pulse"></div>

      {/* Animated Gradient Blob */}
      <motion.div
        className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-50%] right-[-10%] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div
            className="relative group"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-blue-400 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white/80 shadow-2xl relative z-10">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center md:text-left flex-1">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
              variants={itemVariants}
            >
              {profile.name}
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl text-blue-100 mb-2 font-light"
              variants={itemVariants}
            >
              {profile.title}
            </motion.p>

            <motion.p
              className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto md:mx-0"
              variants={itemVariants}
            >
              {profile.department}
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
              variants={itemVariants}
            >
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full transition backdrop-blur-sm border border-white/10 hover:border-white/30 hover:scale-105 active:scale-95 duration-200"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
              {profile.linkedin_link && (
                <a
                  href={profile.linkedin_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full transition backdrop-blur-sm border border-white/10 hover:border-white/30 hover:scale-105 active:scale-95 duration-200"
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
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full transition backdrop-blur-sm border border-white/10 hover:border-white/30 hover:scale-105 active:scale-95 duration-200"
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
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full transition backdrop-blur-sm border border-white/10 hover:border-white/30 hover:scale-105 active:scale-95 duration-200"
                >
                  <Globe size={18} />
                  <span>SINTA</span>
                </a>
              )}
              <div className="ml-2">
                <ThemeToggle />
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.nav
              className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3 text-blue-100 font-medium text-sm md:text-base"
              variants={itemVariants}
            >
              {[
                { name: "Home", link: "/" },
                { name: "About", link: "#about" },
                { name: "Education", link: "#education" },
                { name: "Skills", link: "#skills" },
                { name: "Teaching", link: "#courses" },
                { name: "Publications", link: "#publications" },
                { name: "Research", link: "#research" },
                { name: "Service", link: "#community-service" },
                { name: "Certifications", link: "#certifications" },
                { name: "Gallery", link: "#gallery" },
                { name: "Activities", link: "#activities" },
              ].map((item) =>
                item.link.startsWith("/") ? (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="relative group py-1"
                  >
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      {item.name}
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={getLink(item.link)}
                    className="relative group py-1"
                  >
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      {item.name}
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                )
              )}
            </motion.nav>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
