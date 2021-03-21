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
                        surname:generalUsuarios[i].surname,
                        email:generalUsuarios[i].email,
                        link:'api/users/'+ generalUsuarios[i].id,
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
                    name: usuario.name,
                    surname: usuario.surname,
                    email:usuario.email,
                    avatar:usuario.avatar
                }            
            )
        })
    }
    
}