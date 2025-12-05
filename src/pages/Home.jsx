import React, { useEffect, useState } from "react";
import {
  getProfile,
  getEducation,
  getSkills,
  getCourses,
  getPublications,
  getResearch,
  getCommunityService,
  getCertifications,
  getGallery,
} from "../services/api";

import Header from "../components/Header";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Courses from "../components/Courses";
import Publications from "../components/Publications";
import Research from "../components/Research";
import CommunityService from "../components/CommunityService";
import Certifications from "../components/Certifications";
import Gallery from "../components/Gallery";
import Activities from "../components/Activities";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const [data, setData] = useState({
    profile: null,
    education: [],
    skills: [],
    courses: [],
    publications: [],
    research: [],
    communityService: [],
    certifications: [],
    gallery: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          profileRes,
          educationRes,
          skillsRes,
          coursesRes,
          publicationsRes,
          researchRes,
          communityServiceRes,
          certificationsRes,
          galleryRes,
        ] = await Promise.all([
          getProfile(),
          getEducation(),
          getSkills(),
          getCourses(),
          getPublications(),
          getResearch(),
          getCommunityService(),
          getCertifications(),
          getGallery(),
        ]);

        setData({
          profile: profileRes.data,
          education: educationRes.data,
          skills: skillsRes.data,
          courses: coursesRes.data,
          publications: publicationsRes.data,
          research: researchRes.data,
          communityService: communityServiceRes.data,
          certifications: certificationsRes.data,
          gallery: galleryRes.data,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header profile={data.profile} />
      <About profile={data.profile} />
      <Education data={data.education} />
      <Skills data={data.skills} />
      <Courses data={data.courses} />
      <Publications data={data.publications} />
      <Research data={data.research} />
      <CommunityService data={data.communityService} />
      <Certifications data={data.certifications} />
      <Gallery data={data.gallery} />
      <Activities />
      <Contact profile={data.profile} />
      <Footer profile={data.profile} />
    </main>
  );
};

export default Home;
