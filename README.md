# FinTrack UMKM — Backend API

FinTrack UMKM adalah solusi manajemen keuangan digital untuk membantu pelaku UMKM mencatat transaksi dan mengelola stok produk secara efisien.

## 🛠️ Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: SQLite3
- **Tools**: CORS, Dotenv, Postman

## 📁 Struktur Folder
```text
fintrack/
├── fintrack-backend/
│   ├── routes/             # Endpoint API (Transactions & Products)
│   ├── db.js               # Konfigurasi Database SQLite
│   ├── index.js            # Entry Point Server
│   ├── package.json        # Dependencies
│   └── .gitignore          # File yang diabaikan Git
└── README.md
```

## 🚀 Cara Menjalankan Project (Local)
**1. Clone Repository**
git clone [https://github.com/RafifFathiMohammad/Fintrack.git](https://github.com/RafifFathiMohammad/Fintrack.git)
cd fintrack/fintrack-backend

**2. Install Dependencies**
npm install

**3. node index.js**
node index.js

## Server akan berjalan di http://localhost:5000

## 📡 API Endpoints
**1. Transaksi (/api/transactions)**
- GET /api/transactions : Mengambil semua riwayat transaksi.

- POST /api/transactions : Mencatat transaksi baru (pemasukan/pengeluaran).

- DELETE /api/transactions/:id : Menghapus data transaksi berdasarkan ID.

**2. Produk & Stok (/api/products)**
- GET /api/products : Melihat daftar stok produk.

- POST /api/products : Menambah produk baru ke database.

- DELETE /api/products/:id : Menghapus produk dari daftar.

## 📌 Status Fitur Backend
**Selesai (Complete)**
- Inisialisasi Project: Setup Node.js, Express, dan struktur folder.

- Database Engine: Integrasi SQLite3 untuk penyimpanan data persisten secara lokal.

- API Transaksi (CRUD): Endpoint untuk mencatat, melihat, dan menghapus pemasukan/pengeluaran UMKM.

- API Produk & Stok (CRUD): Endpoint untuk manajemen inventaris barang dagangan.

- Keamanan Dasar: Implementasi CORS agar API bisa diakses oleh frontend nantinya.

**Dalam Rencana (Planned / In Development)**
- API Dashboard Summary: Logika perhitungan otomatis untuk total laba/rugi dan sisa saldo.

- Automated Report Generator: Implementasi library (PDFKit/jsPDF) untuk mengonversi data transaksi menjadi file PDF.

- Authentication & Authorization: Sistem login untuk pemilik UMKM menggunakan JWT (JSON Web Token).

- Data Export/Import: Fitur untuk mengekspor riwayat transaksi ke format CSV atau Excel.

- Deployment: Hosting backend ke platform cloud (Railway/Render) agar dapat diakses secara publik.