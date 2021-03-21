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
                        link:'http://localhost:3000/api/users/'+ generalUsuarios[i].id,
                    });
                    
                }
                return res.status(200).json({
                    count: generalUsuarios.length,
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
    
    }
    
}