import React from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  BookOpen,
  Wrench,
  GraduationCap,
  FileText,
  Microscope,
  Users,
  Award,
  Image,
  LogOut,
  Mail,
} from "lucide-react";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

  const navItems = [
    {
      path: "/admin/dashboard",
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
    },
    { path: "/admin/messages", icon: <Mail size={20} />, label: "Messages" },
    { path: "/admin/profile", icon: <User size={20} />, label: "Profile" },
    {
      path: "/admin/education",
      icon: <GraduationCap size={20} />,
      label: "Education",
    },
    { path: "/admin/skills", icon: <Wrench size={20} />, label: "Skills" },
    { path: "/admin/courses", icon: <BookOpen size={20} />, label: "Courses" },
    {
      path: "/admin/publications",
      icon: <FileText size={20} />,
      label: "Publications",
    },
    {
      path: "/admin/research",
      icon: <Microscope size={20} />,
      label: "Research",
    },
    {
      path: "/admin/community-service",
      icon: <Users size={20} />,
      label: "Community Service",
    },
    {
      path: "/admin/certifications",
      icon: <Award size={20} />,
      label: "Certifications",
    },
    { path: "/admin/gallery", icon: <Image size={20} />, label: "Gallery" },
    {
      path: "/admin/activities",
      icon: <FileText size={20} />,
      label: "Activities",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md fixed h-full z-10">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
        </div>
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-140px)]">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                location.pathname === item.path
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 w-full p-4 border-t bg-white">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-red-600 hover:bg-red-50 rounded-lg transition"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
