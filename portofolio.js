import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>Web Portofolio Reza</h1>
        <p>Selamat datang di web portofolio saya</p>
    `);
});

app.get('/about', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Tentang Saya',
        data: {
            nama: 'Reza Ratnasari',
            tempat_tanggal_lahir: 'Bukittinggi, 33 Mei 1987',
            perguruan_tinggi: 'PNP',
            jurusan: 'Teknik Elektro',
            program_studi: 'D IV Elektronika Industri',
            angkatan: '2023',
            deskripsi: 'Haii aku Reza. Sebelum kuliah aku sekolah di SMA N 1 Talamau. Aku memiliki tinggi semekot (semeter kotor). Orang-orang memanggilku Lii, Cayiii, Andung, Nyiak, Reza, Sariatun dan masih banyak lagi. Apakah teman-teman tau kenapa aku kuliah di jurusan ini? Karena aku dipaksa oleh keluarga untuk mengambil jurusan ini, terutama unii. Karena kebanyakan dari sepupu-sepupu yang lain sudah kuliah di masing-masing jurusan yang ada di PNP. Jadi karena di Elektronika ini belum ada, makanya aku disuruh ambil jurusan ini. Alhamdulillah juga bisa menjalani perkuliahan sampai sekarang. Sekian dulu ya, kalau mau lebih tau banyak hal lagi, silahkan follow IG di bawah.'
        }
    });
});

app.listen(5000, () => {
    console.info('Aplikasi jalan di http://localhost:5000')
});