module.exports = (req, res, next) => {
    if (req.session.usuarioYaLogueado != undefined) {
        res.locals.usuarioYaLogueado = req.session.usuarioYaLogueado
    }
    next()
}