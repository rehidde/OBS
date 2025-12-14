//document.getElementById('loginForm').addEventListener('submit',function(e){e.preventDefault();alert('Giriş başarılı');});

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql'); 
const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',         
    user: 'root',              
    password: 'YOUR_MYSQL_PASSWORD', 
    database: 'YOUR_DATABASE_NAME' 
});

db.connect(err => {
    if (err) {
        console.error('Veri Tabanı Bağlantı Hatası: ' + err.stack);
        return;
    }
    console.log('MySQL bağlantısı başarılı.');
});



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); 


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
});


app.post('/login', (req, res) => {
    const { username, password, role } = req.body;
    
    const sqlQuery = "SELECT * FROM Kullanici WHERE (numara = ? OR email = ?) AND sifre = ? AND rol = ?";
    
    db.query(sqlQuery, [username, username, password, role], (err, results) => {
        
        let redirectUrl = '/?error=invalid'; 
        let isAuthenticated = false;

        if (err) {
            console.error('SQL Sorgu Hatası:', err);
            return res.redirect('/?error=db_error'); 
        }

        if (results.length > 0) {
            isAuthenticated = true; 
        }

        if (isAuthenticated) {
            if (role === 'student') {
                redirectUrl = '/student/dashboard'; 
            } else if (role === 'teacher') {
                redirectUrl = '/teacher/dashboard'; 
            }
        } 

        res.redirect(redirectUrl);
    });
});

app.get('/student/dashboard', (req, res) => {
    res.send('<h1>Öğrenci Paneli</h1><p>Giriş başarılı.</p><p><a href="/">Geri Dön</a></p>');
});

app.get('/teacher/dashboard', (req, res) => {
    res.send('<h1>Öğretmen Paneli</h1><p>Giriş başarılı.</p><p><a href="/">Geri Dön</a></p>');
});


app.listen(port, () => {
    console.log('Sunucu http://localhost:${port} adresinde çalışıyor...');
});