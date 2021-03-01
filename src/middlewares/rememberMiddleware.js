module.exports = (req, res, next) => {
    next();

    if (req.cookies.remember != undefined && req.session.usuarioYaLogueado == undefined) {
        req.session.usuarioYaLogueado = req.cookies.remember;
    }
    };