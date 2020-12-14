const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt')

let usuarios = fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf8');
usuarios = JSON.parse(usuarios)

let ultimoId = 0;
for(let i = 0; i < usuarios.length; i++) {
    if(ultimoId < usuarios[i].id) {
        ultimoId = usuarios[i].id
    }
}

module.exports = {
    
        login: function(req, res){
        return res.render('login')},
        productcart: function(req, res){
        return res.render('productcart')},
        register: function(req, res){
        return res.render('register')},
        create: function(req, res){
                let nuevoUsuario = {
                        id: ultimoId + 1,
                        name: req.body.name,
                        surname: req.body.surname,
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password, 12)
                }
                usuarios.push(nuevoUsuario)
                fs.writeFileSync(path.join(__dirname,'../database/users.json'), JSON.stringify(usuarios, null, 4));

                res.redirect('/')
        }
    
}
