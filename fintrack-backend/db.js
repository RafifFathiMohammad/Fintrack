const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

async function initDB() {
    const db = await open({
        filename: './fintrack.db',
        driver: sqlite3.Database
    });

    // Membuat tabel transaksi sesuai kebutuhan proyek [cite: 22, 33]
    await db.exec(`
        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            tipe TEXT CHECK(tipe IN ('pemasukan', 'pengeluaran')),
            kategori TEXT,
            nominal REAL,
            keterangan TEXT,
            tanggal DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
    return db;
}

module.exports = initDB;