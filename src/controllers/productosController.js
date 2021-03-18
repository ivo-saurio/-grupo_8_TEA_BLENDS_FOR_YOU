let db = require('../database/models')
const fs = require('fs')
const path = require('path')
const { validationResult } = require('express-validator')

module.exports = {

    listado: function(req, res) {
        db.Productos.findAll()
        .then(function(productos){
          return res.render('listado', {
            productos : productos
          })
        })   
    },

    catalogo: function(req, res) {
      db.Productos.findAll()
      .then(function(productos){
        return res.render('catalogo', {
          productos : productos
        })
      })    
    },
    
    create: function (req, res){
      res.render('create')
    },

    productCreate : (req, res, next) => {
      let errors = validationResult(req);
      if(errors.isEmpty()) {
        db.Productos.create({
          name: req.body.name,
          description: req.body.description,
          size: req.body.size,
          image: req.file.filename,
          id_categoria: req.body.id_categoria,
          price: req.body.price
  })
  .then(function(){
      res.redirect('/productos/listado')
  
    }) .catch(function(e){
    console.log(e);
    })
      } else {
        return res.render('create', {errors:errors.mapped()})
      }
      
        },  
     
      
    productEdit : function(req, res) {
      let errors = validationResult(req);
      if(errors.isEmpty()) { 
      db.Productos.findByPk(req.params.id, {
        include: {
        all:true,
        nested:true
        }
          })
        
          .then(function(productoEditado){
            res.render('edit', {productoEditado: productoEditado})
          })
        } else {
          return res.render('edit', {errors:errors.mapped()})
        }
        },

        save: function(req, res){
          let errors = validationResult(req);
          if(errors.isEmpty()) {
          db.Productos.update({
            name: req.body.name,
            description: req.body.description,
            size: req.body.size,
            image: req.file.filename,
            id_categoria: req.body.id_categoria,
            price: req.body.price
          },
          {
            where: {
              id: req.params.id
            }
          })
          .then(function(){
            res.redirect('/productos/listado')
          })
          .catch(function(e){
            console.log(e);
        })
      } else {
        return res.render('create', {errors:errors.mapped()})
      }
        },

      cart :  (req, res, next) => {
        res.render('productCart')
        },  
        
        
      delete: function(req, res) {
        db.Productos.destroy({
          where: {
            id: req.params.id
          }
        })
        .then(function(){
          res.redirect('/productos/listado')
        })
      }, 
      
      productDetail : function(req, res) {
          let detalle = req.params.id;
          db.Productos.findOne({
            where: {
                id: req.params.id, 
            }
            })
          .then(function(productos){
            res.render('productdetail', {productos : productos})
          })
  
         
        }
  }
  

