const express = require('express');
const path = require('path');

const app = express();

//Settings
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');



//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api/productos', require('./src/routes/products.routes'));
app.use('/api/carrito', require('./src/routes/carrito.routes'));

//Static
app.use(express.static(path.join(__dirname, 'public')));

//ERROR 404 

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

/* app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
    res.end();
}); */

module.exports = app;