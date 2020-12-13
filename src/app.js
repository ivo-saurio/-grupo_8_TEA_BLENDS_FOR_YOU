const express = require('express');
const app = express();
const path = require('path');

const mainRouter = require('./routes/main');
const productosRouter = require('./routes/productos');
const usersRouter = require('./routes/users')

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/productos', productosRouter)




app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor corriendo en el puerto 3000');
    console.log("http://localhost:3000");
})