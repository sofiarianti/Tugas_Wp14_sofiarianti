// src/Component/layout/profil.js
import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-10">
        {/* Profile Header */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center space-x-6">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <img
                src="https://i.pinimg.com/736x/e5/18/60/e51860512f19239be56fb9efac6aab1e.jpg" // Ganti URL dengan gambar profil sebenarnya
                alt="User Avatar"
                className="w-24 h-24 rounded-full border-2 border-gray-300"
              />
            </div>
            {/* User Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Jennie Rubyjane</h2>
              <p className="text-gray-600">jennie@example.com</p>
              <p className="text-gray-600">+123 456 7890</p>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 text-sm">Full Name:</label>
              <p className="text-gray-800">Jennie Rubyjane</p>
            </div>
            <div>
              <label className="block text-gray-600 text-sm">Email Address:</label>
                <p className="text-gray-800">jennie@example.com</p>
            </div>
            <div>
              <label className="block text-gray-600 text-sm">Phone Number:</label>
              <p className="text-gray-800">+123 456 7890</p>
            </div>
            <div>
              <label className="block text-gray-600 text-sm">Address:</label>
              <p className="text-gray-800">1234 Elm Street, Springfield, USA</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-6">
          <button className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Edit Profile
          </button>
          <button className="ml-4 px-6 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
