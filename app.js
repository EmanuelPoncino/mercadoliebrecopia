const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.get("/home", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

const port = process.env.PORT || 5500;
app.listen(port, () => console.log("servidor corriendo en el puerto 5500"));
