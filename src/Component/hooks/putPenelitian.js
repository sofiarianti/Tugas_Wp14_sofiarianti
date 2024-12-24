// src/Component/hooks/usePutImage.js
import { useState } from 'react';
import api from '../Services/api';
import endpoints from '../Services/endpoints';

/**
 * usePutImage adalah custom hook yang digunakan untuk memperbarui data gambar di backend.
 * @returns { Object } - Mengembalikan fungsi putImage, serta status loading dan error.
 */
const usePutPenelitian = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Fungsi untuk memperbarui data gambar di backend.
   * @param { number } id - ID gambar yang akan diperbarui.
   * @param { string } kd_penelitian - Kode Penelitian.
   * @param { string } judul - Judul Penelitian.
   * @param { string } lokasi - Lokasi Penelitian.
   * @param { string } thn_akademik - Tahun Akademik Penelitian.
   * @param { string } tanggal - Tanggal Penelitian.
   * @param { string } status - Status Penelitian.
   * @returns { Promise<Object> } - Mengembalikan data respons dari backend atau error.
   */
  const putPenelitian = async (id, kd_penelitian, judul, lokasi, thn_akademik, tanggal, status) => {
    setLoading(true);
    setError(null);

    try {
      // Membuat objek data untuk dikirim
      const data = {
        kd_penelitian,
        judul,
        lokasi,
        thn_akademik,
        tanggal,
        status,
      };

      // Defensive check untuk memastikan endpoints.gambar.update terdefinisi
      if (!endpoints.penelitian || typeof endpoints.penelitian.update !== 'function') {
        throw new Error('endpoints.penelitian.update is not defined');
      }

      // Mengirim PUT request ke endpoint yang sesuai
      const response = await api.put(endpoints.penelitian.update(id), data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Mengembalikan data respons jika berhasil
      return response.data;
    } catch (err) {
      console.error('Error updating gambar:', err);
      // Mengambil pesan error dari respons jika tersedia
      setError(err.response?.data?.error || err.message || 'Terjadi kesalahan saat memperbarui gambar.');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { putPenelitian, loading, error };
};

export default usePutPenelitian;