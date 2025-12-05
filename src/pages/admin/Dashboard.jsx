import React from "react";
import { Link } from "react-router-dom";
import {
  User,
  BookOpen,
  GraduationCap,
  Award,
  FileText,
  Image as ImageIcon,
  Microscope,
  Users,
  Activity,
  Mail,
} from "lucide-react";
import StatsWidget from "../../components/StatsWidget";

const Dashboard = () => {
  const menuItems = [
    {
      title: "Profile",
      description: "Manage personal information and bio",
      icon: <User size={32} />,
      path: "/admin/profile",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Messages",
      description: "View and manage contact messages",
      icon: <Mail size={32} />,
      path: "/admin/messages",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Education",
      description: "Manage educational background",
      icon: <GraduationCap size={32} />,
      path: "/admin/education",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Skills",
      description: "Manage skills and expertise",
      icon: <Activity size={32} />,
      path: "/admin/skills",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Courses",
      description: "Manage teaching courses",
      icon: <BookOpen size={32} />,
      path: "/admin/courses",
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Publications",
      description: "Manage research publications",
      icon: <FileText size={32} />,
      path: "/admin/publications",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Research",
      description: "Manage research grants",
      icon: <Microscope size={32} />,
      path: "/admin/research",
      color: "bg-pink-100 text-pink-600",
    },
    {
      title: "Community Service",
      description: "Manage community service activities",
      icon: <Users size={32} />,
      path: "/admin/community-service",
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Certifications",
      description: "Manage certifications and awards",
      icon: <Award size={32} />,
      path: "/admin/certifications",
      color: "bg-teal-100 text-teal-600",
    },
    {
      title: "Gallery",
      description: "Manage photo gallery",
      icon: <ImageIcon size={32} />,
      path: "/admin/gallery",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      title: "Activities",
      description: "Manage activities and news",
      icon: <Activity size={32} />,
      path: "/admin/activities",
      color: "bg-lime-100 text-lime-600",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

      <div className="mb-8">
        <StatsWidget />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition group"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`p-3 rounded-lg ${item.color} group-hover:scale-110 transition`}
              >
                {item.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
