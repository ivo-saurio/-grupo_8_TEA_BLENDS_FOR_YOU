const fs = require('fs')
const path = require('path')

let productos = fs.readFileSync(path.join(__dirname, '../database/productos.json'), 'utf8');
let arrayProductos = JSON.parse(productos)


module.exports = {
    todo: function(req, res) {
        return res.send(productos)
    },

    create: function(req, res){
        return res.render ('productadd', {productosEnLaVista: productos})
    },

    porId: function(req, res){
        for(let i = 0; i < arrayProductos.length; i++){
            if(req.params.idProducto == arrayProductos[i].id){
                if(req.params.categoria){
                    return res.send(arrayProductos[i].category)
                } else{
                    return res.send(arrayProductos[i])
                }
            }
        }
        return res.send("Este producto no existe")
    },

    sendcreation: function(req, res){

    },

    edit: function(req, res){

    },

    sendedit: function(req, res){

    },

    delete: function(req, res){

    },
        
    }


