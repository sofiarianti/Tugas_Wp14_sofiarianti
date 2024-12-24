import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate untuk navigasi
import LogoutButton from '../LogoutButton';
import Sidebar from './sidebar'; // Import Sidebar component

function Header({ onLogout, userName }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    console.log('Search:', e.target.value);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const goToProfile = () => {
    navigate('/profile'); // Navigasi ke halaman profil
  };

  const handleLogout = () => {
    if (window.confirm('Apakah Anda yakin ingin logout?')) {
      onLogout(); // Panggil fungsi logout yang diteruskan sebagai props
      navigate('/login'); // Navigasi ke halaman login setelah logout
    }
  };

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 bg-gradient-to-r from-green-800 via-blue-200 to-green-900 text-white">
        {/* Icon Menu Burger and Logo */}
        <div className="flex items-center space-x-2">
          <button onClick={toggleSidebar} className="p-2 rounded hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
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
              backgroundColor: 'white',
            }}
          >
            Sipena
          </span>
        </div>

        {/* Search Box */}
        <div className="relative w-2/3 mx-2">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Cari sesuatu..."
            className="w-full px-2 py-2 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 border-2 border-gray-400"
          />
        </div>

        {/* Logout */}
        <div className="flex text-gray-500 font-bold">
          <LogoutButton onLogout={handleLogout} />
        </div>

        {/* Garis Tipis */}
        <hr className="w-px h-6 mx-2 bg-gray-300" /> {/* Garis tipis sebagai pemisah */}

        {/* Nama Pengguna */}
        <span className="text-black mx-2">Jennie Rubyjane</span>

        {/* Foto Profil */}
        <div className="flex items-center text-gray-500 font-bold">
          <button onClick={goToProfile} className="p-2 rounded hover:bg-gray-200"></button>
        </div>
      </header>

      {/* Sidebar Component - Pass state and toggle function */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}

export default Header;
