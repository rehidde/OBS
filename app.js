const express = require("express");
const path = require('path');
const app = express();

const session =require('express-session');

//burada public'i kök dizin yapıyoruz ve tüm dosya yollarımızı da ona göre veriyoruz
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



//normalde session içinde ki secreta şifreleme metodları eklenir ama şu anda böyle tutuyorum ileride güncellerim
app.use(session({
    secret: '3141592',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 1000*60*60}
}))


//ömer-12.12 buraya bakıcam silmeyin
app.use((req, res, next) => {
   res.locals.currentUser = req.session?.kullanici || null;
    next();
})



/***
    burada ki yapının amacı kişi tırnak içinde belirtilen sayfaya gittiyse
    yanında tanımlanmış routerı çağırarak o bilgilere erişiyor
    yeni sayfa eklemeden önce haber edin
 */
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const dashRouter = require("./routes/dashboard");
app.use("/dashboardOgr", dashRouter);

const donationRouter = require("./routes/donation");
app.use("/donation", donationRouter);

const pointRouter = require("./routes/points");
app.use("/points", pointRouter);

const noteRouter = require("./routes/notes");
app.use("/notes", noteRouter);

const messageRouter = require("./routes/messaging");
app.use("/messaging", messageRouter);

const rewardRouter = require("./routes/rewards");
app.use("/rewards", rewardRouter);

const studentDocRouter = require("./routes/studentDoc");
app.use("/studentDoc", studentDocRouter);

const transcriptRouter = require("./routes/transcript");
app.use("/transcript", transcriptRouter);

const mufredatRouter = require("./routes/mufredat");
app.use("/mufredat", mufredatRouter);

app.use((req, res) => {
  res.status(404).render('404', { title: 'Sayfa Bulunamadı, doğru değerleri girdiğinizden emin olun!' });
});



module.exports = app;

