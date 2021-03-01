const path = require('path');
const bcrypt = require('bcrypt');
const db = require('../database/models')
const {validationResult} = require('express-validator')


module.exports = {
    
        login: function(req, res){
                return res.render('login')
        
        },
        processLogin: function(req, res) {
            let errors = validationResult(req);
            if(errors.isEmpty()){
                db.Usuarios.findOne({
                    where: {
                        email: req.body.email, 
                    }
                })
                .then(function(resultado){
                    let usuarioYaLogueado = resultado
                    if (usuarioYaLogueado != undefined){
                        if (bcrypt.compareSync(req.body.password, usuarioYaLogueado.password)){
                            req.session.usuario = usuarioYaLogueado
                            if (req.body.remember) {
                                res.cookie('usuario', usuarioYaLogueado.email, {maxAge: 2592000000 })
                            } 
                            res.redirect('/users/perfil/' + usuarioYaLogueado.id);
                        } else {
                            res.render ('login',{errors:errors})
                        };
                    }else{
                        res.render('login', {errors:errors})
                    }
                    })
                    .catch(function(e){
                        console.log(e);
                    })
            }else {
                return res.render('login', { errors: errors.errors})
            }
            
                
            },
            logOut:function(req,res){
                req.session.destroy();
                res.redirect('/');
            },

        productcart: function(req, res){
        return res.render('productcart')},
        
        register: function(req, res){
        return res.render('register')},
        
        create: function(req, res){
            let errors = validationResult(req);
            if(errors.isEmpty()){
                db.Usuarios.create({
                    name: req.body.name,
                    surname: req.body.surname,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 12),
                    avatar: req.file.filename
            })
            .then(function(usuarioCreado){
                res.redirect('/users/login')
            })
            .catch(function(e){
                console.log(e);
            })
            } else {
                return res.render('register', {errors:errors.errors})
            }
                
               
        },
        perfil: function(req, res){
            db.Usuarios.findByPk(req.params.id)
            .then(function(miPerfil) {
            res.render('perfil', {
            miPerfil:miPerfil
        })
            })
        },
        
        perfilEditar: function(req,res){
            db.Usuarios.findByPk(req.params.id)
            .then(function(editarPerfil) {
                res.render('perfiledit', {editarPerfil:editarPerfil})
            })
            .catch(function(e){
                console.log(e);
            })
        },

        
        perfilEditado: function(req, res){
            let errors = validationResult(req);
            if(errors.isEmpty()){
                db.Usuarios.update({
                    name: req.body.name,
                    surname: req.body.surname,
                    email: req.body.email,
                    avatar: req.file.filename,
                    password: bcrypt.hashSync(req.body.password, 12)
            },
            {
                where: {
                    id:req.params.id
                }
            })
            .then(function(){
                return res.redirect('/users/perfil/' + req.params.id)
            })
            
            .catch(function(e){
                console.log(e);
            })
            } else {
                return res.render('perfiledit')
            }
           
        }
    
}

