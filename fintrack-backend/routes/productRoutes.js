const express = require('express');
const router = express.Router();
const initDB = require('../db');

// GET: Ambil semua daftar produk
router.get('/', async (req, res) => {
    try {
        const db = await initDB();
        const products = await db.all('SELECT * FROM products');
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Gagal mengambil data produk" });
    }
});

// POST: Tambah produk baru ke stok
router.post('/', async (req, res) => {
    const { nama_produk, stok, harga, satuan } = req.body;
    try {
        const db = await initDB();
        await db.run(
            'INSERT INTO products (nama_produk, stok, harga, satuan) VALUES (?, ?, ?, ?)',
            [nama_produk, stok, harga, satuan]
        );
        res.status(201).json({ message: "Produk berhasil ditambahkan!" });
    } catch (error) {
        res.status(500).json({ error: "Gagal menambah produk" });
    }
});

// DELETE: Menghapus produk berdasarkan ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const db = await initDB();
        const result = await db.run('DELETE FROM products WHERE id = ?', id);
        
        if (result.changes === 0) {
            return res.status(404).json({ error: "Produk tidak ditemukan" });
        }
        res.json({ message: "Produk berhasil dihapus!" });
    } catch (error) {
        res.status(500).json({ error: "Gagal menghapus produk" });
    }
});

module.exports = router;