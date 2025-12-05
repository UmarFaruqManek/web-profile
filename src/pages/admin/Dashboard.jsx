import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold mb-2">Welcome back, Admin!</h2>
        <p className="text-gray-600">
          Select a menu item from the sidebar to manage your profile content.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
