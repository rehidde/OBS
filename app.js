const express = require("express");
const path = require('path');
const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


//tek router kullandık, değerler router/indexte döngüyle çağrılıyor
const indexRouter = require("./routes/index");
app.use("/", indexRouter);



app.use((req, res) => {
  res.status(404).render('404', { title: 'Sayfa Bulunamadı, doğru değerleri girdiğinizden emin olun!' });
});



module.exports = app;

