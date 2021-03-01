//var createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require ("method-override");
const session = require('express-session');


const app = express();

//RUTAS REQUERIDAS
const mainRouter = require('./routes/main');
const productosRouter = require('./routes/productos');
const usersRouter = require('./routes/users');
const rememberMiddleware = require('./middlewares/rememberMiddleware');


//VIEW ENGINE SETUP
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))



app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(methodOverride("_method"));
app.use(session ({secret: 'sarasa'}));
app.use(rememberMiddleware)


//RECURSOS
app.use('/', mainRouter);
app.use('/users',usersRouter);
app.use('/productos', productosRouter)



app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor corriendo en el puerto 3000');
    console.log("http://localhost:3000");
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.redirect('https://http.cat/[status_code]');
});