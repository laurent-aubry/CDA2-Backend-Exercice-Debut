// const { CodeGenerator } = require('@babel/generator');
// Demande (Request) et Réponse (Response)

const http = require('http');

// 2 arguments
const server = http.createServer((req, res) => {
  console.log('Nouvelle demande');
  console.log(req.method, req.url);

  res.setHeader('Content-Type', 'text/html'); //'text/plain' renvoie <h1>...</h1>
  res.end('<h1>Bonjour du serveur...</h1>');
});

// Processus qui tourne en permanence et attend et des request
server.listen(5000);

// En cas de changement de Code, il faut redémarrer le serveur pour voir le changement