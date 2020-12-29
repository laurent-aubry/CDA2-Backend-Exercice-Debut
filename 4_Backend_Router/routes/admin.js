const express = require('express');

const router = express.Router();

router.get('/add-user', (req, res, next) => {
  res.send(
    '<form action="/user" method="POST"><input type="text" name="nom"><button type="submit">Ajouter un utilisateur</button></form>'
  );
});

router.post('/user', (req, res, next) => {
  console.log(req.body);
  // res.send(`<h1>Hello ${req.body.nom}</h1>`);
  res.redirect('/');
});

module.exports = router;
