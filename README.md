# 📚 TUGAS MATA KULIAH PEMROGRAMAN BERBASIS WEB

Proyek ini berisi implementasi kode frontend (HTML, CSS, JavaScript) untuk memenuhi serangkaian tugas dalam mata kuliah **Pemrograman Berbasis Web**.

Kode ini mencakup pembuatan beberapa fitur aplikasi web dasar, mulai dari otentikasi sederhana hingga visualisasi data dan manajemen data statis (Dummy Data).

---

## 🚀 Fitur yang Diimplementasikan

Berikut adalah fitur utama yang dikembangkan dalam proyek ini, diorganisir sesuai dengan file atau halaman utamanya:

### 1. Sistem Otentikasi Sederhana (Login)

* **File Terkait:** `index.html`, `script.js` (Logika Login), `css/style.css`
* **Tujuan:** Membuat form login yang memvalidasi kredensial pengguna terhadap data statis yang ditentukan.
* **Logika Kredensial:**
    * **Email:** `052028331@ecampus.ut.ac.id`
    * **Password:** `admin`
* **Validasi:** Jika kredensial benar, pengguna diarahkan ke `dashboard.html`. Jika salah, muncul *alert* error. Terdapat juga validasi wajib isi (*required*) dengan border merah dan pesan *error* pada input yang kosong.

### 2. Fitur Pelacakan Paket (Tracking)

* **File Terkait:** `index.html` (dapat berupa halaman terpisah), `script.js` (Logika Tracking), `dummy/data.js`, `style.css`
* **Tujuan:** Membuat antarmuka untuk melacak status paket berdasarkan nomor DO/Billing.
* **Sumber Data:** Menggunakan *dummy data* yang disimpan dalam file `dummy/data.js` untuk simulasi *database*.
* **Tampilan:** Menampilkan detail paket (Nama, Nomor DO, Rute) dalam kotak informasi, diikuti dengan *timeline* (alur waktu) perjalanan paket, meniru tampilan sistem *tracking* modern. Jika kode tidak ditemukan, muncul *alert* peringatan.

### 3. Manajemen Data Bahan Ajar (Tabel Data)

* **File Terkait:** `index.html`, `script.js`, `style.css`
* **Tujuan:** Membuat tabel untuk menampilkan daftar **Data Bahan Ajar** serta mengimplementasikan fitur penambahan data.
* **Fungsionalitas:**
    * Data awal dimuat dari *array* JavaScript (`dataBahanAjar`).
    * Terdapat tombol **"Tambah Data"** yang memunculkan *modal* form.
    * Data yang diinputkan melalui form akan **ditambahkan ke *array* `dataBahanAjar`** dan langsung **di-*render* ke DOM** (tabel) tanpa perlu *refresh* halaman (simulasi penambahan data lokal).

---

## 📂 Struktur Proyek