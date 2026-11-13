# Praktikum Pemrograman Berorientasi Objek (PBO) dengan JavaScript

Proyek sederhana ini menunjukkan implementasi konsep dasar Pemrograman Berorientasi Objek (OOP) menggunakan JavaScript berdasarkan simulasi sistem login.

## Konsep yang Digunakan
1. **Class & Enkapsulasi**: Menggunakan class `Pengguna` dengan properti private (`#password`) untuk melindungi data dari akses luar secara langsung.
2. **Inheritance (Pewarisan)**: Class `Admin` mewarisi sifat dan metode dari class `Pengguna` menggunakan keyword `extends` dan `super`.
3. **Polimorfisme (Method Overriding)**: Class `Admin` memodifikasi method `infoLogin()` sehingga memiliki keluaran yang berbeda dari method `infoLogin()` milik class parent (`Pengguna`).

## Struktur File
- `index.html`: Halaman utama untuk memuat script dan memberikan petunjuk dasar.
- `script.js`: Berisi logika OOP JavaScript dan kode pengujian pembuatan objek.

## Cara Menjalankan (Testing)
1. Pastikan file `index.html` dan `script.js` berada di dalam satu folder (direktori) yang sama.
2. Buka file `index.html` menggunakan browser pilihanmu (Google Chrome, Firefox, Edge, dll).
3. Buka **Developer Tools** dengan cara menekan tombol `F12` pada keyboard, atau klik kanan pada area kosong di halaman web lalu pilih **Inspect** (Periksa).
4. Klik tab **Console** untuk melihat hasil keluaran (output) dari kodingan.
