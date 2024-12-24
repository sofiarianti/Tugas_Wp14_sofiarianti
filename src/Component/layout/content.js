import React from 'react';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <main className="container mx-auto px-4 py-10">
        {/* Hero Section */}
        <section className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Selamat Datang di SIPENA</h2>
          <p className="text-gray-700 text-lg">Sistem Penjaminan Mutu Internal untuk mendukung pengelolaan mutu yang efektif dan efisien.</p>
          <div className="mt-6">
            <a href="#" className="bg-green-400 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-200">Mulai Sekarang</a>
          </div>
        </section>

        <section id="publications" className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Publikasi Penelitian</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
            <img src={require('../layout/f4.png')} alt="Buku Penelitian 2" className="w-full h-70 object-cover rounded-md mb-4" />
              <h4 className="text-lg font-semibold text-blue-600">Penelitian Pada Daya Guna Digital di era modern:Berdaya Digital Dimana saja</h4>
              <p className="text-gray-600">Analisis implementasi daya guna digital pada perkembangan zaman yang semakin.</p>
              <a href="#" className="text-blue-500 hover:underline">Baca Selengkapnya</a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
            <img src={require('../layout/f2.png')} alt="Buku Penelitian 2" className="w-full h-70 object-cover rounded-md mb-4" />
              <h4 className="text-lg font-semibold text-blue-600">Menyongsong Era Teknologi Baru</h4>
              <p className="text-gray-600">Studi kasus pada lembaga pendidikan tinggi.</p>
              <a href="#" className="text-blue-500 hover:underline">Baca Selengkapnya</a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
            <img src={require('../layout/f3.png')} alt="Buku Penelitian 2" className="w-full h-70 object-cover rounded-md mb-4" />
              <h4 className="text-lg font-semibold text-blue-600">Berinovasi:Wujudkan Teknologi Yang Dapat Mengurangi Dampak Buruk Pada Lingkungan</h4>
              <p className="text-gray-600">Pendekatan inovatif dalam pengelolaan mutu.</p>
              <a href="#" className="text-blue-500 hover:underline">Baca Selengkapnya</a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Fitur Unggulan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h4 className="text-lg font-semibold text-blue-600">Manajemen Dokumen</h4>
              <p className="text-gray-600">Kelola dokumen mutu dengan mudah dan terorganisir.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h4 className="text-lg font-semibold text-blue-600">Monitoring & Evaluasi</h4>
              <p className="text-gray-600">Pantau pelaksanaan mutu secara real-time.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h4 className="text-lg font-semibold text-blue-600">Pelaporan</h4>
              <p className="text-gray-600">Buat laporan berkala untuk penilaian kualitas.</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Tentang SIPENA</h3>
          <p className="text-gray-700">
            SIPENA adalah platform yang dirancang untuk membantu institusi pendidikan atau organisasi
            dalam mengelola dan memastikan mutu internal berjalan sesuai dengan standar yang ditetapkan.
          </p>
        </section>

        {/* Publications Section */}
        
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 SIPENA | SPMI. Semua Hak Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
