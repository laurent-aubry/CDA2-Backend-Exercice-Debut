const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(userRoutes);

//Gestion des erreurs via une page 404
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(5000);
