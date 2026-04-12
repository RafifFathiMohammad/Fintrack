const express = require('express');
const cors = require('cors');
require('dotenv').config();
// Tambahkan ini di index.js
const transactionRoutes = require('./routes/transactionRoutes');
const productRoutes = require('./routes/productRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

const app = express();
const PORT = process.env.PORT || 5000;



// Middleware
app.use(cors());
app.use(express.json()); // Agar server bisa membaca data JSON dari frontend

// Gunakan di bawah route product
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/products', productRoutes);

// Test Route (UI Sederhana untuk cek server)
app.get('/', (req, res) => {
    res.send('<h1>Server FinTrack UMKM Berjalan!</h1><p>Status: Connected</p>');
});

// Jalankan Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});