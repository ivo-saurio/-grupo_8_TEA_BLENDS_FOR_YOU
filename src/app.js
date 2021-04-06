const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require ("method-override");
const session = require('express-session');
const cors = require('cors');


const app = express();

//RUTAS REQUERIDAS
const mainRouter = require('./routes/main');
const productosRouter = require('./routes/productos');
const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api/api');
const rememberMiddleware = require('./middlewares/rememberMiddleware');
const sessionMiddleware = require('./middlewares/sessionMiddleware');


//VIEW ENGINE SETUP
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(methodOverride("_method"));
app.use(session ({secret: 'botannys'}));
app.use(sessionMiddleware);
app.use(rememberMiddleware);
app.use(cors());



//RECURSOS
app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/productos', productosRouter);
app.use('/api', apiRouter);


app.listen(process.env.PORT || 3001, function(){
    console.log('Servidor corriendo en el puerto 3001');
    console.log("http://localhost:3001");
})

