const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Nouvelle demande');
    console.log(req.method, req.url);

    //-----DEBUT Version2
    //Permet d'extraire le résultat de la méthode POST
  if (req.method === 'POST') {
    // console.log('POST méthode');
    let body = '';
    //la fonction callbak ci-dessous est exécutée une fois que le body est chargé
    req.on('end', () => {
      const userName = body.split('=')[1];
    //   res.end('<h1>POST méthode réussie!</h1>');
      res.end('<h1>' + userName + '</h1>');
    });

    req.on('data', (load) => {
      body += load;
    });
  } else {
      //-----FIN Version2

    res.setHeader('Content-Type', 'text/html');
    res.end(
        // Par défaut, le navigateur renvoi le résultat en query parameter
      '<form ><input type="text" name="username"><button type="submit">Create User</button></form>'
      // pour modifier cela, il faut ajouter la méthode POST dans la balise <FORM>
      // '<form method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
    );
  }
});

server.listen(5000);
