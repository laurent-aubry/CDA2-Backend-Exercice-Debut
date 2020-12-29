// ### DEBUT DE LA LECON_2 ###
const express = require('express');

const app = express();


//ajouter cette déclaration en 2ème
app.use((req, res, next) => {
  console.log('Middleware'); //apparait 2 fois car le navigateur réclame également une favicon.
  next();  //permet de continuer au Middleware suivant (ci-dessous); sinon il retourne la response
});

//commencer par cette déclaration
app.use((req, res, next) => {
  res.send(
    '<form method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
  );
});

app.listen(5000);
// ### FIN DE LA LECON2 ###