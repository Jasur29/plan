console.log("web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

//1.Kirish code

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2.session code

//3. Views code

app.set("views", "views");
app.set("view engine", "ejs");

//4. Routing code
app.get("/", function (req, res) {
  res.end("<h1>hello Zubayir<h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`the server is running successfully on port :${PORT}`);
});
