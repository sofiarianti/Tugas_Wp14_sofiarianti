import React from 'react';
import useAPI from '../hooks/useAPI';
import endpoints from '../services/endpoints';

function Mahasiswa() {
  const { data: mahasiswa, loading, error } = useAPI(endpoints.mahasiswa.getAll);

  console.log('Data mahasiswa:', mahasiswa);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Data Mahasiswa</h1>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Data Mahasiswa</h1>
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  const mahasiswaList = Array.isArray(mahasiswa.mahasiswa) ? mahasiswa.mahasiswa : [];
  console.log(mahasiswaList);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Data Mahasiswa</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4">NIM</th>
              <th className="py-2 px-4">Nama</th>
              <th className="py-2 px-4">Prodi</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswaList.length > 0 ? (
              mahasiswaList.map((mhs) => (
                <tr key={mhs.nama} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4 text-center">{mhs.nama}</td>
                <img
                 src={mhs.url}
                 alt="foto"
                 style={{ width: '200px', height: 'auto', margin: '10px' }}
               />
                <td className="py-2 px-4">{mhs.deskripsi}</td>
                </tr>
                
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-4 text-center">
                  Tidak ada data mahasiswa
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Mahasiswa;
