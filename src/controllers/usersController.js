const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator')

let usuarios = fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf8');
let usuariosJson = JSON.parse(usuarios)


let ultimoId = 0;
for(let i = 0; i < usuarios.length; i++) {
    if(ultimoId < usuarios[i].id) {
        ultimoId = usuarios[i].id
    }
}



module.exports = {
    
        login: function(req, res){
                return res.render('login')
        
        },
        processLogin: function(req, res) {
            let errors = validationResult(req);
            
            if  (errors.isEmpty()){
                let usuarioYaLogeado;
                for (let i = 0; i< usuariosJson.length; i++) {
                    if (usuariosJson[i].email == req.body.email){
                        if (usuariosJson[i].password == req.body.password) {
                            usuarioYaLogeado = usuariosJson[i];
                            req.session.usuarioYaLogeado = usuariosJson
                            return res.redirect('/')
                        } else {
                            return res.redirect("/users/login")
                        }
                    }  
                } 
            } else {return res.redirect('/users/login')}
        },
        

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
                        avatar: req.file.filename,
                        password: bcrypt.hashSync(req.body.password, 12)
                }
                usuarios.push(nuevoUsuario)
                fs.writeFileSync(path.join(__dirname,'../database/users.json'), JSON.stringify(usuarios, null, 4));

                res.redirect('/')
        },
        perfil: function(req, res){
        return res.render('perfil')
        }
    
}
