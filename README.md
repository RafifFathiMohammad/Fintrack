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

🚀 Cara Menjalankan Project (Local)

    1. Clone Repository
        git clone [https://github.com/RafifFathiMohammad/Fintrack.git](https://github.com/RafifFathiMohammad/Fintrack.git)
        cd fintrack/fintrack-backend

    2. Install Dependencies
        npm install

    3. Menjalankan Server
        node index.js

📡 API Endpoints

    1. Transaksi (/api/transactions)
        GET /api/transactions : Mengambil semua riwayat transaksi.

        POST /api/transactions : Mencatat transaksi baru (pemasukan/pengeluaran).

        DELETE /api/transactions/:id : Menghapus data transaksi berdasarkan ID.

    2. Produk & Stok (/api/products)
        GET /api/products : Melihat daftar stok produk.

        POST /api/products : Menambah produk baru ke database.

        DELETE /api/products/:id : Menghapus produk dari daftar.

📌 Status Fitur Proyek

    Backend (Core Logic)
        Inisialisasi Server & Express	            Complete
        Database Relasional (SQLite)	            Complete
        RESTful API Transaksi (CRUD)	            Complete
        Manajemen Stok Produk (CRUD)	            Complete
        Middleware & CORS Setup	                    Complete

    Frontend & UI (Client Side)
        UI Dashboard (Visualisasi Chart.js)	        In Progress / Pending
        Form Input Transaksi & Produk	            In Progress / Pending
        Desain Responsive (Tailwind CSS)	        In Progress / Pending
        Fitur Export Laporan PDF	                In Progress / Pending
        Integrasi API (Frontend-Backend)	        In Progress / Pending