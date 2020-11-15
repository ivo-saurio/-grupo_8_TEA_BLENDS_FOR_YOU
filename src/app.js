const express = require('express');
const app = express();

const path = require('path');
const mainController = require('./controllers/mainController');
const mainRouter = require('./routes/main');

// MOTOR DE VISTA : EJS.
app.set('view engine', 'ejs');
// ESTA ES LA CARPETA QUE TIENE TODAS LAS VISTAS:
app.set('views', path.join(__dirname, '/views'))

app.use(express.static(path.join(__dirname, './public')));

app.get('/', function(req, res) {
    res.sendFile( path.join(__dirname, './views/index.html') )
})

app.get('/productdetail', function(req, res) {
    res.sendFile( path.join(__dirname, './views/productdetail.ejs') )
})

app.get('/productcart', function(req, res) {
    res.sendFile( path.join(__dirname, './views/productcart.html') )
})

app.use('/register', mainRouter);


app.get('/login', function(req, res) {
    res.sendFile( path.join(__dirname, './views/login.html') )
})

app.listen(3000, function(){
    console.log('Servidor corriendo en el puerto 3000');
    console.log("http://localhost:3000");
})