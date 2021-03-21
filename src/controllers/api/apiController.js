const db = require('../database/models')


module.exports = {
    usersAll: function(req,res){
        db.Usuarios.findAll()
            .then(function(generalUsuarios){
                let usuarios = [];
                for (let i = 0; i < generalUsuarios.length; i++) {
                    usuarios.push({
                        id:generalUsuarios[i].id,
                        nombre:generalUsuarios[i].nombre,
                        apellido:generalUsuarios[i].apellido,
                        email:generalUsuarios[i].email,
                        link:'api/users/'+generalUsuarios[i].id,
                    });
                    
                }
                return res.status(200).json({
                    count: generalUsuarios.length,
                    usuarios: usuarios,
                    link:"/api/users"
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
                    nombre: usuario.nombre,
                    apellido: usuario.apellido,
                    email:usuario.email,
                    detail:usuario.imagen
                }            
            )
        })
    }
    
}