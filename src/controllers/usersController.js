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
            let {password, remember} = req.body
            if(errors.isEmpty()){
                db.Usuarios.findOne({
                    where: {
                        email: req.body.email, 
                    }
                })
                .then(function(usuario){
                        if (bcrypt.compareSync(password, usuario.password)){
                            req.session.usuario = usuario.dataValues;
                            if (req.body.remember) {
                                res.cookie('remember', usuario.dataValues.email, {maxAge: 2592000000 })
                            } 
                            res.redirect('/');
                            }else{
                                return res.render('login',
                                {notMatch:[
                                {msg:'Email o Contraseña incorrectas'}]});
                            }
                        })
                        .catch(function(e){
                            res.send(e);
                        })   
            
                    } else {           
                        return res.render('login',
                            {errors:errors.mapped(),
                                old:req.body 
                            });
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
                if(req.body.password === req.body.repassword){
                    db.Usuarios.create({
                    name: req.body.name,
                    surname: req.body.surname,
                    email: req.body.email,
                    avatar: req.file.filename,
                    password: bcrypt.hashSync(req.body.password, 12),
            })
            .then(function(usuarioCreado){
                req.session.usuario = usuarioCreado.dataValues;
                res.redirect('/users/login')
            })
            .catch(function(e){
                res.send(e);
            })
            }else{
                     return res.render('register',
                   {
                       old:req.body,
                       notMatchError:[ {msg:'Las contraseñas deben ser iguales'} ]
                   })
           }
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

