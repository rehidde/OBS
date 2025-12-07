const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Public Klasörü
app.use(express.static(path.join(__dirname, "public")));

// Form verilerini işlemek
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
