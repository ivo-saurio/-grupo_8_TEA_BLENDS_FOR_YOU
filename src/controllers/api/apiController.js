const db = require('../../database/models')


module.exports = {
    usersAll: function(req,res){
        db.Usuarios.findAll()
            .then(function(generalUsuarios){
                let usuarios = [];
                for (let i = 0; i < generalUsuarios.length; i++) {
                    usuarios.push({
                        id:generalUsuarios[i].id,
                        name:generalUsuarios[i].name,
                        email:generalUsuarios[i].email,
                        link:'http://localhost:3001/api/users/'+ generalUsuarios[i].id,
                    });
                    
                }
                return res.status(200).json({
                    total: generalUsuarios.length,
                    usuarios: usuarios,
                    
                })
    
            })
    },
    usersDetail: function(req,res){
        db.Usuarios.findOne({
            where:{
                id: req.params.id
                }
        })
        .then(function(usuario){
            return res.status(200).json(
                {
                    id: usuario.id,
                    name: usuario.name,
                    email:usuario.email,
                    avatar:usuario.avatar
                }            
            )
        })
    .catch(function(e){
        return res.json("User not found")
    })
    
    },

    productAll: function(req,res){
        db.Productos.findAll()
            .then(function(generalProductos){
                let productos = [];
                for (let i = 0; i < generalProductos.length; i++) {
                    productos.push({
                        id: generalProductos[i].id,
                        name: generalProductos[i].name,
                        description: generalProductos[i].description,
                        image: generalProductos[i].image,
                        size: generalProductos[i].size,
                        price:generalProductos[i].price,
                        link:'api/products/'+ generalProductos[i].id,
                    });
                    
                }
                return res.status(200).json({
                    total: generalProductos.length,
                    productos: productos,
                    link:"'http://localhost:3001/api/products/'"
                })
    
            })
    },
    productDetail: function(req,res){
        db.Productos.findOne({
            where:{
                id: req.params.id
                }
        })
        .then(function(producto){
            return res.status(200).json(
                {
                        id: producto.id,
                        name: producto.name,
                        description: producto.description,
                        image: producto.image,
                        size: producto.size,
                        price:producto.price,
                }            
            )
        })
    },
    categorias: function(req,res){
        db.Categorias.findAll()
        .then(function(generalCategorias){
        let categorias = [];
        for (let i = 0; i < generalCategorias.length; i++) {
            categorias.push({
                id: generalCategorias[i].id,
                name: generalCategorias[i].name
            });
            }

        return res.status(200).json({
            total: generalCategorias.length,
            categorias: categorias
        })
        })
    },
    
}