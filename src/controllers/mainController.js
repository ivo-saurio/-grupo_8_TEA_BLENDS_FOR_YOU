const path = require('path');

let mainController = {
    
    index: 
        function(req, res){
        return res.render('index')
    },

    about:
        function(req,res){
            return res.render('aboutUs')
        }
} 



module.exports = mainController;