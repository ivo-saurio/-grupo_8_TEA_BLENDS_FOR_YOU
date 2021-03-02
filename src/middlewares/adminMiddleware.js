module.exports = (req, res, next) =>{
    if (req.session.usuario && req.session.usuario.email == "admin@gmail.com") {
        next()
    }else{
        res.redirect('/')
    }
}