const fs = require('fs')
const path = require('path')

module.exports = {
    todo: function(req, res) {

        let productos = fs.readFileSync(path.join(__dirname, '../database/productos.json'), 'utf8');
        //let arrayProductos = JSON.parse(productos)
        //return res.render('productdetail', {productosEnLaVista: arrayProductos})
        return res.send(productos)
    }
}

