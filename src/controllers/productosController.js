let db = require('../database/models')
const fs = require('fs')
const path = require('path')

module.exports = {

    listado: function(req, res) {
      db.Producto.findAll()
      .then(function(productos){
        return res.render('catalogo', {
          productos : productos
        })
      })
        
    },

    create : (req, res, next) => {
        res.render('create')
        },  

      productDetail : function(req, res, next) {
          let detalle = req.params.id;
  
          res.render('productDetail', {productos : productos[detalle]})
        },
      
        productEdit : (req, res, next) => {
          res.render ("edit")
        },

        edit :  function(req, res) {
          db.Producto.findByPk(req.params.id)
          .then(function(productoEditado){
            res.render('catalogo', {productoEditado: productoEditado})
          })
        }, 

        save: function(req, res){
          db.Producto.update({
          name: req.body.name,
          description: req.body.description,
          img: req.body.imagen,
          id_categoria: req.body.category
          
          },
          {
            where: {
              id: req.params.id
            }
          })
          .then(function(){
            return res.redirect('catalogo')
          })
        },

      cart :  (req, res, next) => {
        res.render('productCart')
        },  
        
        
      delete: function(req, res) {
        db.Producto.destroy({
          where: {
            id: req.params.id
          }
        })
        .then(function(){
          res.redirect('catalogo')
        })
      }, 
      
      
      productCreate: function(req, res){ 
        db.Producto.create({
          name: req.body.name,
          description: req.body.description,
          img: req.body.imagen,
          id_categoria: req.body.category
        }).then(function(){
          res.redirect('catalogo')
        })
        }
  }
  

