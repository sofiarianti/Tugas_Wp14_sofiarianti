import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header';
import Sidebar from './sidebar';
import Content from './content';
import Profile from './profil';
import Mahasiswa from './Mahasiswa';

function Layout({ onLogout }) {
  return (
    
      <Router>
        <Header onLogout={onLogout} />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mahasiswa" element={<Mahasiswa />} />
        </Routes>
      </Router>
   
  );
}

export default Layout;