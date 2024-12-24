import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaImage, FaVideo, FaCog, FaClipboardList, FaInfoCircle } from 'react-icons/fa'; // Import ikon dari react-icons

function Sidebar({ isOpen, toggleSidebar }) {
  

  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out bg-white text-gray-800 w-64 p-4 z-50`} // z-50 untuk memastikan sidebar di atas konten
    >
      {/* Icon Burger and Logo */}
      <div className="flex items-center space-x-2 mb-4">
        <button onClick={toggleSidebar} className="p-2 rounded hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <span
            className="text-2xl font-semibold text-green-800 px-2 rounded"
            style={{
              fontFamily: 'Pristina, sans-serif',
              backgroundColor: 'blue-300',
            }}
          >
            Sipena
          </span>
      </div>
      {/* Profile Menu */}
      <div className="mt-4">
        <Link to="/" className="flex items-center text-black hover:text-gray-700">
          <FaHome className="mr-2" /> Home
        </Link>
      </div>
      <hr className="my-4 border-t border-gray-200" />
      <p className='text-gray-400'>You</p>
      <div className="mt-4">
        <Link to="/mahasiswa" className="flex items-center text-black hover:text-gray-100">
          <FaUser className="mr-2" /> Penelitian
        </Link>
      </div>
      
      <hr className="my-4 border-t border-gray-200" />
      <div className="mt-4">
        <p className="text-gray-500 text-sm">© 2023 SEM Stream. All rights reserved. License information available upon request.</p>
      </div>
    </div>
  );
}

export default Sidebar;