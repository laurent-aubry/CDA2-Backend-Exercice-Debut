const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use(bodyParser.json() //importante fonction pour les appels de JSON avec la BD
// app.use(bodyParser.urlencoded() //traite les autres url
//BodyParser intègre la fonction NEXT par défaut
app.use(bodyParser.urlencoded({ extended: false }));

// cette ne fonction ne tourne que pour les méthode POST :
// 2 arguments : le chemin et la fonction middleware
app.post("/user", (req, res, next) => {
  console.log(req.body);
  res.send("<h1>User: " + req.body.username + "</h1>");
});

// cette ne fonction ne tourne que pour les méthode GET :
app.get("/", (req, res, next) => {
  res.send(
    // ajouter la route action="/user"
    '<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
  );
});

app.listen(5000);
