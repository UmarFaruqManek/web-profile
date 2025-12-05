import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";
import { Calendar, MapPin, Info, ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ActivityDetail = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [activityRes, profileRes] = await Promise.all([
          api.get("/activities"),
          api.get("/profile"),
        ]);

        const foundActivity = activityRes.data.find(
          (item) => item.id.toString() === id
        );
        setActivity(foundActivity);
        setProfile(profileRes.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!activity) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Activity not found
        </h2>
        <Link to="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <Header profile={profile} />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 font-medium"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-96 w-full">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {activity.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-gray-600 mb-8 pb-8 border-b">
                <div className="flex items-center gap-2">
                  <Calendar className="text-blue-600" />
                  <span className="font-medium">{activity.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-blue-600" />
                  <span className="font-medium">{activity.location}</span>
                </div>
                {activity.info && (
                  <div className="flex items-center gap-2">
                    <Info className="text-blue-600" />
                    <span className="font-medium">{activity.info}</span>
                  </div>
                )}
              </div>

              <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                {activity.description}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ActivityDetail;
