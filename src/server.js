const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
// const { Sequelize } = require("sequelize");
const sequelize = require("./db.js");
const http = require("http");

app.use(express.static(path.join(__dirname, "../public")));
app.use("/libraries", express.static(path.join(__dirname, "../libraries")));
app.use("/assets", express.static(path.join(__dirname, "../assets")));

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database and tables have been initialized.");
  })
  .catch((err) => {
    console.error(`Error initializing database: ${err}`);
  });

app.get("/", function (req, res) {
  const options = {
    root: path.join(__dirname, "../public", "html"),
  };

  res.sendFile("main.html", options);
});

app.get("/form-1.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/form-1.html"));
});

app.get("/form-2.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/form-2.html"));
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log(`Server is running on http://localhost:${PORT}`);
});

const server = http.createServer(app).listen(3001);
