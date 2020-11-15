const path = require('path');

let mainController = {
    
    index: function(req, res){
        return res.render('index')},
    login: function(req, res){
        return res.render('login')},
    productcart: function(req, res){
        return res.render('productcart')},
    productdetail: function(req, res){
        return res.render('productdetail')},
    register: function(req, res){
        return res.render('register')}
}



module.exports = mainController;