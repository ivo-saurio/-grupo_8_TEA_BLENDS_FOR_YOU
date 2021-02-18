module.exports = (req, res, next) =>{
    if (req.session.usuario && req.session.usuario.categoria == 9) {
        next()
    }else{
        res.redirect('/')
    }
}