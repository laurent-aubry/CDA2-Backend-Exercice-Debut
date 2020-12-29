const fs = require('fs');

const userName = 'Laurent';

// la fonction err est appelée lorsque la 1ère partie est complétée
fs.writeFile('utilisateur.txt', 'Nom : ' + userName, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Fichier créé');
});
