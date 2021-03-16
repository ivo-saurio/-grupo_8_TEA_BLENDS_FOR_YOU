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
            let {email, password, remember} = req.body
            if(errors.isEmpty()){
                db.Usuarios.findOne({
                    where: {
                        email: req.body.email, 
                    }
                })
                .then(function(usuario){
                    if (usuario != undefined){
                        if (bcrypt.compareSync(password, usuario.password)){
                            req.session.usuario = usuario
                            if (remember != undefined) {
                                res.cookie('remember', usuario.email, {maxAge: 2592000000 })
                            } 
                            res.redirect('/');
                        } else {
                            res.render ('login',{errors:errors})
                        };
                    }else{
                        res.render('login', {errors:errors})
                    }
                    })
            }else {
                return res.render('login', { errors: errors.mapped()})
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
            //console.log(errors);
            if(errors.isEmpty()){
                db.Usuarios.create({
                    name: req.body.name,
                    surname: req.body.surname,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 12),
                    avatar: req.file.filename
            })
            .then(function(usuarioCreado){
                req.session.usuario = usuarioCreado.dataValues;
                res.redirect('/users/login')
            })
            .catch(function(e){
                res.send(e);
            })
            } else {
                return res.render('register', {
                    errors:errors.mapped(),
                    old:req.body
                    })
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
                db.Usuarios.update({
                    name: req.body.name,
                    surname: req.body.surname,
                    email: req.body.email,
                    //avatar: req.file.filename,
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
           
        },
        listado: function(req, res) {
            db.Usuarios.findAll()
            .then(function(usuarios){
              return res.render('listadoUsuarios', {
                usuarios : usuarios
              })
            })    
        }
    
}

