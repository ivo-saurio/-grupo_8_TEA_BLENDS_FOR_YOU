const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const db = require('../database/models')
const {check, validationResult, body} = require('express-validator')


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
                db.Usuario.create({
                        name: req.body.name,
                        surname: req.body.surname,
                        email: req.body.email,
                        avatar: req.file.filename,
                        password: bcrypt.hashSync(req.body.password, 12)
                })
                .then(function(usuarioCreado){
                    res.redirect('/users/perfil/' + usuarioCreado.id)
                })
               
        },
        perfil: function(req, res){
            db.Usuario.findByPk(req.params.id, {
            }) 
        .then(function(miPerfil) {
            res.render('perfil', {
            miPerfil:miPerfil
        })
            })
        },
        editarPerfil: function(req, res){
            db.Usuario.findByPk(req.params.id, {
                include: {
                    all:true,
                    nested: true
                }
            })
            .then(function(miPerfil){
                res.render('perfil', {
                    miPerfil: miPerfil
                })
            })

         },
        perfilEditar: function(req,res){
            db.Usuario.findByPk(req.params.id)
            .then(function(miPerfil) {
                res.render('perfil', {miPerfil:miPerfil})
            })
        },
        perfilEditado: function(req, res){
            db.Usuario.update({
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
        .then(function(usuarioCreado){
            res.redirect('/perfil/' + usuarioCreado.id)
        })
        }
    
}
