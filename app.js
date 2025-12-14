const express = require("express");
const path = require('path');
const app = express();

const session =require('express-session');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));



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

//tek router kullandık, değerler router/indexte döngüyle çağrılıyor
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const dashRouter = require("./routes/dashboard");
app.use("/dashboardOgr", dashRouter);


const transcriptRouter = require("./routes/transcript");
app.use("/transcript", transcriptRouter);

app.use((req, res) => {
  res.status(404).render('404', { title: 'Sayfa Bulunamadı, doğru değerleri girdiğinizden emin olun!' });
});



module.exports = app;

