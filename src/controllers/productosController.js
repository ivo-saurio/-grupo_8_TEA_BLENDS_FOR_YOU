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
    
    create: function (req, res){
      res.render('create')
    },

    productCreate : (req, res, next) => {
      db.Producto.create({
        name: req.body.name,
        description: req.body.description,
        size: req.body.size,
        image: req.file.filename,
        id_categoria: req.body.id_categoria,
        price: req.body.price
})
.then(function(productoCreado){
    res.redirect('/')
})
        },  
     
      
    productEdit : function(req, res) {
      db.Producto.findByPk(req.params.id, {
        include: {
        all:true,
        nested:true
        }
          })
          .then(function(productoEditado){
            res.render('edit', {productoEditado: productoEditado})
          })
        },

        save: function(req, res){
          db.Producto.update({
          name: req.body.name,
          description: req.body.description,
          img: req.body.imagen,
          size: req.body.size,
          price: req.body.price
          
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
          res.redirect('/')
        })
      }, 
      
          productDetail : function(req, res) {
          let detalle = req.params.id;
  
          res.render('productdetail', {productos : productos[detalle]})
        }
  }
  

