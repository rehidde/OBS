
const path = require('path');
const express = require('express');
const session = require('express-session');
const db = require('./db');

const app = express();


app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/img', express.static(path.join(__dirname, 'img')));


// Session
app.use(session({
  secret: 'cok-gizli-bir-anahtar-degistir', // güçlü ve .env'den gelen bir değer kullanın
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,      // HTTPS kullanıyorsanız true yapın
    httpOnly: true,     // XSS'e karşı
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60, // 1 saat
  },
}));

// Basit view: login sayfasını servis edelim (sen HTML dosyası kullanıyorsun)
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});



// Rol eşlemesi: formdaki 'student/teacher' -> DB'deki 'ogrenci/ogretmen'
function mapRoleForDb(roleFromForm) {
  if (roleFromForm === 'student') return 'ogrenci';
  if (roleFromForm === 'teacher') return 'ogretmen';
  return roleFromForm; // başka bir şey gelirse olduğu gibi
}

// Login işlemi
app.post('/login', async (req, res) => {
  const { username, password, role } = req.body; // HTML form alan adları
  const roleDb = mapRoleForDb(role);

  try {
    const [rows] = await db.execute(
      'SELECT id, ad, soyad, rol FROM Kullanici WHERE numara = ? AND sifre = ? AND rol = ?',
      [username, password, roleDb]
    );

    if (rows.length === 0) {
      // invalid: query string ile login sayfasına dön
      return res.redirect('/login?error=invalid');
    }

    const user = rows[0];

    // Session'a yaz
    req.session.userId = user.id;
    req.session.role = user.rol;

    // İsteğe bağlı: Son giriş zamanı vs. yazabilirsiniz

    return res.redirect('/dashboardOgr');
  } catch (err) {
    console.error('Login hata:', err);
    return res.redirect('/login?error=db_error');
  }
});

// Auth middleware
function ensureAuth(req, res, next) {
  if (!req.session.userId) {
    return res.redirect('/login?error=invalid');
  }
  next();
}

// Dashboard: korumalı route
app.get('/dashboard', ensureAuth, async (req, res) => {
  try {
    // Kullanıcı bilgisi
    const [userRows] = await db.execute(
      'SELECT id, ad, soyad, foto_url, rol, numara FROM Kullanici WHERE id = ?',
      [req.session.userId]
    );
    if (userRows.length === 0) {
      return res.status(404).send('Kullanıcı bulunamadı');
    }
    const user = userRows[0];

    // OgrenciDetay (eğer varsa)
    const [detayRows] = await db.execute(
      'SELECT anne, baba, dogum, kayit, egitim, durum, sinif, program FROM OgrenciDetay WHERE id = ?',
      [req.session.userId]
    );

    const detay = detayRows[0] || {};

 } catch (err) {
    console.error('Dashboard hata:', err);
    return res.status(500).send('Sunucu hatası');
  }
});
