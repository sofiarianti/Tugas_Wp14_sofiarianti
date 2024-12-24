import React, { useState } from 'react';
import useAPI from '../hooks/useAPI';
import endpoints from '../Services/endpoints';
import usePostPenelitian from '../hooks/postPenelitian';
import usePutPenelitian from '../hooks/putPenelitian';
import useDeletePenelitian from '../hooks/deletePenelitian';

function Mahasiswa() {
  const [kd_penelitian, setKdPenelitian] = useState('');
  const [id, setId] = useState('');
  const [judul, setJudul] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [thn_akademik, setThnAkademik] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [status, setStatus] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const { postPenelitian, loading: uploading, error: uploadError } = usePostPenelitian();
  const { putPenelitian, loading: updating, error: updateError } = usePutPenelitian();
  const { deletePenelitian, loading: deleting, error: deleteError } = useDeletePenelitian();
  const { data: penelitian, loading, error, refetch } = useAPI(endpoints.penelitian.getAll);

  // Handle submit for POST request (add new penelitian)
  const handleSubmitPost = async () => {
    try {
      const result = await postPenelitian(kd_penelitian, judul, lokasi, thn_akademik, tanggal, status);
      if (result) {
        alert('Penelitian berhasil ditambahkan!');
        refetch();
        setKdPenelitian('');
        setJudul('');
        setLokasi('');
        setThnAkademik('');
        setTanggal('');
        setStatus('');
      } else {
        alert('Gagal menambahkan penelitian!');
      }
    } catch (error) {
      alert('Terjadi kesalahan saat mengirim data.');
    }
  };

  // Handle submit for PUT request (update penelitian)
  const handleEditClick = (penelitian) => {
    setId(penelitian.id);
    setKdPenelitian(penelitian.kd_penelitian);
    setJudul(penelitian.judul);
    setLokasi(penelitian.lokasi);
    setThnAkademik(penelitian.thn_akademik);
    setTanggal(penelitian.tanggal);
    setStatus(penelitian.status);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setId(null);
    setKdPenelitian('');
    setJudul('');
    setLokasi('');
    setThnAkademik('');
    setTanggal('');
    setStatus('');
    setIsEditing(false);
  };

  const handleUpdate = async () => {
    if (!judul.trim() || !lokasi.trim() || !thn_akademik.trim() || !tanggal.trim()) {
      alert('Harap masukkan semua data.');
      return;
    }

    const result = await putPenelitian(id, kd_penelitian, judul, lokasi, thn_akademik, tanggal, status);

    if (result) {
      alert('Data Penelitian berhasil diperbarui!');
      handleCancelEdit();
      refetch();
    } else {
      alert('Terjadi kesalahan saat memperbarui data penelitian.');
    }
  };

  const handleDeleteClick = async (id) => {
    const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus gambar ini?');
    if (!confirmDelete) return;

    const success = await deletePenelitian  (id);
    if (success) {
      alert('Data Penelitian berhasil dihapus!');
      refetch(); // Memuat ulang daftar gambar
    } else {
      alert(`Gagal menghapus data penelitian: ${deleteError}`);
    }
  };

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

  const mahasiswaList = Array.isArray(penelitian.penelitian) ? penelitian.penelitian : [];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Data Mahasiswa</h1>

      {!isEditing ? (
        <div className="mb-6">
          <h3 className="text-xl font-bold">Tambah Penelitian</h3>
          <form>
            <input type="text" placeholder="Kode Penelitian" className="mb-4 p-2 w-full" value={kd_penelitian} onChange={(e) => setKdPenelitian(e.target.value)} />
            <input type="text" placeholder="Judul" className="mb-4 p-2 w-full" value={judul} onChange={(e) => setJudul(e.target.value)} />
            <input type="text" placeholder="Lokasi" className="mb-4 p-2 w-full" value={lokasi} onChange={(e) => setLokasi(e.target.value)} />
            <input type="text" placeholder="Tahun Akademik" className="mb-4 p-2 w-full" value={thn_akademik} onChange={(e) => setThnAkademik(e.target.value)} />
            <input type="date" placeholder="Tanggal" className="mb-4 p-2 w-full" value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
            <input type="text" placeholder="Status" className="mb-4 p-2 w-full" value={status} onChange={(e) => setStatus(e.target.value)} />
            <button type="button" onClick={handleSubmitPost} disabled={uploading} className="bg-blue-500 text-white px-4 py-2 rounded">
              {uploading ? 'Uploading...' : 'Tambah Penelitian'}
            </button>
          </form>
        </div>
      ) : (
        <div className="mb-6">
          <h3 className="text-xl font-bold">Edit Penelitian</h3>
          <form>
            <input type="text" placeholder="Kode Penelitian" className="mb-4 p-2 w-full" value={kd_penelitian} onChange={(e) => setKdPenelitian(e.target.value)} />
            <input type="text" placeholder="Judul" className="mb-4 p-2 w-full" value={judul} onChange={(e) => setJudul(e.target.value)} />
            <input type="text" placeholder="Lokasi" className="mb-4 p-2 w-full" value={lokasi} onChange={(e) => setLokasi(e.target.value)} />
            <input type="text" placeholder="Tahun Akademik" className="mb-4 p-2 w-full" value={thn_akademik} onChange={(e) => setThnAkademik(e.target.value)} />
            <input type="date" placeholder="Tanggal" className="mb-4 p-2 w-full" value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
            <input type="text" placeholder="Status" className="mb-4 p-2 w-full" value={status} onChange={(e) => setStatus(e.target.value)} />
            <div className="flex gap-4">
              <button type="button" onClick={handleUpdate} disabled={updating} className="bg-green-500 text-white px-4 py-2 rounded">
                {updating ? 'Updating...' : 'Update Penelitian'}
              </button>
              <button type="button" onClick={handleCancelEdit} className="bg-red-500 text-white px-4 py-2 rounded">Batal</button>
            </div>
          </form>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4">Kode Penelitian</th>
              <th className="py-2 px-4">Judul Penelitian</th>
              <th className="py-2 px-4">Lokasi</th>
              <th className="py-2 px-4">Tahun Akademik</th>
              <th className="py-2 px-4">Tanggal</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswaList.length > 0 ? (
              mahasiswaList.map((penelitian) => (
                <tr key={penelitian.kd_penelitian} className="border-b hover:bg-gray-100">
                  <td className="py-2 px-4 text-center">{penelitian.kd_penelitian}</td>
                  <td className="py-2 px-4">{penelitian.judul}</td>
                  <td className="py-2 px-4 text-center">{penelitian.lokasi}</td>
                  <td className="py-2 px-4">{penelitian.thn_akademik}</td>
                  <td className="py-2 px-4 text-center">{penelitian.tanggal}</td>
                  <td className="py-2 px-4">{penelitian.status}</td>
                  <td className="py-2 px-4">
                    <button onClick={() => handleEditClick(penelitian)} className="bg-yellow-500 text-white px-4 py-2 rounded">
                      Edit
                    </button>
                    <button onClick={() => handleDeleteClick(penelitian.id)} className="bg-red-500 text-white px-4 py-2 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-4 text-center">Tidak ada data penelitian</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Mahasiswa;
