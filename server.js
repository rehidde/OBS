const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


const veriler = require('../public/js/simulasyon_verileri.js'); 


app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));


app.use(express.static('public')); 
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.redirect('/notes.html');
});


app.get('/notes.html', (req, res) => {
    res.render('notes', { 
        aktifKullanici: veriler.aktifKullanici,
        notlarListesi: veriler.notlarListesi 
    });
});

app.get('/messaging.html', (req, res) => {
    res.render('messaging', { 
        aktifKullanici: veriler.aktifKullanici,
        sohbetVerileri: veriler.sohbetVerileri 
    });
});

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor...`);
});