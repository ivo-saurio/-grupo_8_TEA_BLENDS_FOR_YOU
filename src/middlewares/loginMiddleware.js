 module.exports = (req, res, next) => {
     if (req.session.usuario == undefined) {
        next();
     } else {
    res.redirect('/')
     }
 };