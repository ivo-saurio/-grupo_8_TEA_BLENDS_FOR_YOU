const path = require('path');

let mainController = {
    register: function(req, res){
        return res.render('/register');
    }
}



module.exports = mainController;