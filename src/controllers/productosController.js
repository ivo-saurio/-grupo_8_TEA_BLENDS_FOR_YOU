const fs = require('fs')
const path = require('path')


let productos = fs.readFileSync(path.join(__dirname, '../database/productos.json'), 'utf8');
let arrayProductos = JSON.parse(productos)

let ultimoId = 0;
for(let i = 0; i < productos.length; i++) {
    if(ultimoId < productos[i].id) {
        ultimoId = productos[i].id
    }
}


module.exports = {
    listado: function(req, res) {
        return res.send(productos)
    },

    create: function(req, res){
        return res.render ('create', {arrayProductos: productos})
    },

    porId: function(req, res){
        for(let i = 1; i < arrayProductos.length; i++){
            if(req.params.idProducto == arrayProductos[i].id){
                if(req.params.categoria){
                    return res.send(arrayProductos[i].category)
                } else{
                    return res.send(arrayProductos[i],)
                } 
            } return res.render('productdetail')
        }
        return res.send("Este producto no existe")
    },

    sendcreation: function(req, res){
        let nuevoProducto = {
            id: ultimoId + 1,
            name: req.body.name,
            description: req.body.description,
            items: req.body.items,
            price: req.body.price,
            img: req.files.filename
    }
    arrayProductos.push(nuevoProducto)
    fs.writeFileSync(path.join(__dirname,'../database/productos.json'), JSON.stringify(arrayProductos, null, 4));

    res.redirect('/')

    },

    edit: (req, res) => {
        res.render('edit')
    }, 


    sendedit: function(req, res){
            return res.redirect('/')
    },

    delete: function(req, res){
        return res.redirect('/')
    },
    
}

