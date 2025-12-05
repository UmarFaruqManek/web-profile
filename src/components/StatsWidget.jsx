import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Users } from "lucide-react";

const StatsWidget = () => {
  const [visitors, setVisitors] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get("/stats");
        setVisitors(res.data.visitors);
      } catch (error) {
        console.error("Failed to fetch stats");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading)
    return <div className="animate-pulse h-32 bg-gray-200 rounded-xl"></div>;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
      <div className="p-4 bg-blue-50 text-blue-600 rounded-full">
        <Users size={24} />
      </div>
      <div>
        <h3 className="text-gray-500 text-sm font-medium">Total Visitors</h3>
        <p className="text-3xl font-bold text-gray-800">{visitors}</p>
      </div>
    </div>
  );
};

export default StatsWidget;
