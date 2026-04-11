const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Agar server bisa membaca data JSON dari frontend

// Test Route (UI Sederhana untuk cek server)
app.get('/', (req, res) => {
    res.send('<h1>Server FinTrack UMKM Berjalan!</h1><p>Status: Connected</p>');
});

// Jalankan Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});