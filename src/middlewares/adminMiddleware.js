module.exports = (req, res, next) =>{
    if (req.session.usuarioYaLogueado && req.session.usuarioYaLogueado.email == "admin@gmail.com") {
        next()
    }else{
        res.redirect('/')
    }
}