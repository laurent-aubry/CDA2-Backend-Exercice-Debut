const express = require('express');

const app = express();

//commencer par compléter cette déclaration
app.use((req, res, next) => {
  let body = '';
  req.on('end', () => {
    const userName = body.split('=')[1];
    if (userName) {
      req.body = { name: userName };
    }
    next(); //est appeler à l'intérieur de la fonction end pour s'assurer qu'il continue uniquement s'il a bien terminé de passer la request
  });
  req.on('data', chunk => {
    body += chunk;
  });
});

//Terminer en complétant cette déclaration
app.use((req, res, next) => {
    //maintenant la req.body devrait être accessible
    //si c'est le cas nous pouvons afficher notre message
  if (req.body) {
    return res.send('<h1>' + req.body.name + '</h1>');
  }
  res.send(
    '<form method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
  );
});

app.listen(5000);







