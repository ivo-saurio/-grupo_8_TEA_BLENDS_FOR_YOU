module.exports = (req, res, next) => {
    next();

    if (req.cookies.remember != undefined && req.session.usuario == undefined) {
        req.session.usuario = req.cookies.remember;
    }
    };