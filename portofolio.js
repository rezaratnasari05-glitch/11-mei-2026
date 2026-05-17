// =========================
// FILE : index.js
// =========================

import express from 'express';

const app = express();

// mengambil folder public
app.use(express.static('public'));

// endpoint utama
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './public' });
});

// endpoint about
app.get('/about', (req, res) => {

    res.json({

        status: 'success',

        message: 'Data Portofolio Reza',

        data: {

            nama: 'Reza Ratnasari',

            tempat_tanggal_lahir: 'Bukittinggi, 33 Mei 1987',

            perguruan_tinggi: 'Politeknik Negeri Padang',

            jurusan: 'Teknik Elektro',

            program_studi: 'D IV Elektronika Industri',

            angkatan: '2023',

            deskripsi:
                'Haii aku Reza. Sebelum kuliah aku sekolah di SMA N 1 Talamau. Aku memiliki tinggi semekot (semeter kotor). Orang-orang memanggilku Lii, Cayiii, Andung, Nyiak, Reza, Sariatun dan masih banyak lagi.',

            instagram: '@rezaratnasari'
        }

    });

});

// menjalankan server
app.listen(5000, () => {

    console.log('Server berjalan di http://localhost:5000');

});