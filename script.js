// 1. Class & Enkapsulasi
class Pengguna {
    #password; // Enkapsulasi (private data)

    constructor(username, role, password) {
        this.username = username;
        this.role = role;
        this.#password = password;
    }

    // Getter untuk validasi password aman
    cekPassword(inputPassword) {
        return this.#password === inputPassword;
    }

    infoLogin() {
        return `${this.username} login sebagai ${this.role}.`;
    }
}

// 2. Inheritance (Pewarisan)
class Admin extends Pengguna {
    constructor(username, password, levelAkses) {
        super(username, "Administrator", password);
        this.levelAkses = levelAkses;
    }

    // 3. Polimorfisme (Method Overriding)
    infoLogin() {
        return `ADMIN [Level ${this.levelAkses}]: ${this.username} memiliki akses penuh sistem!`;
    }
}

// --- Pengujian Objek ---
const userUmum = new Pengguna("budi123", "Siswa", "rahasia123");
const adminSekolah = new Admin("bu_kiki", "adminok", "Super Admin");

console.log(userUmum.infoLogin());
// Output: budi123 login sebagai Siswa.

console.log(adminSekolah.infoLogin());
// Output: ADMIN [Level Super Admin]: bu_kiki memiliki akses penuh sistem!

// Uji Enkapsulasi
console.log("Cek password benar:", userUmum.cekPassword("rahasia123")); // true