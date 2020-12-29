// ### DEBUT DE LA LECON_1 ###
const express = require('express');

const app = express();

//app.use est une fonction MiddleWare car elle intervient entre la demande et la réponse
// elle prend 3 objets:
// request (intègre des données complémentaires par rapport à précedemment - vanilla javascript)
// response (extra data)
// next : nouveau paramètre : il renvoie la réponse au MiddleWare suivant

app.use((req, res, next) => {
  res.send(
    '<form method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
  );
});

app.listen(5000);
// ### FIN DE LA LECON1 ###