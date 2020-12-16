const fs = require('fs')
const path = require('path')
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/img'));
    },
    filename: function (req, file, cb) {
        cb(null, req.body.descripcion + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })

let productos = fs.readFileSync(path.join(__dirname, '../database/productos.json'), 'utf8');
let arrayProductos = JSON.parse(productos)

let ultimoId = 0;
for(let i = 0; i < productos.length; i++) {
    if(ultimoId < productos[i].id) {
        ultimoId = productos[i].id
    }
}


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
        let nuevoProducto = {
            id: ultimoId + 1,
            name: req.body.name,
            description: req.body.description,
            items: req.body.items,
            price: req.body.price,
            img: req.files
    }
    arrayProductos.push(nuevoProducto)
    fs.writeFileSync(path.join(__dirname,'../database/productos.json'), JSON.stringify(arrayProductos, null, 4));

    res.redirect('/')

    },

    edit: function(req, res){

    },

    sendedit: function(req, res){

    },

    delete: function(req, res){

    },

    productdetail: function(req, res){
        return res.render('productdetail')
    },
    
    productadd: function(req, res){
        return res.render('productadd')}
    
}

