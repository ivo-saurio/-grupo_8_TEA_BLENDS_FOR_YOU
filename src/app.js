const express = require('express');
const app = express();

const path = require('path');
const mainController = require('./controllers/mainController');
const productosController = require('./controllers/productosController')
const usersController = require('./controllers/usersController')
const mainRouter = require('./routes/main');
const productosRouter = require('./routes/productos');
const usersRouter = require('./routes/users')

app.use(express.urlencoded({extended: false}));
app.use(express.json())
// MOTOR DE VISTA : EJS.
app.set('view engine', 'ejs');
// ESTA ES LA CARPETA QUE TIENE TODAS LAS VISTAS:
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', mainRouter);

app.use('/login', usersRouter);

app.use('/productcart', usersRouter);

app.use('/productdetail', mainRouter);

app.use('/register', usersRouter);

app.use('/productadd', mainRouter);

app.use('/productos', productosRouter)




app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor corriendo en el puerto 3000');
    console.log("http://localhost:3000");
})