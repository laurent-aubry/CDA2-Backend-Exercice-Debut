const express = require('express');

const app = express();

//app.use est une fonction MiddleWare car elle intervient entre la demande et la réponse
// elle prend 3 objets:
// request (intègre des données complémentaires par rapport à précedemment - vanilla javascript)
// response (extra data)
// next : nouveau paramètre : il renvoie la réponse au MiddleWare suivant

app.use((req, res, next) => {
  let body = '';
  req.on('end', () => {
    const userName = body.split('=')[1];
    if (userName) {
      req.body = { name: userName };
    }
    next(); //permet de continuer au Middleware suivant (ci-dessous); sinon il retourne la response
  });
  req.on('data', chunk => {
    body += chunk;
  });
});

//commencer par cette déclaration
app.use((req, res, next) => {
  if (req.body) {
    return res.send('<h1>' + req.body.name + '</h1>');
  }
  res.send(
    '<form method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
  );
});

app.listen(5000);







