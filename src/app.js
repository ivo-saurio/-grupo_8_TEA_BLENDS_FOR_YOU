const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, './public')));

app.get('/', function(req, res) {
    res.sendFile( path.join(__dirname, './views/index.html') )
})

app.get('/productdetail', function(req, res) {
    res.sendFile( path.join(__dirname, './views/productdetail.html') )
})

app.get('/productcart', function(req, res) {
    res.sendFile( path.join(__dirname, './views/productcart.html') )
})

app.get('/register', function(req, res) {
    res.sendFile( path.join(__dirname, './views/register.html') )
})

app.get('/login', function(req, res) {
    res.sendFile( path.join(__dirname, './views/login.html') )
})

app.listen(3000, function(){
    console.log('Servidor corriendo en el puerto 3000');
})

