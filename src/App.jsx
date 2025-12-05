import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ActivityDetail from "./pages/ActivityDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import ProfileEditor from "./pages/admin/ProfileEditor";

import SectionEditor from "./pages/admin/SectionEditor";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const sectionConfigs = {
    education: [
      { key: "degree", label: "Degree" },
      { key: "institution", label: "Institution" },
      { key: "year", label: "Year" },
      { key: "description", label: "Description", type: "textarea" },
    ],
    skills: [
      { key: "name", label: "Skill Name" },
      { key: "level", label: "Level" },
    ],
    courses: [
      { key: "code", label: "Code" },
      { key: "name", label: "Course Name" },
      { key: "semester", label: "Semester" },
      { key: "description", label: "Description", type: "textarea" },
    ],
    publications: [
      { key: "title", label: "Title" },
      { key: "journal", label: "Journal" },
      { key: "year", label: "Year" },
      { key: "link", label: "Link" },
    ],
    research: [
      { key: "title", label: "Title" },
      { key: "role", label: "Role" },
      { key: "funding", label: "Funding" },
      { key: "year", label: "Year" },
    ],
    communityService: [
      { key: "activity", label: "Activity" },
      { key: "location", label: "Location" },
      { key: "year", label: "Year" },
    ],
    certifications: [
      { key: "name", label: "Name" },
      { key: "issuer", label: "Issuer" },
      { key: "year", label: "Year" },
    ],
    gallery: [
      { key: "title", label: "Title" },
      { key: "image", label: "Image", type: "image-upload" },
    ],
    activities: [
      { key: "title", label: "Title" },
      { key: "image", label: "Image", type: "image-upload" },
      { key: "date", label: "Date", type: "date" },
      { key: "location", label: "Location" },
      { key: "info", label: "Additional Info" },
      { key: "description", label: "Description", type: "textarea" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Toaster position="top-right" />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities/:id" element={<ActivityDetail />} />
        <Route path="/admin" element={<Login />} />

        {/* Protected Admin Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<ProfileEditor />} />
            <Route
              path="education"
              element={
                <SectionEditor
                  title="Education"
                  endpoint="/education"
                  fields={sectionConfigs.education}
                />
              }
            />
            <Route
              path="skills"
              element={
                <SectionEditor
                  title="Skills"
                  endpoint="/skills"
                  fields={sectionConfigs.skills}
                />
              }
            />
            <Route
              path="courses"
              element={
                <SectionEditor
                  title="Courses"
                  endpoint="/courses"
                  fields={sectionConfigs.courses}
                />
              }
            />
            <Route
              path="publications"
              element={
                <SectionEditor
                  title="Publications"
                  endpoint="/publications"
                  fields={sectionConfigs.publications}
                />
              }
            />
            <Route
              path="research"
              element={
                <SectionEditor
                  title="Research"
                  endpoint="/research"
                  fields={sectionConfigs.research}
                />
              }
            />
            <Route
              path="community-service"
              element={
                <SectionEditor
                  title="Community Service"
                  endpoint="/community-service"
                  fields={sectionConfigs.communityService}
                />
              }
            />
            <Route
              path="certifications"
              element={
                <SectionEditor
                  title="Certifications"
                  endpoint="/certifications"
                  fields={sectionConfigs.certifications}
                />
              }
            />
            <Route
              path="gallery"
              element={
                <SectionEditor
                  title="Gallery"
                  endpoint="/gallery"
                  fields={sectionConfigs.gallery}
                />
              }
            />
            <Route
              path="activities"
              element={
                <SectionEditor
                  title="Activities"
                  endpoint="/activities"
                  fields={sectionConfigs.activities}
                />
              }
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
