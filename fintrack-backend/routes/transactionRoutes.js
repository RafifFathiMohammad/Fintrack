const express = require('express');
const router = express.Router();
const initDB = require('../db');

// GET: Ambil semua transaksi 
router.get('/', async (req, res) => {
    const db = await initDB();
    const data = await db.all('SELECT * FROM transactions ORDER BY tanggal DESC');
    res.json(data);
});

// POST: Tambah transaksi baru 
router.post('/', async (req, res) => {
    const { tipe, kategori, nominal, keterangan } = req.body;
    const db = await initDB();
    await db.run(
        'INSERT INTO transactions (tipe, kategori, nominal, keterangan) VALUES (?, ?, ?, ?)',
        [tipe, kategori, nominal, keterangan]
    );
    res.status(201).json({ message: "Transaksi berhasil dicatat!" });
});

// DELETE: Menghapus transaksi berdasarkan ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const db = await initDB();
        const result = await db.run('DELETE FROM transactions WHERE id = ?', id);
        
        if (result.changes === 0) {
            return res.status(404).json({ error: "Transaksi tidak ditemukan" });
        }
        res.json({ message: "Transaksi berhasil dihapus!" });
    } catch (error) {
        res.status(500).json({ error: "Gagal menghapus transaksi" });
    }
});

module.exports = router;