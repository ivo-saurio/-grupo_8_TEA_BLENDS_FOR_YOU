const path = require('path');

let usersController = {
    
        login: function(req, res){
        return res.render('login')},
        productcart: function(req, res){
        return res.render('productcart')},
        register: function(req, res){
        return res.render('register')},
    
}



module.exports = usersController;