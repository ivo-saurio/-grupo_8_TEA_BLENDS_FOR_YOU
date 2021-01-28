module.exports = function(sequelize, dataTypes) {
    let alias = "Rol";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            notNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        tipo_de_rol: {
            type: dataTypes.STRING,
            notNull: true
        },
         }
         let config = {
            tableName: 'rol',
            timestamps: false,
        }

        const Rol = sequelize.define(alias, cols, config);

     Rol.associate= function(models) {
         Rol.hasMany(models.Usuario, {
             as: 'rolesDeUsuario',
             foreignKey: 'id_rol'
         })
     }

    return Rol;
          }