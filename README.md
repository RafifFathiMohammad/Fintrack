# FinTrack UMKM — Backend & Dashboard Management

FinTrack UMKM adalah solusi manajemen keuangan digital untuk membantu pelaku UMKM mencatat transaksi harian, mengelola stok produk, serta memantau kesehatan finansial melalui dashboard ringkasan otomatis yang terintegrasi.

## 🛠️ Tech Stack

Runtime: Node.js

Framework: Express.js

Database: SQLite3

Styling UI: Tailwind CSS (via CDN)

Tools: CORS, Dotenv, Postman (untuk testing awal)

## 📁 Struktur Folder
'''text
fintrack/
├── fintrack-backend/       # Source code Backend
│   ├── routes/             # Logika API (Transactions, Products, Dashboard)
│   ├── db.js               # Konfigurasi Database SQLite
│   ├── index.js            # Entry Point Server (Port 5000)
│   ├── package.json        # Dependencies project
│   └── .gitignore          # Daftar file yang diabaikan Git (node_modules, .db, .env)
├── index.html              # Antarmuka Admin (Dashboard & Management)
└── README.md               # Dokumentasi Project


## 🚀 Cara Menjalankan Project (Lokal)

1. Persiapan Backend

Buka terminal dan masuk ke folder backend:

cd fintrack/fintrack-backend
npm install
node index.js


Server akan berjalan secara default di http://localhost:5000

2. Menjalankan Dashboard (Frontend)

Buka file index.html yang berada di folder utama fintrack/ menggunakan browser.
Sangat disarankan menggunakan extension Live Server di VS Code agar fitur fetch berjalan lancar.

## 📡 API Endpoints

1. Transaksi (/api/transactions)

GET /api/transactions : Mengambil semua riwayat transaksi lengkap.

POST /api/transactions : Mencatat transaksi baru (pemasukan/pengeluaran).

DELETE /api/transactions/:id : Menghapus data transaksi berdasarkan ID.

2. Produk & Stok (/api/products)

GET /api/products : Melihat daftar seluruh stok produk.

POST /api/products : Menambah produk baru ke database.

DELETE /api/products/:id : Menghapus produk dari daftar.

3. Dashboard (/api/dashboard)

GET /api/dashboard/summary : Mengambil ringkasan pemasukan, pengeluaran, dan laba otomatis (khusus hari ini).

## 📌 Status Fitur Backend

✅ Selesai (Complete)

Inisialisasi Project: Setup Node.js, Express, dan struktur folder modular.

Database Engine: Integrasi SQLite3 untuk penyimpanan data persisten.

API Transaksi (CRUD): Sistem pencatatan keuangan lengkap dengan fitur hapus.

API Produk & Stok (CRUD): Manajemen inventaris barang dagangan UMKM.

Dashboard Logic: Perhitungan otomatis laba/rugi harian di sisi backend.

Integrasi Frontend: Antarmuka berbasis web (index.html) untuk mengelola data (Add/View/Delete) tanpa alat bantu luar.

⏳ Dalam Rencana (Planned)

Automated Report: Fitur konversi data transaksi menjadi laporan PDF otomatis.

User Auth: Sistem login dan hak akses untuk pemilik UMKM (JWT).

Data Export: Ekspor riwayat data ke format Excel atau CSV.

Cloud Deployment: Hosting aplikasi agar dapat diakses secara publik (online).

Status Akhir: Fitur Utama Backend & Integrasi Dashboard Management Complete.