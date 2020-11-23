const express = require('express');
const app = express();

const path = require('path');
const mainController = require('./controllers/mainController');
const mainRouter = require('./routes/main');

// MOTOR DE VISTA : EJS.
app.set('view engine', 'ejs');
// ESTA ES LA CARPETA QUE TIENE TODAS LAS VISTAS:
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', mainRouter);

app.use('/login', mainRouter);

app.use('/productcart', mainRouter);

app.use('/productdetail', mainRouter);

app.use('/register', mainRouter);

app.use('/formulario', mainRouter);




app.listen(3000, function(){
    console.log('Servidor corriendo en el puerto 3000');
    console.log("http://localhost:3000");
})