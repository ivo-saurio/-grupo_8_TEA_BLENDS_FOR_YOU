 module.exports = (req, res, next) => {
     if (req.session.usuarioYaLogueado == undefined) {
        next();
     } else {
    res.redirect('/')
     }
 };