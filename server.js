const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// --- 1. MIDDLEWARE ---
app.use(cors()); // Mengizinkan akses dari frontend (Axios)
app.use(bodyParser.json()); // Membaca body request format JSON

// --- 2. DATABASE SETUP (SQLite) ---
// Kita gunakan SQLite agar data tersimpan dalam file lokal 'fintrack.db'
const db = new sqlite3.Database('./fintrack.db', (err) => {
  if (err) console.error('Gagal koneksi database:', err.message);
  console.log('Terhubung ke database SQLite FinTrack.');
});

// Inisialisasi Tabel (Dijalankan sekali saat server start)
db.serialize(() => {
  // Tabel Produk & Stok
  db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    stock INTEGER DEFAULT 0,
    price INTEGER DEFAULT 0,
    category TEXT
  )`);

  // Tabel Transaksi (Pemasukan/Pengeluaran)
  db.run(`CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT CHECK(type IN ('pemasukan', 'pengeluaran')),
    amount INTEGER NOT NULL,
    description TEXT,
    date DATE DEFAULT (DATE('now')),
    product_id INTEGER,
    FOREIGN KEY(product_id) REFERENCES products(id)
  )`);
});

// --- 3. API ENDPOINTS (RESTful) ---

// --- A. ENDPOINT PRODUK ---

// Ambil semua produk
app.get('/api/products', (req, res) => {
  db.all("SELECT * FROM products", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ data: rows });
  });
});

// Tambah produk baru
app.post('/api/products', (req, res) => {
  const { name, stock, price, category } = req.body;
  const sql = "INSERT INTO products (name, stock, price, category) VALUES (?, ?, ?, ?)";
  db.run(sql, [name, stock, price, category], function(err) {
    if (err) return res.status(400).json({ error: err.message });
    res.json({ id: this.lastID, message: "Produk berhasil ditambahkan" });
  });
});

// --- B. ENDPOINT TRANSAKSI ---

// Ambil semua transaksi
app.get('/api/transactions', (req, res) => {
  db.all("SELECT * FROM transactions ORDER BY date DESC", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ data: rows });
  });
});

// Catat transaksi baru (Pemasukan/Pengeluaran)
app.post('/api/transactions', (req, res) => {
  const { type, amount, description, product_id } = req.body;
  const sql = "INSERT INTO transactions (type, amount, description, product_id) VALUES (?, ?, ?, ?)";
  
  db.run(sql, [type, amount, description, product_id], function(err) {
    if (err) return res.status(400).json({ error: err.message });
    
    // Logika Sederhana Update Stok jika ada product_id dan tipe pengeluaran (penjualan)
    // Dalam aplikasi nyata, ini perlu validasi lebih lanjut
    res.json({ id: this.lastID, message: "Transaksi berhasil dicatat" });
  });
});

// --- C. ENDPOINT DASHBOARD (STATISTIK) ---
app.get('/api/dashboard/stats', (req, res) => {
  const sql = `
    SELECT 
      SUM(CASE WHEN type = 'pemasukan' THEN amount ELSE 0 END) as total_income,
      SUM(CASE WHEN type = 'pengeluaran' THEN amount ELSE 0 END) as total_expense
    FROM transactions
  `;
  db.get(sql, [], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    const profit = (row.total_income || 0) - (row.total_expense || 0);
    res.json({ ...row, profit });
  });
});

// --- 4. SERVER LISTEN ---
app.listen(PORT, () => {
  console.log(`Server Backend FinTrack berjalan di http://localhost:${PORT}`);
  console.log(`Gunakan endpoint /api/transactions untuk mulai.`);
});

// Menutup database saat aplikasi dimatikan
process.on('SIGINT', () => {
  db.close();
  process.exit();
});