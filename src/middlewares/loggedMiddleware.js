 module.exports = (req, res, next) => {
     if (req.session.usuario) {
       res.locals.usuario = req.session.user;
       next();
      } else {
      return res.redirect('/users/login');
      }
    }