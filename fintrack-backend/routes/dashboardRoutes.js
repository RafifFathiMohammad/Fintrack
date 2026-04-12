const express = require('express');
const router = express.Router();
const initDB = require('../db');

// GET: Summary untuk Dashboard
router.get('/summary', async (req, res) => {
    try {
        const db = await initDB();
        
        // Hitung Total Pemasukan
        const income = await db.get("SELECT SUM(nominal) as total FROM transactions WHERE tipe = 'pemasukan'");
        
        // Hitung Total Pengeluaran
        const expense = await db.get("SELECT SUM(nominal) as total FROM transactions WHERE tipe = 'pengeluaran'");
        
        // Hitung Total Stok Produk
        const stock = await db.get("SELECT SUM(stok) as total FROM products");

        const totalIncome = income.total || 0;
        const totalExpense = expense.total || 0;

        res.json({
            pemasukan: totalIncome,
            pengeluaran: totalExpense,
            laba_bersih: totalIncome - totalExpense,
            total_stok: stock.total || 0
        });
    } catch (error) {
        res.status(500).json({ error: "Gagal memuat ringkasan data" });
    }
});

module.exports = router;